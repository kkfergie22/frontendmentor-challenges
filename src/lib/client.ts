// src/payload/client.ts

import { getPayload } from 'payload'; // Import from 'payload' directly
import config from '@/payload.config'; // Adjust path if needed
import type { Payload } from 'payload';

// This is the an async function that will initialize Payload
// and return a client that can be used to make requests.
// It's cached so it only runs once per server instance.
const getPayloadClient = async (): Promise<Payload> => {
  // Use the new getPayload function
  return await getPayload({ config });
};

export default getPayloadClient;
