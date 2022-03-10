import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function BlogArticleContent({ content }) {
  return (
    <main className="bg-background py-14">
      <div className="text-center">
        <h1 className="mb-8 mt-14 text-4xl w-80 m-auto text-center md:text-5xl md:w-2/3 lg:max-w-3xl">{content.title}</h1>
        <h3 className="text-base">{dayjs.utc(content.publishedAt).tz('Asia/Tokyo').format('YYYY/MM/DD')} に公開</h3>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${content.body}`
        }}
        className='w-11/12 p-7 lg:max-w-5xl m-auto bg-white lg:p-12 rounded-3xl mt-14'
      />
    </main>
  );
}