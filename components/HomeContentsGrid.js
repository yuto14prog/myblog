import { HomeContentTile } from "./index";
import Link from 'next/link';

export default function HomeContentsGrid({ content }) {
  return (
    <main className="py-20 bg-background">
      <ul className="max-w-max mx-auto grid grid-cols-3 gap-10 font-mplus">
        {content.map((content) => (
          <li key={content.id}>
            <Link href={`/blog/${content.id}`}>
              <a>
                <HomeContentTile heroImage={content.heroImage} title={content.title} description={content.description} publishedAt={content.publishedAt} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}