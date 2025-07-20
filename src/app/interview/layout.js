'use client'

import ProviderWrapper from "@/store/ProviderWrapper"

export default function interviewLayout({children}){
    return <ProviderWrapper>{children}</ProviderWrapper>

}