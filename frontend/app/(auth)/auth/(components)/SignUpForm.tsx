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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signUpFormSchema } from "@/lib/store/server/auth/schema";
import { useAuthRegister } from "@/lib/store/server/auth/mutations";

export default function SignUpForm() {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      password: "",
      username: "",
      email: "",
    },
  });

  // Mutations
  const signUpMutator = useAuthRegister();

  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    signUpMutator.mutate(values, {
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs text-gray-600">Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border-gray-500  placeholder:text-xs text-xs"
                  placeholder="Enter Username"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
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

        <Button
          loading={signUpMutator.isPending}
          className="w-full py-5 bg-blue-600 shadow-md"
          type="submit"
        >
          Submit
        </Button>
        <div className="text-xs tracking-wide text-center">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="ml-2 underline">
            Sign In
          </Link>
        </div>
      </form>
    </Form>
  );
}
