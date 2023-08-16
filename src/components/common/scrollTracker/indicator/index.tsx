function Indicator({
  to = 0,
  theme = "dark",
}: {
  to: number;
  theme: "dark" | "light";
}) {
  return (
    <div
      style={{ top: to }}
      className={`absolute ${theme==='dark' ? 'bg-dark_secondary':'bg-light_secondary'}  left-5 w-[4px] h-[40px] transition-[top] ease-in-out duration-300 delay-75`}
    ></div>
  );
}

export { Indicator };
