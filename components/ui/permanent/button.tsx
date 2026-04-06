import Link from "next/link"
import { jost } from "../font"

export function RoundedGrayButton(props: {href:string, text:string, className?: string}) {

    return (
        <Link href={props.href} className={`flex w-1/2 mt-10 place-self-center justify-center ${props.className}`}>
              <button className={`text-2xl 
                                    ${jost.className} 
                                    w-35 h-12 
                                    border 
                                    border-gray-100/90 rounded-2xl  
                                    backdrop-blur-lg shadow-lg 
                                    bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.7)_0%,_rgba(200,200,200,0.25)_60%,_rgba(150,150,150,0.15)_100%)]`} 
                                    type="button">
                {props.text}
              </button>
        </Link>
    )
}