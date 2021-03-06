import Link from 'next/link';

export default function Footer({ home }) {
  return (
    <footer className='py-7 text-center'>
      {home ? (
        <p className='text-base'>Copyright &copy; yuto14prog</p>
      ) : (
        <Link href='/'>
          <a className='text-text'>Back to Home</a>
        </Link>
      )}
    </footer>
  );
}