"use client"

import { MainLandscape} from "@/components/layout/main/main";
import { MainPortrait } from "@/components/layout/main/main";
import { Splash } from "@/components/layout/shared/splash";

export default function Home()  {

  return (
    <>
      <Splash theme={`light`}/>
      <MainPortrait />
      <MainLandscape />
    </>
  );

  
}
