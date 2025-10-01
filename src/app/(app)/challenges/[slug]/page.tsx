import { getChallengeBySlug } from '@/lib/payload';
import QrCodeComponentChallenge from '@/components/challenges/QrCodeComponentChallenge';
import NotImplemented from '@/components/challenges/NotImplemented';

const implementations: Record<string, React.FC> = {
  'qr-code': QrCodeComponentChallenge,
  // Add more implemented challenges here
};

interface ChallengePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ChallengePage({
  params: paramsPromise,
}: ChallengePageProps) {
  const params = await paramsPromise;
  const challenge = await getChallengeBySlug(params.slug);

  if (!challenge) return <p>Challenge not found</p>;

  if (challenge.url) {
    // optional: external link
    return (
      <iframe src={challenge.url} className="w-full h-screen border-none" />
    );
  }

  const Component = implementations[params.slug] || NotImplemented;

  return <Component />;
}
