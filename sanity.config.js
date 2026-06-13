import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Jupiter Brass',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
