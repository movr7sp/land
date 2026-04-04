import { Source_Serif_4 } from "next/font/google"
import { Jost } from "next/font/google"
import { Bebas_Neue } from "next/font/google"
import { Montserrat } from "next/font/google"
import { Oswald } from "next/font/google"

export const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const jost = Jost({
    subsets: ['latin'],
    weight: "400",
    style: "normal"
})

export const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400']
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "600",
  style: "normal"
})

export const owsald = Oswald({
  subsets: ['latin'],
  weight: "400",
  style: "normal"
})