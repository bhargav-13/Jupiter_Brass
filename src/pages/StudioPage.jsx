import React, { Suspense, lazy } from 'react';

const Studio = lazy(() =>
  import('sanity').then((mod) => {
    const { Studio: SanityStudio } = mod;
    return import('../../sanity.config.js').then((configMod) => ({
      default: () => <SanityStudio config={configMod.default} />,
    }));
  })
);

const StudioPage = () => (
  <Suspense fallback={null}>
    <Studio />
  </Suspense>
);

export default StudioPage;
