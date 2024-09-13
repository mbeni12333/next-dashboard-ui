import { Html } from "next/document";
import React from "react";

export default function signinLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">{children}</html>;
}
