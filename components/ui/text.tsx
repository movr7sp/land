'use client'

import { Jost } from "next/font/google"
import { useEffect, useState } from "react"


const jost = Jost({
    subsets: ['latin'],
    weight: "600",
    style: "normal"
})

interface TextProperties {
    text : string
    className? : string
}