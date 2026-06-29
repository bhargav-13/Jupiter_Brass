import { useEffect, useState } from 'react';
import { client, urlFor } from './client';
import {
  ALL_CATEGORIES_QUERY,
  ALL_POSTS_QUERY,
  ALL_PRODUCTS_QUERY,
  POST_BY_SLUG_QUERY,
  PRODUCT_BY_SLUG_QUERY,
} from './queries';

function imageUrl(source) {
  return source ? urlFor(source).url() : null;
}

function normalizeProduct(doc) {
  if (!doc) return null;
  return {
    ...doc,
    image: imageUrl(doc.image),
    detailImage: imageUrl(doc.detailImage) ?? imageUrl(doc.image),
  };
}

function normalizeArticle(doc) {
  if (!doc) return null;
  return {
    ...doc,
    image: imageUrl(doc.image),
    date: doc.date
      ? new Date(doc.date)
          .toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
          .toUpperCase()
      : '',
  };
}

/** All categories ordered by display order. */
export function useCategories() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    client
      .fetch(ALL_CATEGORIES_QUERY)
      .then((docs) => {
        if (active) setCategories(docs);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { categories: categories ?? [], loading };
}

/** All products, optionally fetched once and cached for the session. */
export function useProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    client
      .fetch(ALL_PRODUCTS_QUERY)
      .then((docs) => {
        if (active) setProducts(docs.map(normalizeProduct));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { products: products ?? [], loading };
}

/** A single product by slug. */
export function useProduct(slug) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    client
      .fetch(PRODUCT_BY_SLUG_QUERY, { slug })
      .then((doc) => {
        if (active) setProduct(normalizeProduct(doc));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [slug]);

  return { product, loading };
}

/** All blog posts. */
export function useArticles() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    client
      .fetch(ALL_POSTS_QUERY)
      .then((docs) => {
        if (active) setArticles(docs.map(normalizeArticle));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { articles: articles ?? [], loading };
}

/** A single blog post by slug. */
export function useArticle(slug) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    client
      .fetch(POST_BY_SLUG_QUERY, { slug })
      .then((doc) => {
        if (active) setArticle(normalizeArticle(doc));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [slug]);

  return { article, loading };
}
