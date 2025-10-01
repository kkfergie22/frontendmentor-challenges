import * as migration_20251001_165840 from './20251001_165840';

export const migrations = [
  {
    up: migration_20251001_165840.up,
    down: migration_20251001_165840.down,
    name: '20251001_165840'
  },
];
