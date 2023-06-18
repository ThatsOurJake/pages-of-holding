import { Quicksand } from 'next/font/google';
import React from 'react';

const quicksand = Quicksand({ subsets: ['latin'] });

const Container = ({ children }: { children: React.ReactNode | React.ReactNode[]}): React.ReactElement => {
  return (
    <div className={`${quicksand.className} flex justify-center items-center h-screen w-2/3 md:w-3/5 mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
