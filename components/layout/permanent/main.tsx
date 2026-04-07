"use client"

import Image from "next/image";

import {FullscreenVideo} from "@/components/ui/shared/video";
import { sourceSerif4 } from "@/components/ui/permanent/font";

import pigments from "@/public/img/misc/pigments-2.jpg"

export function MainPortrait() {


    return (
        <main className={`landscape:hidden flex flex-col transition`}>
            <div className="relative w-full h-screen overflow-hidden z-0">
                <FullscreenVideo src={`/video/permanent/permanent-makeup-3-cutted.mp4`}/>
                <div className={`flex flex-col absolute inset-x-0 bottom-0 justify-center pb-25 z-50 text-white text-center ${sourceSerif4.className}`}>
                    <h2 className={`text-white text-3xl`}>Blah blah blah blah blah</h2>
                    <span className={`text-white underline underline-offset-8`}>blah blah</span>
                </div>
            </div>

            <div className={`flex flex-col w-full h-[40vh] grow ${sourceSerif4.className} justify-center text-center pl-5 pr-5`}>
                <h1 className="text-2xl">ABOUT</h1>
                <h3> 
                There’s nothing I love more than the incredible women who trust me with their beauty! 
                My clients are not just stylish and gorgeous — they are the epitome of confidence and elegance, 
                and I couldn’t be prouder to be a part of their journey
                </h3>
            </div>

            <div className="flex flex-col w-full h-screen justify-start content-center bg-orange-100">
                <Image src={pigments} alt="pigments" className={`place-self-center mt-10`}></Image>
            </div>
        </main>
    )
}