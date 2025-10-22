import React from 'react';
import Error from 'next/error';
import Image from 'next/image';

function CustomError ({ statusCode }) {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {statusCode === 404 && (
        <Image
          alt="404 Error Cat"
          height={467}
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
          width={700}
        />
      )}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: statusCode === 404 ? '66%' : '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '90vw',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Error statusCode={statusCode} />
      </div>
    </div>
  );
}

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default CustomError;
