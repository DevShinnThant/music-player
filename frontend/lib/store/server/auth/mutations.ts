import { useMutation } from "@tanstack/react-query";
import { strapi } from "../strapi";
import {
  StrapiAuthenticationData,
  StrapiRegistrationData,
} from "@/lib/types/strapi";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export const useAuthRegister = () => {
  const { toast } = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: (payload: StrapiRegistrationData) => strapi.register(payload),
    onSuccess: () => {
      toast({
        title: "success",
        color: "green",
        description: "Sign Up Successfully.",
      });
      router.push("/");
    },
  });
};

export const useAuthLogin = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: StrapiAuthenticationData) => strapi.login(payload),
    onSuccess: () => {
      toast({
        title: "success",
        color: "green",
        description: "Sign In Successfully.",
      });
      router.push("/");
    },
  });
};
