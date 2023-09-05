import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";

export default function HeroSection() {
    const darkbggradient = "bg-gradient-to-b from-primary/120 via- to-violet-300"
    const grayTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600"

    return (
        <section id="home" className="bg-background h-[50vh] justify-center text-left  grid items-center gap-6 pb-8 pt-6 md:py-24 bg-gradient-to-b from-slate-950 to-indigo-950">
            <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
                <Badge variant="glassmorph" className="w-fit" >
                    Beta 1.00
                </Badge>
            </div>
            <div className="flex flex-col md:max-w-[700px] max-w-[400px] items-center gap-4">
                <h1 className="text-3xl text-center bg-clip-text text-transparent font-black bg-gradient-to-r from-white to-gray-300 md:text-5xl">
                Supercharge Your Website with Low-Code Back Office
                </h1>
                <p className="text-lg text-center text-muted-foreground">
                Streamline your online presence with a Low-Code Back Office platform for effortless website growth and management.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
            <a href="https://www.producthunt.com/posts/supercontent?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-supercontent" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=413074&theme=light" alt="Supercontent - Supercharge&#0032;Your&#0032;Website&#0032;with&#0032;Low&#0045;Code&#0032;Back&#0032;Office | Product Hunt" style={{width: '250px', height: '44px'}} width="250" height="54" /></a>
                <Link data-umami-event-linktoapp="Login" className={buttonVariants({
                    variant: 'gradient',
                    size: 'lg',
                })} href="https://app.supercontent.dev">
                    Get Started
                </Link>
            </div>
        </section>
    )
}
