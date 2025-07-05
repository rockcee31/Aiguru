'use client'

import ProviderWrapper from "@/store/ProviderWrapper"

export default function questionLayout({children}){
    return <ProviderWrapper>{children}</ProviderWrapper>

}