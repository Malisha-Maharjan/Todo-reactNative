import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUserContext } from "../context/userContext";
const BASEURL = process.env.EXPO_PUBLIC_API_URL;

export const useFetchTodo = () => {
  const queryClient = useQueryClient();
  const { token } = useUserContext();
  console.log({ token });
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const data = await fetch(`${BASEURL}todo/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await data.json();
      console.log(response);
      return response;
    },
  });
};

export type AddTodoParams = {
  task: string;
  description: string;
  scheduled_at: string;
};

export const useAddTodo = () => {
  const { token } = useUserContext();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ task, description, scheduled_at }: AddTodoParams) => {
      const data = await fetch(`${BASEURL}todo/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ task, description, date: scheduled_at }),
      });
      const response = await data.json();
      if (data.status !== 200) throw new Error(response.message);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
