import { type KnipConfig } from 'knip';

export default {
  ignore: ['markdownlint.config.cjs'],
  ignoreDependencies: ['sharp'],
} satisfies KnipConfig;
