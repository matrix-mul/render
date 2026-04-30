"use client";
import { useDispatch, useSelector } from "react-redux";
import { Main, Nav } from "../app/styles/home";
import { Button } from "./ui/button";
import Link from "next/link";
import { RootState } from "@/app/store/store";
import { logout } from "@/app/slice/loginSlice";
import { logoutUser } from "@/app/actions/removeCookie";
import { redirect } from "next/navigation";

export default function Navbar() {
  const loggedIn = useSelector((state: RootState) => state.login.email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    logoutUser().then(() => {
      dispatch(logout());
      redirect("/")
    });
  };

  return (
    <Nav>
      <div>
        <Button asChild className={"text-[25px] mr-2.5"} variant="link">
          <Link href={"/"}>Home</Link>
        </Button>
        <Button asChild className={"text-[25px] mr-2.5"} variant="link">
          <Link href={"/stories"}>Stories</Link>
        </Button>
        <Button asChild className={"text-[25px] mr-2.5 ml-2.5"} variant="link">
          <Link href={"/about_us"}>About Us</Link>
        </Button>
        <Button asChild className={"text-[25px] mr-2.5 ml-2.5"} variant="link">
          <Link href={"/submit"}>Create Post</Link>
        </Button>
      </div>
      {loggedIn != "" && (
        <Button
          onClick={() => handleLogout()}
          className={"text-[25px] text-red-500 mr-2.5 ml-2.5"}
          variant="link"
        >
          Logout
        </Button>
      )}
    </Nav>
  );
}
