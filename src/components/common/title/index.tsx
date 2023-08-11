function Title({
  textColorStyle,
  fontSize,
  children
}: {
  textColorStyle: string;
  fontSize: number;
  children:any
}) {
  const fontSizeClass = `text-[${fontSize}px]`;

  return (
    <h1
      className={`${fontSizeClass} font-primary-font font-bold leading-none ${textColorStyle} mt-4`}
    >{children}</h1>
  );
}

export default Title;
