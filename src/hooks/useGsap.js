import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

/**
 * Run GSAP animations inside a scoped context with automatic cleanup.
 */
export function useGsap(callback, deps = []) {
  const scopeRef = useRef(null);

  useLayoutEffect(() => {
    if (!scopeRef.current) return undefined;

    const ctx = gsap.context(() => {
      callback(gsap, scopeRef.current);
    }, scopeRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}
