import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getServerSideProps Page</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Example;
export const getServerSideProps: GetServerSideProps = async () => {
  const delayInSeconds = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(1), delayInSeconds * 1000)
  );

  return {
    props: { data },
  };
};
