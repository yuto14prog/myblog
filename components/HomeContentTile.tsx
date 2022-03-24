import Image from 'next/image';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

type HomeContentTile = {
  heroImage: {
    url: string
    height: number
    width: number
  }
  title: string
  description: string
  publishedAt: string
}

dayjs.extend(utc);
dayjs.extend(timezone);

export default function HomeContentTile({ heroImage, title, description, publishedAt }: HomeContentTile) {
  return (
    <div className='bg-white drop-shadow-xl max-w-xs'>
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
        <h2 className='text-2xl overflow-hidden text-ellipsis whitespace-nowrap'>{title}</h2>
        <p className='text-base my-3 overflow-hidden text-ellipsis whitespace-nowrap'>{description}</p>
        <p className='text-base text-right'>{dayjs.utc(publishedAt).tz('Asia/Tokyo').format('YYYY/MM/DD')}</p>
      </div>
    </div>
  );
}