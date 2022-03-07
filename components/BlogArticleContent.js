import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function BlogArticleContent({ content }) {
  return (
    <main className="bg-background py-14">
      <div className="text-center">
        <h1 className="mb-8 mt-14 text-5xl">{content.title}</h1>
        <h3 className="text-base">{dayjs.utc(content.publishedAt).tz('Asia/Tokyo').format('YYYY/MM/DD')} に公開</h3>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${content.body}`
        }}
        className='max-w-5xl m-auto bg-white p-12 rounded-3xl mt-14'
      />
    </main>
  );
}