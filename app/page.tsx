'use  client'

import { Splash } from "../components/ui/splash";

import FullscreenVideo from "@/components/ui/video";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";

export default function Home()  {

  return (
    <>
    
      <Header/>
      <FullscreenVideo src="weeknd.mp4"/>
      <Main/>
      <Footer/>
    </>
  );
}
