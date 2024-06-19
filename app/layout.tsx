import type { Metadata } from 'next';
import '@/styles/globals.css';
import { pretend } from './fonts';

export const metadata: Metadata = {
  title: '매치포인트',
  description: '테니스 대회 랭킹 앱',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pretend.variable} no-scrollbar box-border h-full w-full bg-gray-40`}
    >
      <body className="no-scrollbar relative m-auto box-border h-full max-w-[500px] bg-white text-gray-100">
        {children}
      </body>
    </html>
  );
}
