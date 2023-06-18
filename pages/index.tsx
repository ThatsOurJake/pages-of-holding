import { NextPage } from 'next';
import React from 'react';

import Container from '../components/container';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Container gradient={{
      start: 'from-purple-500',
      end: 'to-pink-500'
    }}>
      <main>
        <div className="text-center">
          <p className="text-5xl mb-6 font-bold">Pages of holding</p>
          <p className="text-lg italic">You shouldn&apos;t be able to see this!</p>
        </div>
        <div className="py-2 space-x-2">
          <Link href="/placeholder" className="font-bold hover:underline text-white">Placeholder Page</Link>
          <Link href="/portfolio" className="font-bold hover:underline text-white">Porfolio Page</Link>
        </div>
      </main>
    </Container>
  );
};

export default Home;
