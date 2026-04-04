'use client'

import Image from "next/image";
import Link from "next/link";
import { MenuButton } from "../ui/button";
import logoblack from "@/public/img/logo/logo-black.svg"
import logolight from "@/public/img/logo/logo-white.svg"

type Themes = "dark" | "light"

interface HeaderProperties {
    theme : Themes
}

export default function Header(props : HeaderProperties) {

    let logo: string;

    switch (props.theme) {
        case "dark": {
            logo = logoblack
            break;
        }
        case "light": {
            logo = logolight
            break;
        }
    }

    return (
        <header className="fixed flex w-dvw pt-5 overflow-hidden place-content-between z-40 pointer-events-auto">
            <div className="flex items-center justify-center ml-10">
                <Link href="/">
                    <Image src={logo} alt="LOGO" priority/>
                </Link>
            </div>
            <MenuButton theme={props.theme}/>
        </header>
    )
}