'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import logogray from "@/public/img/logo/logo-gray.svg"
import logolight from "@/public/img/logo/logo-white.svg"
import calendar from "@/public/img/icon/date.svg"
import user from "@/public/img/icon/user.svg"

type Themes = "dark" | "light"

interface HeaderProperties {
    theme : Themes
}

export default function Header({theme} : HeaderProperties) {

    const [visible, setVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setVisible(false)
            } else { 
                setVisible(true)
            }

            setLastScrollY(currentScrollY);
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [lastScrollY]);

    let logo: string
    switch (theme) {
        case "dark": {
            logo = logogray
            break;
        }
        case "light": {
            logo = logolight
            break;
        }
    }

    return (
        <header className={`fixed flex w-full h-15
                            overflow-hidden place-content-between z-40 pointer-events-auto 
                            transition duration-300 ${visible ? "translate-y-0" : "-translate-y-full "} 
                            ${scrolled ? "backdrop-blur-md bg-black/30" : ""}`}
        >
            <div className="flex items-center justify-center ml-10">
                <Link href="/">
                    <Image src={logo} alt="LOGO" className="w-25" priority/>
                </Link>
            </div>
            <div className={`flex mr-7 w-18 justify-between`}>
                <Image src={calendar} alt="calendar" className={`w-5`}></Image>
                <Image src={user} alt="user" className={`w-6 stroke-white`}></Image>
            </div>
        </header>
    )
}