import { useMutation } from "@tanstack/react-query";
type LoginCredentials = {
  username: string;
  password: string;
};
const BASEURL = process.env.EXPO_PUBLIC_API_URL;

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credential: LoginCredentials) => {
      const data = await fetch(`${BASEURL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
      });
      const response = await data.json();
      if (data.status !== 200) throw new Error(response.message);
      console.log(data.status);
      return response;
    },
  });
};
