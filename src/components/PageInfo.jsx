import Head from 'next/head';
import React from 'react';

export default function PageInfo ({
  title,
  description
}) {
  return <Head>
    <title>{title}</title>
    <meta content={description} name="description" />

    {/* Facebook Meta Tags */}
    <meta content="https://mp3martin.xyz/" property="og:url" />
    <meta content="website" property="og:type" />
    <meta content={title} property="og:title" />
    <meta content={description} property="og:description" />
    <meta content="https://mp3martin.xyz/images/favicon.png" property="og:image" />

    {/* Twitter Meta Tags */}
    <meta content="summary" name="twitter:card" />
    <meta content="https://mp3martin.xyz/" property="twitter:url" />
    <meta content={title} name="twitter:title" />
    <meta content={description} name="twitter:description" />
    <meta content="https://mp3martin.xyz/images/favicon.png" name="twitter:image" />
  </Head>;
}
