import { NextPage } from 'next';
import React from 'react';

import Container from '../components/container';

const Home: NextPage = () => {
  return (
    <Container>
      <main>
        <div className="text-center">
          <p className="text-5xl mb-6 font-bold">Pages of holding</p>
          <p className="text-lg italic">You shouldn&apos;t be able to see this!</p>
        </div>
      </main>
    </Container>
  );
};

export default Home;
