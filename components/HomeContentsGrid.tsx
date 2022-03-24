import { HomeContentTile } from "./index";
import Link from 'next/link';
import { Blog } from '../types/blog';

type Props = {
  content: Blog[]
}

export default function HomeContentsGrid({ content }: Props) {
  return (
    <main className="py-20 bg-background">
      <ul className="max-w-max mx-auto grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 md:gap-9 grid-cols-1 gap-7 font-mplus">
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