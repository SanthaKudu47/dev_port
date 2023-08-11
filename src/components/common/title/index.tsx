function Title({
  textColorStyle,
  fontSize,
  children,
}: {
  textColorStyle: string;
  fontSize: number;
  children: any;
}) {
  return (
    <h1
      style={{ fontSize: `${fontSize}px` }}
      className={`font-primary-font font-bold leading-none ${textColorStyle} mt-4`}
    >
      {children}
    </h1>
  );
}

export default Title;
