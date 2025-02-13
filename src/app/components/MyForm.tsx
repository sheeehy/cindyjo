"use client";

import { useState, type FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function MyForm() {
  const [state, handleSubmit] = useForm("manqdvqb");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const formErrors: FormErrors = {};
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const message = (document.getElementById("message") as HTMLTextAreaElement).value.trim();

    if (!name) formErrors.name = "Name is required.";
    if (!email) formErrors.email = "Email is required.";
    if (!message) formErrors.message = "Message is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const customHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      handleSubmit(event);
    }
  };

  if (state.succeeded) {
    return (
      <p className="text-left text-lg sm:text-xl">
        Thanks for reaching out!
        <br /> I'll get back to you as soon as possible.
      </p>
    );
  }

  return (
    <form onSubmit={customHandleSubmit} className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg mb-2">
            Name
          </label>
          <input id="name" type="text" name="name" className="w-full px-3 py-2 bg-transparent border-b border-gray-400 outline-none focus:border-white transition-colors" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-lg mb-2">
            Email
          </label>
          <input id="email" type="email" name="email" className="w-full px-3 py-2 bg-transparent border-b border-gray-400 outline-none focus:border-white transition-colors" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-lg mb-2">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 bg-transparent border-b border-gray-400 outline-none focus:border-white transition-colors"
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
      </div>

      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />

      <button type="submit" disabled={state.submitting} className=" text-4xl sm:text-5xl md:text-6xl font-bold transition-opacity ease-in-out hover:opacity-70">
        SUBMIT
      </button>
    </form>
  );
}
