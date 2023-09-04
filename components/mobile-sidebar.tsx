'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button, buttonVariants } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Separator } from "./ui/separator"
import { NavItem } from "@/types/nav"
import Link from "next/link"
import Logo from "./logo"
import { usePathname } from "next/navigation"

interface MainNavProps {
    items?: NavItem[]
  }

  
  export const MobileSidebar = ({items}:MainNavProps) => {
    const pathname = usePathname()
    const bgGlassmorph = "bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10"
    return (
      <Sheet>
        <SheetTrigger className={buttonVariants({
            variant: 'ghost',
            size: 'icon',
        })}>
            <MenuIcon size={24} />
        </SheetTrigger>
        <SheetContent className={bgGlassmorph} >
          <SheetHeader>
            <Logo />
            <Separator />
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-12">
            {items?.map(
                (item, index) =>
                    item.href && (
                    <Link
                        key={index}
                        href={item.href}
                        className={buttonVariants({
                            variant: pathname === item.href ? "glassmorph" : "ghost",
                            className: 'w-full text-left'
                        })
                        }
                    >
                        {item.title}
                    </Link>
                    )
                )}
          </nav>
        </SheetContent>
      </Sheet>
    )
  }