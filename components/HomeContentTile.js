import Image from 'next/image';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function HomeContentTile({ heroImage, title, description, publishedAt }) {
  return (
    <div className='bg-white drop-shadow-xl'>
      {heroImage ? (
        <Image
          src={heroImage.url}
          alt='ヒーローイメージ'
          width={320}
          height={240}
        />
      ) : (
        <Image
          src='/dummy.png'
          alt='ダミー画像'
          width={320}
          height={240}
        />
      )}
      <div className='py-2 px-4 text-text'>
        <h2 className='text-2xl'>{title}</h2>
        <p className='text-base my-3'>{description}</p>
        <p className='text-base text-right'>{dayjs.utc(publishedAt).tz('Asia/Tokyo').format('YYYY/MM/DD')}</p>
      </div>
    </div>
  );
}