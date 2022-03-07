import Image from 'next/image';

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
      <h1 className='ml-3 text-2xl'>mamesuke</h1>
      <h2 className='ml-3 text-base'>～私の日記という名のブログ～</h2>
    </header>
  );
}