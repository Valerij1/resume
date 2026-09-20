import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Background({ children }) {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '650px', borderRadius: '8px', overflow: 'hidden' }}>
      <img src={useBaseUrl('/img/bg.png')} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.50)', zIndex: 2 }} />
      <div style={{ position: 'relative', zIndex: 3, padding: '40px' }}>
        {children}
      </div>
    </div>
  );
}
