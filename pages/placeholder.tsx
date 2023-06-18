import { NextPage } from 'next';
import React from 'react';

import Container from '../components/container';
import Link from 'next/link';

const Placeholder: NextPage = () => {
  return (
    <Container gradient={{
      start: 'from-cyan-500',
      end: 'to-sky-200'
    }}>
      <main>
        <div className="text-center">
          <p className="text-5xl mb-6 font-bold">Placeholder Domain 🚧</p>
          <p className="text-lg italic mb-3">This domain has no content - For now!</p>
          <Link href="/portfolio" className="font-bold hover:underline">Back to safety</Link>
        </div>
      </main>
    </Container>
  );
};

export default Placeholder;
