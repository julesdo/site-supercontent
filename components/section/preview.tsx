import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

export default function PreviewSection() {

    return (
        <section id="preview" className="justify-center text-left grid items-center gap-6 pb-8 pt-6 md:py-24 md:pb-0 bg-indigo-950">
            <div className="flex flex-col items-center justify-center">
                <Image alt="" src="/preview.png" className="md:py-0 py-10" width={1000} height={600} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
        </section>
    )
}