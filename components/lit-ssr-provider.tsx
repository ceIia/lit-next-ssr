"use client";

import "@lit-labs/ssr-react/enable-lit-ssr.js";

export const LitSSRProvider = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
