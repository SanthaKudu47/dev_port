function Paragraph({
  textColorStyle,
  fontSize,
  children,
}: {
  textColorStyle: string;
  fontSize: number;
  children: any;
}) {
  const fontSizeClass = `text-[${fontSize}px]`;
  return (
    <p
      className={`font-primary-font font-normal ${fontSizeClass} ${textColorStyle} mt-5 text-left leading-tight`}
    >
      {children}
    </p>
  );
}

export { Paragraph };
