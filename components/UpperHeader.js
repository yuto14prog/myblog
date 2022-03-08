import Link from 'next/link';
import { name } from './HomeHeaderTitle';

export default function UpperHeader() {
  return (
    <Link href='/'>
      <a className='text-text'>
        <header className='flex row items-center justify-center my-4'>
          <h1 className='ml-3 text-2xl font-title'>{name}</h1>
        </header>
      </a>
    </Link>
  );
}