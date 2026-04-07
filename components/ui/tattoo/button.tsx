'use client'

import Link from "next/link"
import { useState } from "react"

import { jost } from "./font"
import { bebas } from "./font"

export function RectangleBlackButton(props: {href:string, text:string}) {
    return (
        <Link href={props.href} className="flex ml-5 mt-4">
            <button className={`text-xl ${bebas.className} 
                                w-30 h-12 
                                border border-white 
                                bg-black 
                                text-white 
                                shadow-lg`} 
                            type="button">
                {props.text}
            </button>
        </Link>
    )
}

export type Themes = "light" | "dark"

interface SwitchButtonProperties {
    onClick? : () => void
}

export function SwitchButton(props : SwitchButtonProperties) {

    const [active, setActive] = useState(false);

    return (
        <button onClick={() => {props.onClick?.(); setActive(!active)}} type="button" className="flex flex-col place-content-center w-20 mr-5 pointer-events-auto">
            <div className={`h-2 w-13 place-self-left rounded-2xl mb-1 bg-white`}></div>
            <div className="relative pl-1 items-center justify-center h-5 overflow-hidden" >
                <span className={`flex h-5 absolute
                                    text-sm font-bold tracking-widest text-white
                                    transition duration-400 ease-in
                                    ${active ? " -translate-y-full" : "translate-y-0"}`}>
                MENU
                </span>
       
                <span className={`flex h-5 absolute
                                    text-sm font-bold tracking-widest text-white 
                                    transition duration-400 ease-in
                                    ${active ? "translate-y-0" : " translate-y-full"}`}>
                BACK 
                </span>
            </div>
        </button>
    )
}