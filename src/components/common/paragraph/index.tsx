function Paragraph({
  textColorStyle,
  fontSize,
  children,
}: {
  textColorStyle: string;
  fontSize: number;
  children: any;
}) {
  return (
    <p
      style={{ fontSize: `${fontSize}px` }}
      className={`font-primary-font font-normal  ${textColorStyle} mt-5 text-left leading-tight`}
    >
      {children}
    </p>
  );
}

export { Paragraph };
