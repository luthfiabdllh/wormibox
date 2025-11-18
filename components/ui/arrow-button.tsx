"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ArrowButton({ title, href }: { title: string; href: string }) {
  const router = useRouter();

  function onClick() {
    router.push(href);
  }

  return (
    <div className="inline-flex -space-x-1 group text-emerald-800" onClick={onClick}>
      <button className="rounded-full transition group-hover:bg-primary/90 group-hover:text-primary-foreground text-primary-foreground bg-primary h-10 px-6 text-base sm:text-md whitespace-nowrap font-medium">
        {title}
      </button>
      <button className="rounded-full transition group-hover:bg-primary/90 group-hover:text-primary-foreground text-primary-foreground bg-primary size-10 items-center flex justify-center">
        <ArrowUpRight />
      </button>
    </div>
  );
}
