"use client"

import { Splash } from "@/components/layout/splash";
import { SourceSerif4 } from "@/components/ui/font";
import Link from "next/link";
import { useRef } from "react";


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
          .from(text, {opacity: 0, y: 50, duration: 0.9}, "-=0.4");

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
      <Splash color="white"/>
      
      <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <div className="flex flex-col h-screen w-full snap-start ">
          <div className="flex flex-col bg-white w-full h-1/2 ">
            <img src={`img/permanent/model-1-withoutlogo.jpg`} className="h-70vh w-auto mask-b-from-40% mask-b-to-100%"></img>
            <img src="dze-bokoti-permanent-black.svg" alt="dze-bokot-permanent-black" className=" w-40 -translate-y-15 place-self-center"/>      
          </div>
          <div className="flex grow items-center justify-center">
                <h1 className={`text-center text-black text-5xl mt-5 leading-16 ${SourceSerif4.className}`}>Your Beauty</h1>
          </div>
        </div>

        <div ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}} className="flex flex-col h-screen w-full snap-start opacity-0">
          <div className="flex flex-col bg-white w-full h-1/2">
            <img src={`img/permanent/model-2.jpg`} className="h-70vh w-auto mask-b-from-40% mask-b-to-100%"></img>
          </div>
          <div className="flex grow items-center justify-center">
                <h1 ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}} className={`text-center text-black text-5xl leading-16 ${SourceSerif4.className}`}>Permanently</h1>
          </div>
        </div>

        <div ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}} className="flex flex-col h-screen w-full snap-start opacity-0">
          <div className="flex flex-col bg-white w-full h-1/2">
            <img src={`img/permanent/model-3.jpg`} className="h-70vh w-auto mask-b-from-40% mask-b-to-100%"></img>
          </div>
          <div className="flex grow items-center justify-center">
                <h1 ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}} className={`text-center text-black text-5xl leading-16 ${SourceSerif4.className}`}>Perfect<span className="block h-[2px] bg-black w-full origin-left scale-x-0"></span></h1> 
          </div>
        </div>

        <div ref={(el) => {if (el && !sectionsRef.current.includes(el)) {sectionsRef.current.push(el);}}} className="h-screen w-full snap-start opacity-0">
          <div className="flex flex-col bg-white w-full h-1/2">
            <img src={`img/location/bokoti-flag-street-crop.jpg`} className="h-70vh w-auto mask-b-from-80% mask-b-to-100%"></img>
          </div>
          <div className="flex grow items-center justify-center">
            <Link href={`/permanent`} className={``}>
              <span ref={(el) => {if (el && !textsRef.current.includes(el)) {textsRef.current.push(el);}}} className="border rounded-2xl p-4">GET IN TOUCH</span>
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );

  
}
