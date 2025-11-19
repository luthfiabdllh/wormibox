"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ArrowButton({
  title,
  href,
  variant = "default",
  target = "_blank",
}: {
  title: string;
  href: string;
  variant?: "default" | "emerald";
  target?: "_blank" | "_self";
}) {

  const buttonClasses =
    variant === "emerald"
      ? "bg-emerald-800 text-white group-hover:bg-emerald-900 group-hover:text-white/90"
      : "text-primary-foreground bg-primary group-hover:bg-primary/90 group-hover:text-primary-foreground";

  return (
    <Link
      href={href}
      target={target}
      className="inline-flex -space-x-1 group text-emerald-800"
    >
      <button
        className={`rounded-full transition ${buttonClasses} h-10 px-6 text-base sm:text-md whitespace-nowrap font-medium`}
      >
        {title}
      </button>
      <button
        className={`rounded-full transition ${buttonClasses} size-10 items-center flex justify-center`}
      >
        <ArrowUpRight />
      </button>
    </Link>
  );
}
