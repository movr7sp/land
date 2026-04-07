'use client'



import { Splash } from "@/components/layout/shared/splash";
import Header from "@/components/layout/tattoo/header";
import { MainPortrait } from "@/components/layout/tattoo/main";

export default function Home()  {


  return (
    <>
      <Splash theme="dark"/>
      
      <Header /> 
        
      
      
      <MainPortrait />
      
    </>
  );
}
