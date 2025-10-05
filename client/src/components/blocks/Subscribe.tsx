"use client";
import { submitEmail } from "@/data/actions";
import type { SubscribeProps } from "@/types";
import { useActionState } from "react";

export const INITIAL_STATE = {
  error: false,
  message: "",
};

export function Subscribe({
  headline,
  content,
  placeholder,
  buttonText,
}: Readonly<SubscribeProps>) {
  const [state, formAction, isPending] = useActionState(
    submitEmail,
    INITIAL_STATE
  );

  return (
    <section className="newsletter container">
      <div className="newsletter__info">
        <h4>{headline}</h4>
        <p className="copy">{content}</p>
      </div>
      <form className="newsletter__form" action={formAction}>
        <input
          name="email"
          type="text"
          placeholder={state?.message || placeholder}
          className={`newsletter__email ${
            state?.error ? "newsletter__email--error" : ""
          }`}
        />
        <button
          disabled={isPending}
          type="submit"
          className="newsletter__subscribe btn btn--green btn--medium"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
}
