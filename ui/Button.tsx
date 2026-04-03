"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "red" | "blue";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  variant = "blue",
  className = "",
}) => {
  const baseClasses =
    "inline-flex w-fit items-center justify-center border px-4 py-2.5 text-[10px] uppercase tracking-[0.22em] font-poppins transition-colors duration-200 sm:px-5 sm:text-xs";

  const variantClasses =
    variant === "red"
      ? "border-genesis-red bg-genesis-red text-white hover:border-genesis-red-dark hover:bg-genesis-red-dark"
      : "border-genesis-navy bg-genesis-navy text-white hover:border-genesis-navy-dark hover:bg-genesis-navy-dark";

  const finalClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={finalClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClasses}>
      {text}
    </button>
  );
};

export default Button;
