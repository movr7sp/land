'use  client'

import Image from "next/image";

import { Splash } from "@/components/layout/splash";
import {FullscreenVideo} from "@/components/ui/video";
import Header from "@/components/layout/header";

export default function Home()  {

  return (
    <>
      <Splash theme="dark"/>
      <Header theme="light"/>
      <FullscreenVideo src="video/misc/weeknd.mp4"/>

      
    </>
  );
}
