import * as z from "zod";

export const signInFormSchema = z.object({
  identifier: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .min(1, {
      message: "Username is requried.",
    })
    .email({
      message: "Email is not valid.",
    }),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, {
      message: "Password is required.",
    })
    .min(5, {
      message: "Password must be at least 5 characters.",
    })
    .max(50),
});

export const signUpFormSchema = signInFormSchema
  .extend({
    username: z
      .string({
        invalid_type_error: "Username must be a string",
      })
      .min(1, {
        message: "Username is required",
      }),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .min(1, {
        message: "Email is required",
      })

      .email({
        message: "Email is not valid.",
      }),
  })
  .omit({
    identifier: true,
  });
