import HomeClient from '@/components/HomeClient';
import { getAllChallenges } from '@/lib/payload';

export default async function Home() {
  const challenges = await getAllChallenges();
  return <HomeClient challenges={challenges} />;
}
