"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ArrowButton({
  title,
  href,
  variant = "default",
}: {
  title: string;
  href: string;
  variant?: "default" | "emerald";
}) {
  const router = useRouter();

  function onClick() {
    router.push(href);
  }

  const buttonClasses =
    variant === "emerald"
      ? "bg-emerald-800 text-white group-hover:bg-emerald-900 group-hover:text-white/90"
      : "text-primary-foreground bg-primary group-hover:bg-primary/90 group-hover:text-primary-foreground";

  return (
    <div
      className="inline-flex -space-x-1 group text-emerald-800"
      onClick={onClick}
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
    </div>
  );
}
