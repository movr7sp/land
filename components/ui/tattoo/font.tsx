'use client'

import { Bebas_Neue } from "next/font/google"
import { Montserrat } from "next/font/google"
import { Jost } from "next/font/google"

export const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "600",
  style: "normal"
})

export const jost = Jost({
    subsets: ['latin'],
    weight: "400",
    style: "normal"
})