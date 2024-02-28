"use client";
import React from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { TooltipProvider } from "@/components/tooltip";

export default function Providers({
  session,
  children,
}: {
  session: SessionProviderProps["session"];
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider session={session}>
        <TooltipProvider>{children}</TooltipProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
