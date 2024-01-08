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

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  identifier: z
    .string()
    .min(12, {
      message: "Please enter valid email.",
    })
    .email({
      message: "Email is not valid.",
    }),

  password: z
    .string()
    .min(5, {
      message: "Password must be at least 5 characters.",
    })
    .max(50),
});

export default function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      identifier: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  className="border-gray-500 placeholder:text-xs text-xs"
                  placeholder="Enter Password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full py-5 bg-blue-600 shadow-md" type="submit">
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
