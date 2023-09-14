import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>nine4</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col justify-center mx-auto mt-52 text-center max-w-2x1'>
        <h1 className='text-3xl font-bold tracking-tight text-black md:text-5xl'>404 – Page not found</h1>
        <br />
        <Link
          className='w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4'
          href='/'
        >
          Return Home
        </Link>
      </div>
      <div className='mt-64' />
    </div>
  );
}
