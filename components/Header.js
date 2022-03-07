import { HomeHeader, UpperHeader } from "./index";

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