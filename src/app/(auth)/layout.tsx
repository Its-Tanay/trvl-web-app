import Image from "next/image";
import React from "react";
import darkTextLogo from '@/assets/branding/logo-text-dark.svg';
import authCover from '@/assets/authCover.jpg';

export default function AuthLayout({
    children
    }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-w-screen min-h-screen">
            <div className="hidden md:block w-2/5 overflow-hidden relative">
                <Image
                    src={authCover}
                    alt="auth-cover"
                    objectFit="cover"
                    fill
                />
            </div>
            <div className="flex flex-col md:w-3/5 w-screen border-l px-6 md:px-12 items-center md:items-start">
                <Image
                    src={darkTextLogo}
                    alt="dark-branding"
                    width={200}
                />
                {children}
            </div>
        </div>
    )
}