import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

export default function PreviewSection() {

    return (
        <section id="preview" className="justify-center text-left grid items-center gap-6 pb-8 pt-6 md:py-0 md:pb-0 bg-indigo-950">
            <div className="flex flex-col items-center justify-center px-10 py-0 md:px-0 md:py-10">
                <Image alt="" src="/preview.gif" className="md:py-0 py-10 rounded-xl" width={1000} height={600} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
        </section>
    )
}