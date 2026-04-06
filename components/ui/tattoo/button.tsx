'use client'

import Link from "next/link"
import { bebas } from "../font"

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