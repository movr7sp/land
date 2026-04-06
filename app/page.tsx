"use client"

import { Splash } from "@/components/layout/splash";
import { Location } from "@/components/ui/text";
import { RectangleBlackButton } from "@/components/ui/tattoo/button";
import { RoundedGrayButton } from "@/components/ui/permanent/button";
import { TattooTagline } from "@/components/ui/tattoo/text";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { cormorantGaramond, jost, sourceSerif4 } from "@/components/ui/font";

import logo from '@/public/img/logo/bokoti-gray.svg'
import logopermanent from '@/public/img/logo/permanent-gray.svg'
import flag from '@/public/img/location/bokoti-flag-street-crop.jpg'
import texture from '@/public/img/textures/texture-1.png'
import dragonSketch from '@/public/img/tattoo/dragon-sketch.png'
import m1 from '@/public/img/permanent/model-1-withoutlogo.jpg'
import m2 from '@/public/img/permanent/model-2-withoutlogo.jpg'
import m3 from '@/public/img/permanent/model-3.jpg'
import m4 from '@/public/img/permanent/model-4.jpg'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default function HomeMobile()  {

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const textsRef = useRef<HTMLHeadingElement[]>([]);
  const tattooRef = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
      
      sectionsRef.current.forEach((section, i) => {
        const text = textsRef.current[i];

        if (!section || !text) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            scroller: containerRef.current,
            start: "top center",
            toggleActions: "play none play reverse",
          },
        });

        tl.to(section, { opacity: 1, duration: 0.9 }).from(text, {opacity: 0, y: 20, duration: 0.9}, "-=0.4");

        const underline = text.querySelector("span");
        if (text.textContent?.includes("Perfect") && underline) {
          tl.to(underline,{scaleX: 1,duration: 0.6,ease: "power2.out"},"-=0.3");
        }
    });

    if (tattooRef.current) {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tattooRef.current,
          scroller: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
      tl.from(".dragon", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
      });
      tl.fromTo(
        tattooRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.8"
      );
      tl.from(
        tattooRef.current.querySelector("button"),
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.6"
      );
    }
    
  },[])

  return (
    <>
      <Splash theme={`light`}/>
      
      {/* MOBILE */}
      <div className={`h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth md:hidden lg:hidden`} ref={containerRef}>
        
        <div className={`flex flex-col h-screen w-full snap-start opacity-0`} ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}}>
          <div className={`flex flex-col w-full bg-white`}>
            <Image src={m1} className={`mask-b-from-40% mask-b-to-100%`} 
            alt={`m1`} loading={`eager`}></Image>
            <Image src={logopermanent} alt={`logo`} className={`-translate-y-15 place-self-center opacity-70`}/>      
          </div>
          <div className={`flex grow justify-center`} ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}}>
                <h1 className={`text-center text-black text-5xl ${sourceSerif4.className}`}>Your Beauty</h1>
          </div>
        </div>

        <div className={`flex flex-col lg:flex-row h-screen w-full snap-start opacity-0`} ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}}>
          <div className={`flex flex-col bg-white`}>
            <Image src={m2} className={`mask-b-from-40% mask-b-to-100%`} alt={`m2`}></Image>
            <Image src={logopermanent} alt={`logo`} className={`-translate-y-15 place-self-center opacity-70`}/>
          </div>
          <div className={`flex grow justify-center`} ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}}>
            <h1 className={`text-center text-black text-5xl ${sourceSerif4.className}`}>Permanently</h1>
          </div>
        </div>

        <div className={`flex flex-col lg:flex-row h-screen w-full snap-start opacity-0`} ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}}>
          <div className={`flex flex-col bg-white`}>
            <Image src={m3} className={`mask-b-from-40% mask-b-to-100%`} alt={`m3`}></Image>
          </div>
          <div className={`flex grow justify-center -translate-y-15`} ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}}>
            <h1 className={`text-center text-black text-5xl ${sourceSerif4.className} pb-20`}>Perfect<span className={`block h-[2px] bg-black w-full origin-left scale-x-0`}></span></h1> 
          </div>
        </div>

        <div className={`flex flex-col lg:flex-row h-screen w-full snap-start opacity-0`} ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}}>
          
          <div className={`flex flex-col bg-white`} >
            <Image src={flag} className={`mask-b-from-80% mask-b-to-100%`} alt={`flag`} ></Image>
          </div>
          
          <div className={`flex flex-col h-auto items-center justify-center`} ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}}>
            <Location location={`325 W 38th St, New York, NY 10018`}/>
            <RoundedGrayButton href={`/permanent`} text={`Discover`}/>  
          </div>
        
          {/* TATTOO BLOCK */}
          <div className={`flex flex-col grow mt-5`} ref={tattooRef}>
            <Image src={texture} alt={`texture`}></Image>
            <div className={`relative flex flex-col flex-1 w-full bg-black items-center justify-start`}>
              <Image src={dragonSketch} alt={`dragonSketch`} className={`dragon absolute h-50 w-auto place-self-center -translate-y-5`} />
              <div className={`relative flex flex-col items-center text-center`}>
                <TattooTagline> 
                  WANT A<br/>TATTOO?
                </TattooTagline>
                <RectangleBlackButton text={`LOOK HERE`} href={`/tattoo`}></RectangleBlackButton>
              </div>
            </div>
          </div>
          {/*-TATTOO BLOCK-*/}
        
        </div>

      </div>
      {/*-MOBILE-*/}
      
      {/* DESKTOP/TABLET */}
      <div className={`hidden md:flex portrait:hidden xl:flex flex-row
                        h-[120vh] w-screen bg-black`}>

        <div className={`flex h-full w-1/2 
                          md:opacity-100
                          xl:transition-opacity xl:duration-700 xl:opacity-50 hover:opacity-100`}>
                            <Link href={`/permanent`} className={`flex flex-col absolute w-1/2 text-center place-self-center justify-center translate-y-30`}>
                              <h1 className={` text-white ${cormorantGaramond.className} text-xl`}>Permanent<br></br>makeup</h1>
                              <h1 className={` text-white ${cormorantGaramond.className} text-5xl underline underline-offset-8`}>Discover</h1>
                            </Link>
          
          <Image src={m4} alt="m4"/>
        </div>

        <div className={`flex h-full w-1/2 
                        bg-black 
                        items-center justify-center
                        md:opacity-100
                        xl:transition-opacity xl:duration-700 xl:opacity-50 xl:hover:opacity-100
                        `}>
          <div className={`relative flex flex-col flex-1 w-full bg-black items-center justify-start`}>
              <Image src={dragonSketch} alt={`dragonSketch`} className={` absolute 
                                                                          h-50 w-auto
                                                                          md:w-80 landscape:opacity-100
                                                                          lg:w-100 lg:h-150 
                                                                          place-self-center 
                                                                          -translate-y-5 
                                                                           lg:-translate-y-60`} />
              <div className={`relative flex flex-col items-center text-center`}>
                <TattooTagline> 
                  WANT A<br/>TATTOO?
                </TattooTagline>
                <RectangleBlackButton text={`LOOK HERE`} href={`/tattoo`}></RectangleBlackButton>
              </div>
            </div>
        </div>


      </div>
      {/*-DESKTOP/TABLET-*/}
      
    </>
  );

  
}
