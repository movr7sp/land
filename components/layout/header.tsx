'use client'

import Image from "next/image";
import Link from "next/link";
import { MenuButton } from "../ui/button";

export default function Header() {

    return (
        <header className="fixed flex w-dvw h-20 pt-5 overflow-hidden place-content-between z-40 text-white">
            <div className="flex items-center justify-center w-40">
                <Link href="/">
                    <Image src={"logo-white.svg"} alt="LOGO" width={100} height={30} priority/>
                </Link>
            </div>

            <MenuButton/>
        </header>
    )
}