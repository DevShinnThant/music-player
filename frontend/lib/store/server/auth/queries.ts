import { useQuery } from "@tanstack/react-query";
import { strapi } from "../strapi";
import { SelectStrapiUser } from "./types";

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: () => strapi.fetchUser(),
    select: (data): SelectStrapiUser => {
      return {
        id: data?.id as string,
        username: data?.username as string,
        email: data?.email as string,
      };
    },
  });
};
