function stylesGenerator(theme = "dark") {
  return {
    textColorStyle: theme === "dark" ? "text-white" : "text-dark_primary",
    bgTextColorStyle: theme === "dark" ? "bg-dark_2" : "bg-light_6",
  };
}

export default function Footer({
  theme = "dark",
}: {
  theme: "dark" | "light";
}) {
  const { bgTextColorStyle, textColorStyle } = stylesGenerator(theme);
  return (
    <div
      className={`${bgTextColorStyle} w-full flex justify-center px-5 h-[75px] items-end pb-2`}
    >
      <span className={`${textColorStyle}`}>
        © Copyright 2023, All Rights Reserved.
      </span>
    </div>
  );
}
