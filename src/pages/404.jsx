import React from 'react';
import Error from 'next/error';
import Image from 'next/image';

export default function Custom404 () {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Image
        alt="404 Error Cat"
        height={600}
        src="https://http.cat/404"
        style={{
          borderRadius: '12px',
          position: 'absolute',
          left: '50%',
          top: '33%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '90vw',
          maxHeight: '48vh',
          width: 'auto',
          height: 'auto',
          display: 'block'
        }}
        width={750}
      />

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '66%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '90vw',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Error statusCode={404} />
      </div>
    </div>
  );
}
