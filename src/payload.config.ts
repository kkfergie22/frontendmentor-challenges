// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Challenges } from './collections/Challenges';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const selectDB = () => {
  if (process.env.NODE_ENV === 'production') {
    // In production, use the Postgres adapter
    console.log('Connecting to production database (postgres)');
    return postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URI || '',
      },
    });
  }

  // In development, use the SQLite adapter
  console.log('Connecting to dev database (sqlite3)');
  return sqliteAdapter({
    client: {
      url: 'file:./frontendmentor-challenges.db',
    },
  });
};

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Challenges],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: selectDB(),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
