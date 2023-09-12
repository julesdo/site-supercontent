import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";
import { Box } from "lucide-react";
import { BoxesContainer } from "./boxContainer";

export default function HeroSection() {
    const darkbggradient = "bg-gradient-to-b from-primary/120 via- to-violet-300"
    const grayTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600"

    return (
        <section id="home" className="bg-background overflow-hidden relative justify-center text-left  grid items-center gap-6 pb-8 pt-6 md:py-24 bg-gradient-to-b from-slate-950 to-indigo-950">
            <div className="flex flex-col z-20 justify-center items-center gap-4 md:flex-row">
                <a href="https://www.producthunt.com/posts/supercontent" target="_blank" className='relative inline-block overflow-hidden rounded-full p-[1px]'>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
                        ✨ Launched in Producthunt
                    </div>
                </a>
            </div>
            <div className="flex flex-col z-20 md:max-w-[700px] max-w-[400px] items-center gap-4">
                <h1 className="text-3xl text-center bg-clip-text text-transparent font-black bg-gradient-to-r from-white to-gray-300 md:text-5xl">
                    Supercharge Your Website with Low-Code Back Office
                </h1>
                <p className="text-lg text-center text-muted-foreground">
                    Streamline your online presence with a Low-Code Back Office platform for effortless website growth and management.
                </p>
            </div>
            <div className="flex flex-col z-20 justify-center items-center gap-4">
                <a target="_blank" data-umami-event-linktoapp="Login" className={buttonVariants({
                    variant: 'gradient',
                    size: 'lg',
                })} href="https://app.supercontent.dev">
                    Get Started
                </a>
            </div>
            <BoxesContainer />
        </section>
    )
}
