"use client";

import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  // Define navigation items dynamically
  const desktopNavItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    { label: "Produk", href: "/product" },
    { label: "Layanan", href: "/service" },
    { label: "Kontak", href: "/contact" },
  ];

  return (
    <section className="py-4 fixed top-0 left-0 w-full z-50 bg-emerald-800/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between ">
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              width={36}
              height={36}
              src="/icon.svg"
              className="max-h-8"
              alt="wormibox logo"
            />
            <span className="text-xl font-semibold text-white tracking-tighter">
              WormiBox
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {desktopNavItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 cursor-pointer bg-transparent hover:bg-transparent text-white hover:text-primary",
                      pathname === item.href && "before:scale-x-100 text-primary"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline" className="bg-lime-50 text-emerald-800">Login</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      width={32}
                      height={32}
                      src="/icon.svg"
                      className="max-h-8"
                      alt="wormibox logo"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      WormiBox
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  {desktopNavItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "font-medium",
                        pathname === item.href && "text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline" className="bg-lime-50 text-emerald-800">Login</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
