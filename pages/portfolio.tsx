import { NextPage } from 'next';
import React from 'react';

import Container from '../components/container';
import Image from 'next/image';
import Head from 'next/head';

const Portfolio: NextPage = () => {
  return (
    <Container gradient={{
      start: 'from-pink-400',
      end: 'to-rose-300'
    }}>
      <Head>
        <title>Jake King - Portfolio</title>
        <meta name="description" content="Jake King (ThatsOurJake) - He/Him 🏳️‍🌈 - Software Developer" />
      </Head>
      <main className="bg-blue-300 border-white border-8 rounded drop-shadow flex-grow px-2 py-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-3/5 md:w-1/3 lg:w-3/12 p-2 mx-auto">
            <div className="relative rounded-full border-4 border-white aspect-square">
              <Image alt='Profile of Jake King' fill style={{ objectFit: 'contain' }} src="https://s.gravatar.com/avatar/cbd78aedd6ddb0b8b60f1dbec61d2822b3a4dbc472cd72458a4dd65ead9da0e9?s=1024" className="rounded-full" />
              <div className="absolute bottom-0 right-0 w-1/4 aspect-square border-2 border-white rounded-full bg-red-200">
                <Image alt='Emoji' fill style={{ objectFit: 'contain', padding: '0.3rem' }} src="/emoji.png" />
              </div>
            </div>
            <div className="py-2 text-center">
              <p className="font-bold text-lg">Jake King</p>
              <p><span className="italic">he/him</span> 🏳️‍🌈</p>
              <p>Software Engineer</p>
            </div>
          </div>
          <div className="w-full md:w-2/3 lg:w-9/12 py-2 px-4 flex flex-col space-y-2">
            <a href="http://github.com/thatsourjake" className="p-4 border-4 border-white bg-purple-100 hover:bg-purple-200 rounded-md text-lg">💻 Github</a>
            <a href="https://www.instagram.com/thatsourjake" className="p-4 border-4 border-white bg-purple-100 hover:bg-purple-200 rounded-md text-lg">📷 Instagram</a>
            <a href="https://twitter.com/ThatsOurJake" className="p-4 border-4 border-white bg-purple-100 hover:bg-purple-200 rounded-md text-lg">🐦 Twitter</a>
          </div>
        </div>
        <div className="mt-1 flex space-x-2 flex-wrap text-sm justify-center">
          <a className="hover:underline" href="https://thatsourjake.co.uk">ThatsOurJake.co.uk</a>
          <a className="hover:underline" href="https://thatsourjake.com">ThatsOurJake.com</a>
          <a className="hover:underline" href="https://jakeki.ng">Jakeki.ng</a>
        </div>
      </main>
    </Container>
  );
};

export default Portfolio;
