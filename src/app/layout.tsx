import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | A Higher Purpose",
        default: "A Higher Purpose.com",
    },
    description:
        "The Higher Purpose Project is a social media non-profit where students volunteer to provide aid to the poor and downtrodden.",
    keywords: ["volunteer", "higher purpose", "organization", "student"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
