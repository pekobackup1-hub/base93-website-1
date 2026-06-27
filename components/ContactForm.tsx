"use client";

import { FormEvent, useState } from "react";

const audienceOptions = [
  "Entrepreneur / SME",
  "CSP / Incorporation Agent",
  "Law Firm / Corporate Advisor",
  "Free Zone / Channel Partner",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  audience: string;
  jurisdiction: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  audience: "",
  jurisdiction: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function validate() {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid work email.";
    }
    if (!form.company.trim()) nextErrors.company = "Enter your company name.";
    if (!form.audience) nextErrors.audience = "Select the option that fits you.";
    if (!form.message.trim()) nextErrors.message = "Add a short message.";
    return nextErrors;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      // TODO: Connect this handler to email, HubSpot, Airtable, or the selected CRM.
      setSubmitted(true);
      setForm(initialState);
    }
  }

  if (submitted) {
    return (
      <div className="surface-card rounded-lg p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-base-amethyst">
          Enquiry received
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-base-deep">
          Thanks. Base93 will follow up from connect@base93.com.
        </h3>
        <p className="mt-4 text-base leading-7 text-base-lavender">
          This is a polished mock success state until the backend, email, or CRM
          integration is connected.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-md border border-base-deep/15 bg-white px-5 py-3 text-sm font-semibold text-base-deep shadow-[0_12px_32px_rgba(43,36,65,0.08)] transition hover:-translate-y-0.5 hover:bg-base-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-amethyst"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-md border border-base-deep/10 bg-white/92 px-4 py-3.5 text-base text-base-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition placeholder:text-base-lavender/45 hover:border-base-amethyst/35 focus:border-base-amethyst focus:bg-white focus:ring-4 focus:ring-base-light/80";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="surface-card relative grid gap-5 overflow-hidden rounded-lg p-5 md:grid-cols-2 md:p-8"
    >
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-base-light via-base-amethyst to-base-lavender"
        aria-hidden="true"
      />
      <Field label="Full name" error={errors.name}>
        <input
          className={fieldClass}
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          autoComplete="name"
        />
      </Field>
      <Field label="Work email" error={errors.email}>
        <input
          className={fieldClass}
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          type="email"
          autoComplete="email"
        />
      </Field>
      <Field label="Company name" error={errors.company}>
        <input
          className={fieldClass}
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          autoComplete="organization"
        />
      </Field>
      <Field label="I am a" error={errors.audience}>
        <select
          className={fieldClass}
          value={form.audience}
          onChange={(event) => updateField("audience", event.target.value)}
        >
          <option value="">Select one</option>
          {audienceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <Field
        label="Jurisdiction or country of interest"
        error={errors.jurisdiction}
        className="md:col-span-2"
      >
        <input
          className={fieldClass}
          value={form.jurisdiction}
          onChange={(event) => updateField("jurisdiction", event.target.value)}
          placeholder="UAE, Singapore, United Kingdom, United States..."
        />
      </Field>
      <Field label="Message" error={errors.message} className="md:col-span-2">
        <textarea
          className={`${fieldClass} min-h-36 resize-y`}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us about your formation workflow, partner model, or market coverage need."
        />
      </Field>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full rounded-md bg-base-deep px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(43,36,65,0.24)] transition hover:-translate-y-0.5 hover:bg-base-lavender focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-amethyst md:w-auto"
        >
          Submit Enquiry
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-sm font-semibold text-base-deep ${className}`}>
      {label}
      {children}
      {error ? (
        <span className="mt-2 block text-sm font-medium text-red-700">
          {error}
        </span>
      ) : null}
    </label>
  );
}
