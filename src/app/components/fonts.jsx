import {Inter, Poppins, Bebas_Neue} from 'next/font/google'

export const inter = Inter({
    weight: ['200','500', '700'],
    subsets:['latin'],
    variable: '--font-inter'
}) 

export const poppins = Poppins({
    weight: ['500', '700'],
    subsets:['latin'],
    variable: '--font-poppins'
}) 

export const bebas = Bebas_Neue({
    weight: '400',
    subsets:['latin'],
    variable: '--font-bebas'
}) 