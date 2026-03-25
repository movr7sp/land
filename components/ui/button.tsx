'use client'

import { useState } from "react"

export function MenuButton() {

    const [active, setActive] = useState(false);

    return (
        <button onClick={() => {alert(1)}} type="button" className="flex flex-col place-content-center w-20 mr-5 pointer-events-auto">
            <div className={`h-3 w-12 place-self-center rounded-2xl mb-1 ${active ? "bg-red-500" : "bg-blue-400"}`}></div>
            <div className="flex flex-col overflow-hidden" >
                <span className={`text-white text-xs font-bold `}>MENU</span>
                <span className={`text-white text-xs font-bold `}>MAIN</span>
            </div>
        </button>
    )
}
