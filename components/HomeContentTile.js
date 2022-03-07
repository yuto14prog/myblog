import Image from 'next/image';

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
      <div className=' p-2'>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <p className=' text-right'>{publishedAt}</p>
      </div>
    </div>
  );
}