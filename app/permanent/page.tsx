'use  client'

import Image from "next/image";

import { Splash } from "@/components/layout/splash";
import {FullscreenVideo, Video} from "@/components/ui/video";
import Header from "@/components/layout/header";

export default function Home()  {

  return (
    <>
      <Splash color="white"/>
      <Header color="black"/>
      <Video src="video/permanent/permanent-makeup-3.mp4"></Video>
    

    </>
  );
}
