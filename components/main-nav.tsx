'use client'

import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { buttonVariants } from "./ui/button"
import { usePathname } from "next/navigation"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();
  const [id, setId] = React.useState("");

  const handleClick = (itemHref: string) => {
    const element = document.querySelector(itemHref);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setId(itemHref);
    }
  };

  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="gap-2 hidden md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href!);
                  }}
                  data-umami-event-clickmenu={item.title}
                  className={buttonVariants({
                    variant: id === item.href ? "gradient" : "ghost",
                    size: "sm",
                  })}
                >
                  {item.title}
                </a>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
