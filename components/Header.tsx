import { HomeHeader, UpperHeader } from "./index";

type Header = {
  home?: boolean
}

export default function Header({ home }: Header) {
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