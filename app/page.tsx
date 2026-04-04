"use client"

import { Splash } from "@/components/layout/splash";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { owsald, sourceSerif4, bebas } from "@/components/ui/font";
import { jost } from "@/components/ui/font";
import { montserrat } from "@/components/ui/font";

import logo from '@/public/img/logo/permanent-gray.svg'
import flag from '@/public/img/location/bokoti-flag-street-crop.jpg'
import texture from '@/public/img/textures/texture-1.png'
import dragonSketch from '@/public/img/tattoo/dragon-sketch.png'
import m1 from '@/public/img/permanent/model-1-withoutlogo.jpg'
import m2 from '@/public/img/permanent/model-2-withoutlogo.jpg'
import m3 from '@/public/img/permanent/model-3.jpg'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HtmlContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";

gsap.registerPlugin(ScrollTrigger);


export default function Home()  {

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

        tl.to(section, { opacity: 1, duration: 0.9 })
          .from(text, {opacity: 0, y: 20, duration: 0.9}, "-=0.4");

        const underline = text.querySelector("span");
        if (text.textContent?.includes("Perfect") && underline) {
          tl.to(
            underline,
            {
              scaleX: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.3"
          );
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

      // dragon (background)
      tl.from(".dragon", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
      });

      // text reveal (LEFT → RIGHT)
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

      // button
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
      <Splash color="light"/>
      
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth" ref={containerRef}>
        
        <div className="flex flex-col lg:flex-row h-screen w-full snap-start opacity-0" ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}}>
          <div className="flex flex-col bg-white w-full lg:w-1/2" >
            <Image src={m1} className="mask-b-from-40% mask-b-to-100%" alt="m1" loading="eager"></Image>
            <Image src={logo} alt="logo" className="-translate-y-15 place-self-center opacity-70"/>      
          </div>
          <div className="flex grow justify-center" ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}}>
                <h1 className={`text-center text-black text-5xl leading-16 ${sourceSerif4.className}`}>Your Beauty</h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-screen w-full snap-start opacity-0" ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}}>
          <div className="flex flex-col bg-white">
            <Image src={m2} className="mask-b-from-40% mask-b-to-100%" alt="m2"></Image>
            <Image src={logo} alt="logo" className="-translate-y-15 place-self-center opacity-70"/>
          </div>
          <div className="flex grow justify-center" ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}}>
            <h1 className={`text-center text-black text-5xl leading-16 ${sourceSerif4.className}`}>Permanently</h1>
          </div>
        </div>

        <div className="flex flex-col h-screen w-full snap-start opacity-0" ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}}>
          <div className="flex flex-col bg-white">
            <Image src={m3} className="mask-b-from-40% mask-b-to-100%" alt="m3"></Image>
          </div>
          <div className="flex grow justify-center -translate-y-15" ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}}>
                <h1 className={`text-center text-black text-5xl pb-20 leading-16 ${sourceSerif4.className}`}>Perfect<span className="block h-[2px] bg-black w-full origin-left scale-x-0"></span></h1> 
          </div>
        </div>

        <div className="flex flex-col w-full snap-start overflow-visible opacity-0 h-[110vh]" ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}}>
          
          <div className="flex flex-col bg-white" >
            <Image src={flag} className="mask-b-from-80% mask-b-to-100%" alt="flag" ></Image>
          </div>
          
          <div className="flex flex-col h-auto items-center justify-center" ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}}>
            {/* LOCATION */}
            <div className="w-full mt-5">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <div className="flex justify-center py-2">
                <h3 className={jost.className}>
                  325 W 38th St, New York, NY 10018
                </h3>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            </div>
            {/*-LOCATION-*/}

            {/* DISCOVER */}
            <Link href={`/permanent`} className="flex w-full mt-10 justify-center">
              <button className={`text-2xl ${jost.className} w-35 h-12 border border-gray-100/90 rounded-2xl  backdrop-blur-lg shadow-lg bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.7)_0%,_rgba(200,200,200,0.25)_60%,_rgba(150,150,150,0.15)_100%)]`} type="button">
                Discover
              </button>
            </Link>
            {/*-DISCOVER-*/}  
          </div>
        
          {/* TATTOO BLOCK */}
          <div className="flex flex-col grow mt-5" ref={tattooRef}>
            <Image src={texture} alt="texture"></Image>
            <div className="relative flex flex-col flex-1 w-full bg-black items-center justify-start">
              <Image src={dragonSketch} alt="dragonSketch" className="absolute h-50 w-auto place-self-center -translate-y-5" />
              <div className="relative flex flex-col items-center text-center">
                <h3 className={`text-white ${montserrat.className} text-3xl bg-transparent`}>WANNA<br/>TATTOO?</h3>
                <Link href={`/tattoo`} className="flex ml-5 mt-4">
                  <button className={`text-xl ${bebas.className} w-30 h-12 border border-white bg-black text-white shadow-lg`} type="button">
                    Look here
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/*-TATTOO BLOCK-*/}
        
        </div>

      </div>
      
    </>
  );

  
}
