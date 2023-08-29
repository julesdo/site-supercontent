'use client'

import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"

import { MobileSidebar } from "./mobile-sidebar"
import Logo from "./logo"
import { buttonVariants } from "./ui/button"
import { usePathname } from "next/navigation"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="gap-2 hidden md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={buttonVariants({
                    variant: pathname === item.href ? "glassmorph" : "ghost",
                    size: "sm",
                  })
                  }
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
