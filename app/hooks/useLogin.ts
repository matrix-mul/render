import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "../axiosConfig";
import axios from "axios";
import { FormData } from "@/components/Login";

const useLogin = () =>
  useMutation({
    mutationFn: (user: FormData) => {
      return instance.post("/submit", user);
    },
  });

export default useLogin;
