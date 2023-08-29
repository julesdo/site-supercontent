'use client'

import { useTheme } from "next-themes"

export default function Logo() {
    const theme = useTheme()
    return(
        <>
            <img src="/logo-dark.svg" alt="Logo" className="h-6" />
        </>
    )
}