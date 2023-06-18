import { Quicksand } from 'next/font/google';
import Head from 'next/head';
import React from 'react';

const quicksand = Quicksand({ subsets: ['latin'] });

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[]
  gradient: {
    start: string
    end: string
  }
}

const Container = ({ children, gradient }: ContainerProps): React.ReactElement => {
  const gradientStyle = `bg-gradient-to-b ${gradient.start} ${gradient.end}`;

  return (
    <div className={`${quicksand.className} ${gradientStyle}`}>
      <Head>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="flex justify-center items-center h-screen w-4/5 md:w-3/5 lg:w-1/2 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Container;
