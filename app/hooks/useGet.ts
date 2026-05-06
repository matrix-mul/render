import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "../axiosConfig";
import axios from "axios";
import { FormData } from "@/components/Login";

function useGet(select: any) {
  const info = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/`,
      );
      return res.data;
    },
    staleTime: Infinity,
    select,
  });
  return info;
}
export const useGetAll = () => useGet((data: any) => data);
export const useGetID = (id: number) =>
  useGet((data: any) => data.find((todo: any) => todo.id === id));

export const useLogin = () => useMutation({
  mutationFn: (user: FormData) => {
    return instance.post("/submit", user);
  },
});