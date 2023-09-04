'use client'

import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/main-nav";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MobileSidebar } from "./mobile-sidebar";
import Logo from "./logo";
import { buttonVariants } from "./ui/button";
import { FileText } from "lucide-react";

export function SiteHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerClass, setHeaderClass] = useState("");
  const bgGlassmorph = "bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10"

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      // Calculez 1/4 de la hauteur de la fenêtre
      const quarterHeight = window.innerHeight / 10;

      // Si la position de défilement dépasse 1/4 de la hauteur de la fenêtre, changez la classe
      if (position >= quarterHeight) {
        setHeaderClass("bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0");
      } else {
        setHeaderClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${headerClass} sticky top-0 z-40 w-full`}>
      <div className="container flex h-12 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
        <div className="flex  items-center justify-end space-x-4">
          <MainNav items={siteConfig.mainNav} />
        </div>
        <div className="flex flex-1 md:flex-none items-center justify-end space-x-4">
          <nav className="flex items-center gap-2 space-x-1">
          <a data-umami-event-docs="Docs" href="https://docs.supercontent.dev" target="_blank" className={buttonVariants(
            {
              size: 'icon',
              variant: 'glassmorph',
            }
          )}>
              <FileText size={16} />
            </a>
            <Link data-umami-event-linktoapp="Login" href="https://app.supercontent.dev" className={buttonVariants({
              variant: 'ghost',
            })}>
              Login
            </Link>
            <div className="md:hidden">
              <MobileSidebar items={siteConfig.mainNav} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}


