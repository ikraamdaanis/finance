"use client";

import { NavButton } from "components/NavButton";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "components/ui/sheet";
import { useMedia } from "react-use";
import { useState } from "react";
import { Button } from "components/ui/button";
import { Menu } from "lucide-react";

export const routes = [
  { href: "/", label: "Overview" },
  { href: "/transaction", label: "Transactions" },
  { href: "/accounts", label: "Accounts" },
  { href: "/categories", label: "Categories" },
  { href: "/settings", label: "Settings" }
];

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isMobile = useMedia("(max-width: 1024px)", false);

  const [isOpen, setIsOpen] = useState(false);

  function handleClick(href: string) {
    router.push(href);
    setIsOpen(false);
  }

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="border-none bg-white/10 font-normal text-white outline-none transition hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent focus-visible:ring-offset-0"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map(route => {
              return (
                <Button
                  key={route.href}
                  variant={route.href === pathname ? "secondary" : "ghost"}
                  onClick={() => handleClick(route.href)}
                  className="w-full justify-start"
                >
                  {route.label}
                </Button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden items-center gap-x-2 overflow-x-auto lg:flex">
      {routes.map(route => {
        return (
          <NavButton
            key={route.href}
            href={route.href}
            label={route.label}
            isActive={pathname === route.href}
          />
        );
      })}
    </nav>
  );
};
