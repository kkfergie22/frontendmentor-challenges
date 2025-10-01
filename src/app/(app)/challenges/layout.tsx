import BackButton from '@/components/back-button';

export default function ChallengeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative">
      <BackButton className="absolute top-4 left-4 bg-amber-300 hover:bg-amber-400 transition cursor-pointer duration-500 ease-in-out text-gray-950" />
      {children}
    </main>
  );
}
