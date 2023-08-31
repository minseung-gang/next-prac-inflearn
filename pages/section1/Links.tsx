import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Links() {
  const router = useRouter();
  return (
    <main>
      <h1>Links</h1>
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        /getStaticProps
      </button>
      {/*  <Link href="/section1/getStaticProps">/getStaticProps</Link> */}
    </main>
  );
}
