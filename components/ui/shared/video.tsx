'use client'

interface VideoProperties {
    src : string
}

export function FullscreenVideo( props : VideoProperties) {
    return (
        
            <video src={props.src} autoPlay loop muted playsInline className="z-0 absolute inset-0 w-full h-full object-cover"></video>
            
        
    )
}

export function Video( props : VideoProperties) {
    return (
        <div className="relative overflow-hidden z-0 pt-18">
            <video src={props.src} autoPlay loop muted playsInline className="z-0 inset-0 w-full h-full object-fit"></video>
        </div>
    )
}