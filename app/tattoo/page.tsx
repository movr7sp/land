'use  client'

import Image from "next/image";

import { Splash } from "@/components/layout/splash";
import {FullscreenVideo} from "@/components/ui/video";
import Header from "@/components/layout/header";

export default function Home()  {

  return (
    <>
      <Splash color="black"/>
      <Header color="white"/>
      <FullscreenVideo src="video/misc/weeknd.mp4"/>

      
    </>
  );
}
