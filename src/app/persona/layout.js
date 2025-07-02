'use client';
import ProviderWrapper from "@/store/ProviderWrapper";

export default function PersonaLayout({ children }) {
  return <ProviderWrapper>{children}</ProviderWrapper>;
}
