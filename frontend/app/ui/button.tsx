import React from "react";

export type ButtonVariant = "solid" | "glass";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

const base =
  "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium transition cursor-pointer " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900/60 " +
  "disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  solid: "bg-gray-900 text-white shadow-md hover:bg-gray-800 active:scale-[0.99]",
  glass:
    "bg-white/20 text-gray-900 backdrop-blur border border-white/40 shadow-sm hover:bg-white/30 active:scale-[0.99]",
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  children,
  variant = "solid",
  href,
  className,
  onClick,
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const classNames = cx(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
