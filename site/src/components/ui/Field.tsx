"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

type BaseProps = {
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  className?: string;
};

const fieldClass =
  "w-full rounded-(--radius-field) border bg-card px-3.5 py-2.5 text-[0.9375rem] text-ink-900 " +
  "placeholder:text-ink-400 transition-colors duration-150 " +
  "focus:outline-none focus:ring-2 focus:ring-ink-700/80 focus:border-ink-700 " +
  "disabled:bg-sand disabled:text-ink-500";

function Wrapper({
  label,
  hint,
  error,
  optional,
  className,
  id,
  errorId,
  children,
}: BaseProps & { id: string; errorId: string; children: React.ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-ink-900">
        {label}
        {optional && <span className="ml-1.5 font-normal text-ink-500">(facultatif)</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[0.8125rem] text-ink-500">{hint}</p>}
      {error && (
        <p id={errorId} role="alert" className="text-[0.8125rem] font-medium text-garance-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  label,
  hint,
  error,
  optional,
  className,
  ...rest
}: BaseProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <Wrapper {...{ label, hint, error, optional, className, id, errorId }}>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldClass, error ? "border-garance-600" : "border-line-strong")}
        {...rest}
      />
    </Wrapper>
  );
}

export function TextAreaField({
  label,
  hint,
  error,
  optional,
  className,
  ...rest
}: BaseProps & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className">) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <Wrapper {...{ label, hint, error, optional, className, id, errorId }}>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldClass, "min-h-28 resize-y", error ? "border-garance-600" : "border-line-strong")}
        {...rest}
      />
    </Wrapper>
  );
}

export function SelectField({
  label,
  hint,
  error,
  optional,
  className,
  children,
  ...rest
}: BaseProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "className"> & {
    children: React.ReactNode;
  }) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <Wrapper {...{ label, hint, error, optional, className, id, errorId }}>
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldClass, "appearance-none", error ? "border-garance-600" : "border-line-strong")}
        {...rest}
      >
        {children}
      </select>
    </Wrapper>
  );
}
