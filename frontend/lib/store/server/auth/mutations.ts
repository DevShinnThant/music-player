import { useMutation } from "@tanstack/react-query";
import { strapi } from "../strapi";
import {
  StrapiAuthenticationData,
  StrapiRegistrationData,
} from "@/lib/types/strapi";
import { useToast } from "@/components/ui/use-toast";

export const useAuthRegister = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: (payload: StrapiRegistrationData) => strapi.register(payload),
    onSuccess: () => {
      toast({
        title: "success",
        color: "green",
        description: "Sign Up Successfully.",
      });
    },
  });
};

export const useAuthLogin = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: (payload: StrapiAuthenticationData) => strapi.login(payload),
    onSuccess: () => {
      toast({
        title: "success",
        color: "green",
        description: "Sign In Successfully.",
      });
    },
  });
};
