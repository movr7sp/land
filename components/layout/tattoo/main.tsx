'use client'

import { FullscreenVideo } from "@/components/ui/shared/video"

export function MainPortrait() {

    return (
        <div className="flex flex-col">
            <div className="flex h-screen w-full content-center justify-center">
                <FullscreenVideo src="/video/misc/weeknd.mp4"></FullscreenVideo>
            </div>
        </div>
    )
}