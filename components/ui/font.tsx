import { Source_Serif_4 } from "next/font/google"
import { Jost } from "next/font/google"

export const SourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // pick what you need
})

export const jost = Jost({
    subsets: ['latin'],
    weight: "400",
    style: "normal"
})