"use client"

import { Splash } from "@/components/layout/splash";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { SourceSerif4 } from "@/components/ui/font";
import { jost } from "@/components/ui/font";

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
                <h1 className={`text-center text-black text-5xl leading-16 ${SourceSerif4.className}`}>Your Beauty</h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-screen w-full snap-start opacity-0" ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}}>
          <div className="flex flex-col bg-white">
            <Image src={m2} className="mask-b-from-40% mask-b-to-100%" alt="m2"></Image>
            <Image src={logo} alt="logo" className="-translate-y-15 place-self-center opacity-70"/>
          </div>
          <div className="flex grow justify-center" ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}}>
            <h1 className={`text-center text-black text-5xl leading-16 ${SourceSerif4.className}`}>Permanently</h1>
          </div>
        </div>

        <div className="flex flex-col h-screen w-full snap-start opacity-0" ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}}>
          <div className="flex flex-col bg-white">
            <Image src={m3} className="mask-b-from-40% mask-b-to-100%" alt="m3"></Image>
          </div>
          <div className="flex grow justify-center -translate-y-15" ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}}>
                <h1 className={`text-center text-black text-5xl pb-20 leading-16 ${SourceSerif4.className}`}>Perfect<span className="block h-[2px] bg-black w-full origin-left scale-x-0"></span></h1> 
          </div>
        </div>

        <div className="flex flex-col h-screen w-full snap-start ">
          <div className="flex flex-col bg-white">
            <Image src={flag} className="mask-b-from-80% mask-b-to-100%" alt="flag" ></Image>
          </div>
          <div className="flex flex-col h-auto items-center justify-center">
            <div className="w-full mt-5">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <div className="flex justify-center py-2">
                <h3 className={jost.className}>
                  325 W 38th St, New York, NY 10018
                </h3>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            </div>
            <Link href={`/permanent`} className="flex w-full mt-10 justify-center">
              <button className={`text-2xl ${jost.className} w-30 h-10 border border-gray-100/90 rounded-2xl  backdrop-blur-lg shadow-lg bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.7)_0%,_rgba(200,200,200,0.25)_60%,_rgba(150,150,150,0.15)_100%)]`} type="button">
                Discover
              </button>
            </Link>
          </div>
          <div className="flex flex-col grow mt-10">
            <Image src={texture} alt="texture"></Image>
            <div className="flex flex-1 grow w-full bg-black">
              <Image src={dragonSketch} alt="dragonSketch" className="w-50 h-50"></Image> 
            </div>
          </div>
        </div>

      </div>
      
    </>
  );

  
}
