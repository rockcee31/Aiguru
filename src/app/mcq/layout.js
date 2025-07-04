'use client'

import ProviderWrapper from "../../store/ProviderWrapper";

export default function McqLayout({children}){
    return <ProviderWrapper>{children}</ProviderWrapper>
}