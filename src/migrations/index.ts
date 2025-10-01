import * as migration_20251001_170334 from './20251001_170334';

export const migrations = [
  {
    up: migration_20251001_170334.up,
    down: migration_20251001_170334.down,
    name: '20251001_170334'
  },
];
