import { createClient } from '@sanity/client';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

import { allProducts } from '../src/data/products.js';
import { articles } from '../src/data/articles.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error('Missing VITE_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

// Cache so the same image file is only uploaded once.
const assetCache = new Map();

async function uploadImage(publicPath) {
  if (!publicPath) return null;
  if (assetCache.has(publicPath)) return assetCache.get(publicPath);

  const absPath = path.join(publicDir, publicPath.replace(/^\//, ''));
  if (!fs.existsSync(absPath)) {
    console.warn(`  ! Image not found, skipping: ${publicPath}`);
    return null;
  }

  const asset = await client.assets.upload('image', fs.createReadStream(absPath), {
    filename: path.basename(absPath),
  });

  const ref = {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
  };

  assetCache.set(publicPath, ref);
  return ref;
}

async function migrateProducts() {
  console.log(`\nMigrating ${allProducts.length} products...`);

  for (const product of allProducts) {
    const image = await uploadImage(product.image);
    const detailImage =
      product.detailImage && product.detailImage !== product.image
        ? await uploadImage(product.detailImage)
        : null;

    const doc = {
      _id: `product-${product.slug}`,
      _type: 'product',
      name: product.name,
      slug: { _type: 'slug', current: product.slug },
      category: product.category,
      displayId: product.displayId,
      customClass: product.customClass,
      description: product.description,
      ...(image && { image }),
      ...(detailImage && { detailImage }),
    };

    await client.createOrReplace(doc);
    console.log(`  + ${product.slug}`);
  }
}

async function migrateArticles() {
  console.log(`\nMigrating ${articles.length} blog posts...`);

  for (const article of articles) {
    const image = await uploadImage(article.image);

    const doc = {
      _id: `post-${article.slug}`,
      _type: 'post',
      title: article.title,
      slug: { _type: 'slug', current: article.slug },
      date: parseArticleDate(article.date),
      author: article.author,
      readTime: article.readTime,
      ...(image && { image }),
    };

    await client.createOrReplace(doc);
    console.log(`  + ${article.slug}`);
  }
}

function parseArticleDate(dateStr) {
  // e.g. "MAY 25, 2026" -> ISO datetime
  const parsed = new Date(dateStr);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

async function main() {
  await migrateProducts();
  await migrateArticles();
  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
