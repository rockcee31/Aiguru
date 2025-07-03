'use client'

import ProviderWrapper from "@/store/ProviderWrapper"

export default function chatLayout({children}){
    return <ProviderWrapper>{children}</ProviderWrapper>

}