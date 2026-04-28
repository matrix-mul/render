"use client";

import { Main, Body } from "../styles/submit";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import ContactSection from "./ContactSection";
import NameSection from "./NameSection";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Acknowledgement from "./Acknowledgement";
import { RootState } from "@/app/store/store";

export default function Page() {
  const pagenumber = useSelector<RootState>((state) => state.form.currentStep);
  const data = useSelector<RootState>((state) => state.form.formData);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Main>
      <Navbar />
      <Separator className={"bg-black mt-2.5"} />
      <Body>
        {pagenumber == 0 && <ContactSection />}
        {pagenumber == 1 && <NameSection />}
        {pagenumber == 2 && <Acknowledgement />}
      </Body>
      <Separator className={"bg-black mt-2.5"} />
    </Main>
  );
}
