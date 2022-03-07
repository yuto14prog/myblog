import Link from 'next/link';

export default function Footer({ words, home }) {
  return (
    <footer className='py-7 text-center'>
      {home ? (
        <p className='text-base'>{words}</p>
      ) : (
        <Link href='/'>
          <a className='text-text'>{words}</a>
        </Link>
      )}
    </footer>
  );
}