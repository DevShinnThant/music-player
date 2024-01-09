"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { signInFormSchema } from "@/lib/store/server/auth/schema";
import { useAuthLogin } from "@/lib/store/server/auth/mutations";
import { ButtonWithLoading } from "@/components/ui/button";

export default function SignInForm() {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  // Mutations
  const loginMutator = useAuthLogin();

  function onSubmit(values: z.infer<typeof signInFormSchema>) {
    loginMutator.mutate(values, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full py-8 space-y-7"
      >
        <FormField
          control={form.control}
          name="identifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-gray-600">Email</FormLabel>
              <FormControl>
                <Input
                  className="border-gray-500  placeholder:text-xs text-xs"
                  placeholder="Enter Email Address"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-gray-600">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="border-gray-500 placeholder:text-xs text-xs"
                  placeholder="Enter Password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonWithLoading
          loading={loginMutator.isPending}
          className="w-full py-5 bg-blue-600 shadow-md"
          type="submit"
        >
          Submit
        </ButtonWithLoading>
        <div className="text-xs tracking-wide text-center">
          Don't have an account?{" "}
          <Link href="/auth/sign-up" className="ml-2 underline">
            Sign Up
          </Link>
        </div>
      </form>
    </Form>
  );
}
