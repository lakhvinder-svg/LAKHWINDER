import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Birkin Capital - Business Funding Made Simple',
  description: 'Fast, flexible business funding with just 3 recent bank statements. No collateral. Funding in 24-48 hours.',
  openGraph: {
    title: 'Birkin Capital - Business Funding Made Simple',
    description: 'Fast, flexible business funding with just 3 recent bank statements. No collateral. Funding in 24-48 hours.',
    type: 'website',
    url: 'https://birkincapital.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birkin Capital - Business Funding Made Simple',
    description: 'Fast, flexible business funding with just 3 recent bank statements.',
  },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold gradient-gold-text mb-4">Birkin Capital</h1>
        <p className="text-xl text-gray-300">Business Funding Made Simple</p>
      </div>
    </main>
  );
}
