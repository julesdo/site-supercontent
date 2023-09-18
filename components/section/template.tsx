import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";
import { Box, GithubIcon } from "lucide-react";
import { BoxesContainer } from "./boxContainer";

export default function TemplateSection() {
    const darkbggradient = "bg-gradient-to-b from-primary/120 via- to-violet-300"
    const grayTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600"

    return (
        <section id="template" className="overflow-hidden relative justify-center text-left  grid items-center gap-6 pb-8 pt-6 md:py-24 bg-indigo-950">
            <div className="flex flex-col z-20 justify-center items-center gap-4 md:flex-row">
                <a href="https://www.producthunt.com/posts/supercontent" target="_blank" className='relative inline-block overflow-hidden rounded-full p-[1px]'>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
                        🎉 Made with Supercontent
                    </div>
                </a>
            </div>
            <div className="flex flex-col z-20 md:max-w-[1000px] max-w-[400px] items-center gap-4">
                <h1 className="text-3xl text-center bg-clip-text text-transparent font-black bg-gradient-to-r from-white to-gray-300 md:text-5xl">
                    Supercontent Template
                </h1>
                <p className="text-lg text-center text-muted-foreground">
                    A template for your next website, built with Supercontent.
                </p>
                <div className="max-w-5xl mx-auto my-10 shadow-2xl shadow-primary/50">
                    <div className="w-full h-11 rounded-t-lg bg-indigo-950 flex justify-start items-center space-x-1.5 px-3">
                        <span className="w-3 h-3 rounded-full bg-red-400"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span className="w-3 h-3 rounded-full bg-green-400"></span>
                    </div>
                    <iframe
                        title="Embedded Website"
                        src="https://demo.supercontent.dev/"
                        className="w-full h-[500px] rounded-b-lg aspect-video"
                        frameBorder="0"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="flex flex-col z-20 justify-center items-center gap-4">
                <a target="_blank" data-umami-event-linktoapp="Login" className={buttonVariants({
                    variant: 'gradient',
                    size: 'lg',
                })} href="https://github.com/julesdo/supercontent-template">
                    <GithubIcon className="mr-2" size={24} />
                    Get the free template
                </a>
            </div>
        </section>
    )
}
