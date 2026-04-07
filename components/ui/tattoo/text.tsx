'use client'

import { montserrat } from "./font"

interface TaglineProperties {
     children : React.ReactNode,
     className?: string
}

export function TattooTagline({children, className} : TaglineProperties) {
    return (
        <h3 className={`text-white text-3xl lg:text-6xl ${montserrat.className} ${className ?? ""}`}>
            {children}
        </h3>
    )
}