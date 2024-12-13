import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "WaterBombs",
  description: "Pesquisador de Bombas D'águas cadastradas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased h-dvh w-screen flex flex-col bg-neutral-900'
      >
        {children}
      </body>
    </html>
  );
}
