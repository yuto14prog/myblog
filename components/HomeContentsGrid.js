import HomeContentTile from "./HomeContentTile";

export default function HomeContentsGrid({ content }) {
  return (
    <main>
      <ul>
        {content.map((content) => (
          <li key={content.id}>
            <HomeContentTile heroImage={content.heroImage} title={content.title} description={content.description} publishedAt={content.publishedAt} />
          </li>
        ))}
      </ul>
    </main>
  );
}