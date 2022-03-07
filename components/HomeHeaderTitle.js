import Image from 'next/image';

export default function HomeHeaderTitle() {
  return (
    <div className='flex flex-col items-center pt-16'>
      <Image
        priority
        src='/icon.png'
        height={190}
        width={190}
        alt='アイコン'
      />
      <h1 className='text-5xl mt-5'>mamesuke</h1>
      <h2 className='text-2xl mt-5 mb-16'>～私の日記という名のブログ～</h2>
    </div>
  );
}