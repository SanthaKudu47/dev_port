function styleGenerator(mode: "light" | "dark") {
  return {
    bgColorStyle: mode === "dark" ? "bg-dark_primary" : "bg-light_primary",
  };
}
export default function SectionWrapper({
  theme = "dark",
  children,
}: {
  theme: "dark" | "light";
  children: React.ReactNode;
}) {
  const { bgColorStyle } = styleGenerator(theme);
  return (
    <div
      className={`py-6 px-3 ${bgColorStyle} flex flex-col md:max-w-screen-xl  mx-auto`}
    >
      {children}
    </div>
  );
}
