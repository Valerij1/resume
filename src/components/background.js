import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Background({ children }) {
  return (
    <div className="background-container">
      <img
        src={useBaseUrl('/img/bg.png')}
        className="background-image"
        alt=""
      />

      <div className="background-overlay" />

      <div className="background-content">
        {children}
      </div>
    </div>
  );
}