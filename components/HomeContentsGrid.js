import HomeContentTile from "./HomeContentTile";

export default function HomeContentsGrid({ content }) {
  return (
    <main className="py-20 bg-background">
      <ul className="max-w-max mx-auto grid grid-cols-3 gap-10">
        {content.map((content) => (
          <li key={content.id}>
            <HomeContentTile heroImage={content.heroImage} title={content.title} description={content.description} publishedAt={content.publishedAt} />
          </li>
        ))}
      </ul>
    </main>
  );
}