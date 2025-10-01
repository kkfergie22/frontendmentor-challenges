import getPayloadClient from './client';

import type { Challenge } from '@/payload-types';

const CHALLENGES_COLLECTION = 'challenges';

export async function getAllChallenges(): Promise<Challenge[]> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: CHALLENGES_COLLECTION,
    limit: 100,
    depth: 1,
  });
  return result.docs;
}

export async function getChallengeBySlug(
  slug: string
): Promise<Challenge | null> {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: CHALLENGES_COLLECTION,
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  });
  const challenge = result.docs[0];
  if (challenge && typeof challenge.image === 'number') {
    console.error('Image was not populated for challenge:', challenge.slug);
    return { ...challenge, image: null };
  }
  return challenge;
}
