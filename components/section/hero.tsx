import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";

export default function HeroSection() {
    const darkbggradient = "bg-gradient-to-b from-primary/120 via- to-violet-300"
    const grayTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600"

    return (
        <section className="bg-background h-[50vh] justify-center text-left  grid items-center gap-6 pb-8 pt-6 md:py-24 bg-gradient-to-b from-slate-950 to-indigo-950">
            <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
                <Badge variant="glassmorph" className="w-fit" >
                    Beta 1.00
                </Badge>
            </div>
            <div className="flex flex-col md:max-w-[700px] max-w-[400px] items-center gap-4">
                <h1 className="text-3xl text-center bg-clip-text text-transparent font-black bg-gradient-to-r from-white to-gray-300 md:text-5xl">
                Elevate Your E-commerce with Low-Code Power
                </h1>
                <p className="text-lg text-center text-muted-foreground">
                    Simplify your ecommerce business with a low-code platform that allows you to build, manage and scale your business with ease.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
                <Link className={buttonVariants({
                    variant: 'gradient',
                    size: 'lg',
                })} href="https://app.supercontent.dev">
                    Get Started
                </Link>
            </div>
        </section>
    )
}