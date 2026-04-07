'use client'


import { useState} from "react";
import Image from "next/image";

import { Splash } from "@/components/layout/shared/splash";
import Header from "@/components/layout/permanent/header";
import { MainPortrait } from "@/components/layout/permanent/main";

export default function Home()  {

  const [headerTheme, setHeaderTheme] = useState<"light" | "dark">("light");
  const [navActive, setNavActive] = useState(false);


  return (
    <>
      <Splash theme="light"/>
      <Header theme={headerTheme} /> 
       
      <MainPortrait />
      
      
    </>
  );
}