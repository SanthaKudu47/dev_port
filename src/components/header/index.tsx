import { HeaderMobile } from "./headerMobile";

export default function Header({ theme }: { theme: "dark" | "light" }) {
  return <HeaderMobile theme={theme} />;
}
