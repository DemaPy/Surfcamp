"use server";

import { INITIAL_STATE } from "@/components/blocks/Subscribe";
import z from "zod";
import { subscribeService } from "./services";

const emailSchema = z.object({
  email: z.email({
    error: "Provide valid email address.",
  }),
});

export async function submitEmail(
  _currentState: typeof INITIAL_STATE,
  formData: FormData
) {
  const email = formData.get("email");
  const validateFormData = emailSchema.safeParse({
    email,
  });

  if (!validateFormData.success) {
    const errors = z.flattenError(validateFormData.error);
    return {
      error: true,
      message: errors.fieldErrors.email!.toString(),
    };
  }
  const response = await subscribeService(validateFormData.data.email);

  if (response?.error) {
    return {
      error: true,
      message: response.error.message,
    };
  }

  return {
    error: false,
    message: "Thank you for subscribing!",
  };
}
