import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ChatWidget } from '@/components/chat/ChatWidget';
import { CrispChat } from '@/components/chat/CrispChat';
import './globals.css';

export const metadata: Metadata = {
  title: 'Birkin Capital | Business Funding Made Simple',
  description: 'Fast, flexible business funding with only 3 recent bank statements required. Get funded in 24-48 hours.',
  keywords: 'business funding, merchant cash advance, working capital, equipment financing',
  openGraph: {
    title: 'Birkin Capital | Business Funding Made Simple',
    description: 'Fast, flexible business funding solutions for growing businesses',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birkin Capital',
    description: 'Business Funding Made Simple',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/crisp-sdk@1.0.0/{{ CRISP_SDK }}/crisp.js" />
      </head>
      <body className="bg-dark-bg text-white antialiased">
        <Navbar />
        {children}
        <ChatWidget />
        <CrispChat />
        <Footer />
      </body>
    </html>
  );
}
