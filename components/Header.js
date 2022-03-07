import HomeTitle from "./HomeTitle";
import Image from 'next/image';

export default function Header({ home }) {
  return (
    <>
      {home ? (
        <header className='bg-bgImage'>
          <HomeTitle />
        </header>
      ) : (
        <header className='flex row items-center justify-center my-4'>
          <Image
            priority
            src='/icon.png'
            height={60}
            width={60}
            alt='アイコン'
          />
          <h1 className='ml-3'>mamesuke</h1>
          <h2 className='ml-3'>～私の日記という名のブログ～</h2>
        </header>
      )}
    </>
  );
}