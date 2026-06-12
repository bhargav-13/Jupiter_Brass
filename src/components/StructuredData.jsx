import { useEffect } from 'react';

/**
 * Injects a JSON-LD <script> tag for structured data (schema.org) and
 * removes it when the page unmounts or the data changes.
 */
const StructuredData = ({ id, data }) => {
  useEffect(() => {
    const scriptId = `structured-data-${id}`;
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      script?.remove();
    };
  }, [id, data]);

  return null;
};

export default StructuredData;
