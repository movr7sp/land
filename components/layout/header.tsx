'use client'

import Image from "next/image";
import Link from "next/link";
import { MenuButton } from "../ui/button";

type HeaderColors = "black" | "white"

interface HeaderProperties {
    color : HeaderColors
}

export default function Header(props : HeaderProperties) {

    let logo: string;

    switch (props.color) {
        case "black": {
            logo = "logo-black.svg"
            break;
        }
        case "white": {
            logo = "logo-white.svg"
            break;
        }
    }

    return (
        <header className="fixed flex w-dvw pt-5 overflow-hidden place-content-between z-40 pointer-events-auto">
            <div className="flex items-center justify-center ml-10">
                <Link href="/">
                    <Image src={logo} alt="LOGO" width={100} height={30} priority/>
                </Link>
            </div>

            <MenuButton color={props.color}/>
        </header>
    )
}