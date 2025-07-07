'use client'

import ProviderWrapper from "@/store/ProviderWrapper"

export default function resultLayout({children}){
    return <ProviderWrapper>{children}</ProviderWrapper>

}