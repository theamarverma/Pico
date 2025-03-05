"use client";
import * as React from "react";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import { DateTimePicker } from "./DateTimePicker";

type ReservationFormValues = {
  name: string;
  email: string;
  phone: string;
  datetime: Date | undefined;
  seats: string;
  specialRequest: string;
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

export default function ReservationForm() {
  const form = useForm<
    ReservationFormValues,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      datetime: undefined,
      seats: "",
      specialRequest: "",
    },
    onSubmit: async ({ value }) => {
      // Process your form data here
      console.log(value);
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        {/* Name Field */}
        <div className="flex flex-col gap-2">
          <form.Field
            name="name"
            validators={{
              onChange: ({ value }) =>
                !value ? "Name is required" : undefined,
            }}
          >
            {(field) => (
              <>
                <label
                  className="text-xs text-picoFormText"
                  htmlFor={field.name}
                >
                  Name:
                </label>
                <input
                  className="w-full border border-picoFormBorder bg-white p-1 text-picoFormText placeholder:text-xs placeholder:text-gray-500"
                  placeholder="Input Your Name"
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
                  className="text-xs text-picoFormText"
                  htmlFor={field.name}
                >
                  Email:
                </label>
                <input
                  className="w-full border border-picoFormBorder bg-white p-1 text-picoFormText placeholder:text-xs placeholder:text-gray-500"
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

        {/* Phone Field */}
        <div className="flex flex-col gap-2">
          <form.Field
            name="phone"
            validators={{
              onChange: ({ value }) =>
                !value ? "Phone is required" : undefined,
            }}
          >
            {(field) => (
              <>
                <label
                  className="text-xs text-picoFormText"
                  htmlFor={field.name}
                >
                  Phone:
                </label>
                <input
                  className="w-full border border-picoFormBorder bg-white p-1 text-picoFormText placeholder:text-xs placeholder:text-gray-500"
                  placeholder="Input Your Phone Number"
                  type="tel"
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

        {/* Reservation Date & Time Field */}
        <div className="flex flex-col gap-2">
          <form.Field
            name="datetime"
            validators={{
              onChange: ({ value }) =>
                !value ? "Reservation date and time required" : undefined,
            }}
          >
            {(field) => (
              <>
                <label
                  className="text-xs text-picoFormText"
                  htmlFor={field.name}
                >
                  Reservation Date & Time:
                </label>
                <DateTimePicker
                  value={field.state.value}
                  onChange={(newDate: Date) => field.handleChange(newDate)}
                />
                <FieldInfo field={field} />
              </>
            )}
          </form.Field>
        </div>

        {/* Seats Dropdown */}
        <div className="flex flex-col gap-2">
          <form.Field
            name="seats"
            validators={{
              onChange: ({ value }) =>
                !value ? "Please select the number of seats" : undefined,
            }}
          >
            {(field) => (
              <>
                <label
                  className="text-xs text-picoFormText"
                  htmlFor={field.name}
                >
                  Seats:
                </label>
                <select
                  id={field.name}
                  className="w-full border border-picoFormBorder bg-white p-1 text-picoFormText placeholder:text-xs placeholder:text-gray-500"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                >
                  <option value="">Select seats</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <FieldInfo field={field} />
              </>
            )}
          </form.Field>
        </div>

        {/* Special Request Field */}
        <div className="flex flex-col gap-2">
          <form.Field name="specialRequest">
            {(field) => (
              <>
                <label
                  className="text-xs text-picoFormText"
                  htmlFor={field.name}
                >
                  Special Request:
                </label>
                <textarea
                  className="w-full border border-picoFormBorder bg-white p-1 text-picoFormText placeholder:text-xs placeholder:text-gray-500"
                  placeholder="Input Your Special Request"
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

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              className="mt-4 bg-picoTeal p-2 px-4 text-xs text-white"
              type="submit"
              disabled={!canSubmit}
            >
              {isSubmitting ? "Submitting..." : "Book Now"}
            </button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}
