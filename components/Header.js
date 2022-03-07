import HomeHeader from "./homeheader";
import UpperHeader from "./UpperHeader";

export default function Header({ home }) {
  return (
    <>
      {home ? (
        <HomeHeader />
      ) : (
        <UpperHeader />
      )}
    </>
  );
}