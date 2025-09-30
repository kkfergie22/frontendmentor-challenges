import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export default function ChallengeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${outfit.className} h-screen w-full flex flex-col items-center justify-center bg-[hsl(212,45%,89%)]`}
    >
      {children}
    </main>
  );
}
