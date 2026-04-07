'use client'

import { useState } from "react"

interface NavProperties {
    isActive: boolean,
}

export function Nav({isActive}: NavProperties) {

    return (
    <>
        <nav className={`flex fixed 
                        inset-0 z-30
                        h-screen w-screen 
                        transition-opacity ease-in duration-400 
                        items-center justify-center
                        ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} 
                        bg-black`
                    }
        >
            
        </nav>
    </>
    )
}