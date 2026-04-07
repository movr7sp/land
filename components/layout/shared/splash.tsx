'use client'

import "@/styles/fade.css"
import "@/styles/circle.css"

type Themes = "dark" |  "light"

interface SplashProperties {
    theme : Themes
}

export function Splash(props : SplashProperties) {

    let backgroundcolor;
    let circlecolor;

    switch (props.theme) {
        case "dark" : {
            backgroundcolor = "black";
            circlecolor = "white";
            break;
        } 
        case "light" : {
            backgroundcolor = "white"
            circlecolor = "black"
            break;
        }
    }

    return (
        <>
        <div className={`fixed inset-0 w-full h-full z-50 bg-${backgroundcolor} flex items-center justify-center opacity-0 animationFade pointer-events-none`}>
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle className={`animationDrawCircle-${circlecolor}`} cx="60" cy="60" r="40" />
            </svg>
        </div>
        </>
    )
}
