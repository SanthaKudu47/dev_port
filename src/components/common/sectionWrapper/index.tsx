function styleGenerator(mode: "light" | "dark") {
  return {
    bgColorStyle: mode === "dark" ? "bg-dark_primary" : "bg-light_primary",
  };
}
export default function SectionWrapper({
  theme = "dark",
  id,
  children,
}: {
  theme: "dark" | "light";
  id: string;
  children: React.ReactNode;
}) {
  const { bgColorStyle } = styleGenerator(theme);
  return (
    <div
      id={id}
      className={`py-6 px-3 ${bgColorStyle} flex flex-col md:max-w-screen-xl  mx-auto`}
    >
      {children}
    </div>
  );
}
