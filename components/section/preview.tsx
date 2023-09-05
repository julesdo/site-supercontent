import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function PreviewSection() {

    return (
        <section id="preview" className="justify-center text-left grid items-center gap-6 pb-8 pt-6 md:py-24 md:pb-0 bg-indigo-950">
            <div className="flex flex-col items-center justify-center">
                <img alt="" src="/preview.png" className="md:w-[70vw] md:py-0 py-10" />
            </div>
        </section>
    )
}