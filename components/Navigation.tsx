"use client";

import { NavButton } from "components/NavButton";
import { usePathname } from "next/navigation";

export const routes = [
  { href: "/", label: "Overview" },
  { href: "/transaction", label: "Transactions" },
  { href: "/accounts", label: "Accounts" },
  { href: "/categories", label: "Categories" },
  { href: "/settings", label: "Settings" }
];

export const Navigation = () => {
  const pathname = usePathname();

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
