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
      <main className="flex flex-col">
        <div className="flex h-screen w-full content-center justify-center">
          <h1 className="text-white place-self-center">TO FUCKING DO</h1>
        </div>
      </main>
      
      
    </>
  );
}
