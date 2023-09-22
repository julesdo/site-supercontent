'use client'

import { useTheme } from "next-themes"
import Image from "next/image"

export default function Logo() {
    const theme = useTheme()
    return(
        <>
            <Image width={200} height={50} src="/logo-gradient.svg" alt="Logo" className="h-5" />
        </>
    )
}