import { useMutation } from "@tanstack/react-query";
import { strapi } from "../strapi";
import {
  StrapiAuthenticationData,
  StrapiRegistrationData,
} from "@/lib/types/strapi";

export const useAuthRegister = () => {
  return useMutation({
    mutationFn: (payload: StrapiRegistrationData) => strapi.register(payload),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export const useAuthLogin = () => {
  return useMutation({
    mutationFn: (payload: StrapiAuthenticationData) => strapi.login(payload),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
