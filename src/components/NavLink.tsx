"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type AnchorProps = Omit<React.ComponentPropsWithoutRef<"a">, "href">;

interface NavLinkCompatProps extends AnchorProps, LinkProps {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const hrefValue = typeof href === "string" ? href : href?.pathname ?? "";
    const isActive = pathname === hrefValue;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName, pendingClassName && false)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
