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
import { useState } from "react"

interface MainNavProps {
    items?: NavItem[]
  }

  
  export const MobileSidebar = ({items}:MainNavProps) => {
    const pathname = usePathname()
    const [id, setId] = useState("");
    const [isSheetOpen, setIsSheetOpen] = useState(false); // State to control the Sheet's open/close state

    const toggleSheet = () => {
      setIsSheetOpen(!isSheetOpen);
    };
  
    const closeSheet = () => {
      setIsSheetOpen(false);
    };
  
    const handleClick = (itemHref: string) => {
      const element = document.querySelector(itemHref);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setId(itemHref);
      }
    };
    return (
      <Sheet
      open={isSheetOpen} // Pass the open state to control the Sheet
      onOpenChange={setIsSheetOpen} // Pass the setter to control the Sheet
      >
        <SheetTrigger onClick={toggleSheet} className={buttonVariants({
            variant: 'ghost',
            size: 'icon',
        })}>
            <MenuIcon size={24} />
        </SheetTrigger>
        <SheetContent className='bg-gradient-to-b from-slate-950 to-indigo-950' >
          <SheetHeader>
            <Logo />
            <Separator />
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-12">
          {items?.map((item, index) =>
            item.href ? (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  closeSheet();
                  handleClick(item.href!);
                }}
                data-umami-event-clickmenu={item.title}
                className={buttonVariants({
                  variant: id === item.href ? "glassmorph" : "ghost",
                  className: "w-full text-left",
                })}
              >
                {item.title}
              </a>
            ) : null
          )}
          </nav>
        </SheetContent>
      </Sheet>
    )
  }