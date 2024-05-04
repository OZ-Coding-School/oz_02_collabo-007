import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Pretendard } from './fonts';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${clsx(Pretendard.variable)} no-scrollbar h-screen w-screen bg-gray-40`}
    >
      <body className="no-scrollbar m-auto h-full max-w-[500px] bg-white  font-pretendard text-gray-100">
        {children}
      </body>
    </html>
  );
}
