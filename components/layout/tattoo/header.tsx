'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { SwitchButton } from "@/components/ui/tattoo/button";
import { Nav } from "@/components/ui/tattoo/nav"

import tattooLogo from "@/public/img/logo/dze-tattoo-white.png"

export default function Header() {

    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        document.body.style.overflow = navActive ? "hidden" : "auto"
    }, [navActive])

    return (
        <>
            <Nav isActive={navActive} /> 
            
            <header className="fixed flex w-dvw pt-5 overflow-hidden place-content-between z-50 pointer-events-auto">
                <div className="flex items-center justify-between ml-5">
                    <Link href={`/`}>
                        <Image src={tattooLogo} alt="tattooLogo" className="w-40 lg:w-60 mr-30" loading="eager"></Image>
                    </Link>
                </div>
                <SwitchButton onClick={() => {setNavActive(!navActive);}}/>
            </header>
        </>
        
    )
}