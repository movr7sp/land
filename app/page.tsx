'use  client'

import { Splash } from "@/components/layout/splash";
import { SourceSerif4 } from "@/components/ui/font";

export default function Home()  {

  return (
    <>
      <Splash color="white"/>
      
      <div className="flex flex-col"></div>
      <div className="flex flex-col bg-white w-full h-3/4">
        <img src={`img/permanent/model-1-withoutlogo.jpg`} className="h-70vh w-auto mask-b-from-40% mask-b-to-100%"></img>
        <img src="dze-bokoti-permanent-black.svg" alt="dze-bokot-permanent-black" className=" w-40 -translate-y-10 place-self-center"/>      
      </div>
      <div className="flex grow items-center justify-center">
          <h1 className={`text-center text-black text-5xl mt-5 leading-16 ${SourceSerif4.className}`}>Your Beauty<br/>Permanently<br/>Perfect</h1>
      </div>
      
      
    </>
  );

  
}
