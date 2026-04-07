'use client'

import { Source_Serif_4 } from "next/font/google"
import { Oswald } from "next/font/google"
import { Cormorant_Garamond } from "next/font/google"
import { Jost } from "next/font/google"

export const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: "400",
  style: "normal"
})

export const owsald = Oswald({
  subsets: ['latin'],
  weight: "400",
  style: "normal"
})

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "400",
  style: "normal"
})

export const jost = Jost({
    subsets: ['latin'],
    weight: "400",
    style: "normal"
})