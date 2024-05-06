import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const desc = `
VidSync is a powerful React component designed to enhance the native HTML video player experience. With VidSync, you can seamlessly integrate advanced video playback features into your React applications, including multi-video support, intuitive keyboard shortcuts, and extensive customization options. Whether you're building a video gallery, an e-learning platform, or a multimedia presentation, VidSync empowers you to deliver a seamless and engaging video experience to your users. Try VidSync today and elevate your video playback to the next level!`;

export const metadata: Metadata = {
  title: "VidSync - React Video Player Component",
  description: desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-slate-950 text-slate-50 font-sans antialiased dark",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
