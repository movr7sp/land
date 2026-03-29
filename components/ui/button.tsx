'use client'

import { useState } from "react"

type MenuButtonColors = "black" | "white"

interface MenuButtonProperties {
    color : MenuButtonColors
}

export function MenuButton(props : MenuButtonProperties) {

    const [active, setActive] = useState(false);

    return (
        <button onClick={() => {setActive(!active)}} type="button" className="flex flex-col place-content-center w-20 mr-5 pointer-events-auto">
            <div className={`h-2 w-13 place-self-left rounded-2xl mb-1 bg-${props.color}`}></div>
            <div className="relative pl-1 items-center justify-center h-5 overflow-hidden" >
                <span className={`flex h-5 absolute
                                    text-sm font-bold tracking-widest text-${props.color}
                                    transition-transform duration-300 
                                    ${active ? " -translate-y-full" : "translate-y-0"}`}>
                MENU
                </span>
       
                <span className={`flex h-5 absolute
                                    text-sm font-bold tracking-widest text-${props.color} 
                                    transition-transform duration-300 
                                    ${active ? "translate-y-0" : " translate-y-full"}`}>
                MAIN 
                </span>
            </div>
        </button>
    )
}
