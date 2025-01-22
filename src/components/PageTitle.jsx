import React from 'react';

export default function PageTitle ({ children }) {
  return (
    <h1 className='text-5xl md:text-6xl pb-4 font-medium text-fade w-fit pr-52 -mt-1'>{children}</h1>
  );
}
