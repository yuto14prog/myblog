import Image from 'next/image';
import { name } from './HomeHeaderTitle';

export default function UpperHeader() {
  return (
    <header className='flex row items-center justify-center my-4'>
      <Image
        priority
        src='/icon.png'
        height={50}
        width={50}
        alt='アイコン'
      />
      <h1 className='ml-3 text-2xl font-title'>{name}</h1>
    </header>
  );
}