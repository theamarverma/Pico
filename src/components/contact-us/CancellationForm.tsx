"use client";
import * as React from "react";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import axios from "axios";
import { http } from "@/services/httpClient";
import { toast } from "react-toastify";

type CancellationFormValues = {
  bookingId: string;
  email: string;
};
function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(", ")}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}
const CancellationForm = () => {
  const form = useForm({
    defaultValues: {
      bookingId: "",
      email: "",
    } as CancellationFormValues,
    onSubmit: async ({ value }) => {
      try {
        // console.log("onsubmit todo", value);
        const bookingId = value.bookingId;
        const email = value.email;
        console.log(bookingId, email);
        await http.delete(`/api/cancel/${bookingId}/${email}`);
        form.reset();
        await toast.success("Cancellation Successful");
      } catch (error: any) {
        toast.error("Error submitting reservation:", error);
        console.error("Error submitting reservation:", error);
        if (error.response && error.response.data) {
          alert(`Submission failed: ${error.response.data.error}`);
        } else {
          alert("Something went wrong. Please try again.");
        }
      }
    },
  });
  return (
    <div className="">
      <form
        className="w-full space-y-10 bg-white pb-10"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <div className="mx-auto flex max-w-56 items-center justify-center bg-picoChocolate p-2 px-10 text-sm text-white">
          For Cancellation
        </div>
        <div className="mx-4 flex justify-center gap-4 md:mx-auto md:w-[500px]">
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => {
                  if (!value) return "Email is required";
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  return !emailRegex.test(value)
                    ? "Invalid email format"
                    : undefined;
                },
              }}
            >
              {(field) => (
                <>
                  <label
                    className="text-sm text-picoFormText"
                    htmlFor={field.name}
                  >
                    Email:
                  </label>
                  <input
                    className="w-full border border-picoFormBorder bg-white p-2 text-picoFormText placeholder:text-sm placeholder:text-gray-500"
                    placeholder="Input Your Email"
                    type="email"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>

          {/* Booking ID Field */}
          <div className="flex flex-col gap-2">
            <form.Field
              name="bookingId"
              validators={{
                onChange: ({ value }) =>
                  !value ? "Booking ID is required" : undefined,
              }}
            >
              {(field) => (
                <>
                  <label
                    className="text-sm text-picoFormText"
                    htmlFor={field.name}
                  >
                    Booking ID:
                  </label>
                  <input
                    className="w-full border border-picoFormBorder bg-white p-2 text-picoFormText placeholder:text-sm placeholder:text-gray-500"
                    placeholder="Input Your Booking ID"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
        </div>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              className="mx-auto mt-4 flex items-center justify-center bg-picoChocolate p-3 px-10 text-sm text-white"
              type="submit"
              disabled={!canSubmit}
            >
              {isSubmitting ? "Cancelling..." : "Cancel"}
            </button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
};

export default CancellationForm;
