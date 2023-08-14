import { HeaderMobile } from "./headerMobile";

export default function Header({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="fixed left-0 right-0 z-10">
      <div className="max-w-screen-xl mx-auto ">
        <HeaderMobile theme={theme} />
      </div>
    </div>
  );
}
