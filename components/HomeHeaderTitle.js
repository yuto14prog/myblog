import Image from 'next/image';

export const name = "yuto14prog"

export default function HomeHeaderTitle() {
  return (
    <div className='flex flex-col items-center pt-14'>
      <h1 className='text-5xl mt-5 mb-16 font-title'>{name}</h1>
    </div>
  );
}