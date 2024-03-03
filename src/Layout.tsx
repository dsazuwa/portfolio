import { ReactElement } from 'react';

import { Footer, Navbar } from './components/layout';

export default function getLayout(page: ReactElement) {
  return (
    <div className='flex h-full min-h-screen w-full flex-col md:grid md:grid-cols-12 md:gap-4'>
      <Navbar className='md:col-span-3 lg:col-span-2' />

      <div className='mt-[56px] flex h-[calc(100vh-56px)] w-full flex-col md:col-span-9 md:mt-0 md:h-full md:py-10 lg:col-span-10'>
        <div className='px-4 md:px-0'>{page}</div>

        <Footer />
      </div>
    </div>
  );
}
