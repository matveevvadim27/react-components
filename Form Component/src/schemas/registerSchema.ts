import { z } from "zod";

export type User = z.infer<typeof registerSchema>;

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be min 2 symbols")
      .regex(/^[a-zA-Z0-9]+$/, "Only letters and numbers"),
    email: z
      .string()
      .min(4, "Name must be min 4 symbols")
      .email("Invalid email"),
    password: z
      .string()
      .min(8, "Password must be min 8 symbols")
      .max(20, "Password must be max 20 symbols")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~`])[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?/~`]+$/,
        "Password must contain at least 1 lowercase letter, 1 uppercase letter and 1 special character"
      ),
    repeatPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "The passwords do not match",
    path: ["repeatPassword"],
  });
