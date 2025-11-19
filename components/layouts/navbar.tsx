"use client";

import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { loginUser, logoutUser, onAuthStateChanged } from "@/lib/firebase";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const router = useRouter();
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        setOpenLoginDialog(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginUser(email, password);
      router.push("/dashboard");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Login gagal. Silakan coba lagi.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.push("/");
    } catch (error: unknown) {
      console.error("Logout error:", error);
    }
  };

  // Define navigation items dynamically
  const desktopNavItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    { label: "Produk", href: "/product" },
    { label: "Layanan", href: "/service" },
    { label: "Kontak", href: "/contact" },
  ];

  const isHomePage = pathname === "/";

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
                      pathname === item.href &&
                        "before:scale-x-100 text-primary"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-white text-sm">{user.email}</span>
                <Button
                  variant="outline"
                  className="bg-lime-50 text-emerald-800 hover:bg-lime-100"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : isHomePage ? (
              <Dialog open={openLoginDialog} onOpenChange={setOpenLoginDialog}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-lime-50 text-emerald-800 hover:bg-lime-100"
                  >
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-emerald-800">
                      Welcome, Eco Feeders!
                    </DialogTitle>
                    <DialogDescription className="text-emerald-700 text-lg font-semibold pt-2">
                      Login to your account
                    </DialogDescription>
                    <p className="text-gray-500 text-sm pt-1">
                      Enter your email below to login to your account
                    </p>
                  </DialogHeader>
                  <form onSubmit={handleLogin} className="grid gap-6 py-4">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                        {error}
                      </div>
                    )}
                    <div className="grid gap-2">
                      <Label
                        htmlFor="email"
                        className="text-emerald-800 font-semibold text-base"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="wormibox@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white border-gray-200"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="password"
                        className="text-emerald-800 font-semibold text-base"
                      >
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white border-gray-200"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-emerald-800 hover:bg-emerald-900 text-white"
                    >
                      {loading ? "Loading..." : "Login"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            ) : (
              <Link href="https://shopee.co.id/wormibox" target="_blank">
                <Button
                  variant="outline"
                  className="bg-lime-50 text-emerald-800 hover:bg-lime-100"
                >
                  Pesan Sekarang
                </Button>
              </Link>
            )}
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="max-h-screen overflow-auto bg-emerald-800"
            >
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
                    <span className="text-lg font-semibold tracking-tighter text-white">
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
                  {user ? (
                    <div className="flex flex-col gap-4">
                      <span className="text-white text-sm">{user.email}</span>
                      <Button
                        variant="outline"
                        className="bg-lime-50 text-emerald-800 hover:bg-lime-100"
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </div>
                  ) : isHomePage ? (
                    <Dialog
                      open={openLoginDialog}
                      onOpenChange={setOpenLoginDialog}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="bg-lime-50 text-emerald-800 hover:bg-lime-100"
                        >
                          Login
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] bg-lime-50">
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-semibold text-emerald-800">
                            Welcome, Eco Feeders!
                          </DialogTitle>
                          <DialogDescription className="text-emerald-700 text-lg font-medium pt-2">
                            Login to your account
                          </DialogDescription>
                          <p className="text-gray-500 text-sm pt-1">
                            Enter your email below to login to your account
                          </p>
                        </DialogHeader>
                        <form
                          onSubmit={handleLogin}
                          className="grid gap-6 py-4"
                        >
                          {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                              {error}
                            </div>
                          )}
                          <div className="grid gap-2">
                            <Label
                              htmlFor="email-mobile"
                              className="text-emerald-800 font-semibold text-base"
                            >
                              Email
                            </Label>
                            <Input
                              id="email-mobile"
                              type="email"
                              placeholder="wormibox@gmail.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="bg-white border-gray-200"
                              required
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label
                              htmlFor="password-mobile"
                              className="text-emerald-800 font-semibold text-base"
                            >
                              Password
                            </Label>
                            <Input
                              id="password-mobile"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="bg-white border-gray-200"
                              required
                            />
                          </div>
                          <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white"
                          >
                            {loading ? "Loading..." : "Login"}
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Link href="https://shopee.co.id/wormibox" target="_blank">
                      <Button
                        variant="outline"
                        className="bg-lime-50 text-emerald-800 hover:bg-lime-100"
                      >
                        Pesan Sekarang
                      </Button>
                    </Link>
                  )}
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
