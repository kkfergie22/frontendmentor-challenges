// src/app/api/revalidate/route.ts

import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATION_TOKEN;

  const requestSecret = request.headers.get('x-revalidation-token');

  if (secret !== requestSecret) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  revalidatePath('/');

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
