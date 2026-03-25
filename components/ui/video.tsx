'use client'

interface VideoProperties {
    src : string
}

export default function FullscreenVideo( props : VideoProperties) {
    return (
        <div className="relative w-screen h-screen overflow-hidden z-0">
            <video src={props.src} autoPlay loop muted playsInline className="z-0 absolute inset-0 w-full h-full object-cover"></video>
        </div>
    )
}