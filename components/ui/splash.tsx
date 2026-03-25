'use client'

export function Splash() {
    return (
        <>
        <div className="fixed inset-0 w-full h-full z-50 bg-black flex items-center justify-center opacity-0 splash pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 120 120">
                <circle className="circleDraw" cx="60" cy="60" r="40" />
            </svg>
        </div>
        </>
    )
}
