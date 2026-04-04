'use  client'

import Image from "next/image";

import { Splash } from "@/components/layout/splash";
import {FullscreenVideo, Video} from "@/components/ui/video";
import Header from "@/components/layout/header";

export default function Home()  {

  return (
    <>
      <Splash color="light"/>
      <Header color="black"/>
    

    </>
  );
}
