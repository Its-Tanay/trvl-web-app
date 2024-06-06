import Image from "next/image";
import React from "react";
import { authBgCover } from "@/assets/assets";
import { logoTextDark } from "@/assets/assets";

export default function AuthLayout({
    children
    }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-w-screen min-h-screen">
            <div className="hidden md:block w-2/5 overflow-hidden relative">
                <Image
                    src={authBgCover}
                    alt="auth-cover"
                    style={{objectFit: "cover"}}
                    fill={true}
                    sizes="100%"
                    priority={true}
                />
            </div>
            <div className="flex flex-col md:w-3/5 w-screen border-l px-6 md:px-12 items-center md:items-start">
                <Image
                    src={logoTextDark}
                    alt="dark-branding"
                    width={200}
                    height={50}
                />
                {children}
            </div>
        </div>
    )
}