import type { CollectionConfig } from 'payload';

const revalidate = async (): Promise<void> => {
  const revalidationKey = process.env.REVALIDATION_TOKEN;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate`;

  if (!revalidationKey) {
    console.error('REVALIDATION_TOKEN is not set.');
    return;
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-revalidation-token': revalidationKey,
      },
    });

    if (res.ok) {
      console.log(`Revalidation successful for path: /`);
    } else {
      const errorText = await res.text();
      console.error(
        `Revalidation failed with status ${res.status}: ${errorText}`
      );
    }
  } catch (err: unknown) {
    console.error('Error during revalidation request:', err);
  }
};

export const Challenges: CollectionConfig = {
  slug: 'challenges',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Publicly readable
  },
  hooks: {
    afterChange: [revalidate],
    afterDelete: [revalidate],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Optional, if you want images
    },
  ],
};
