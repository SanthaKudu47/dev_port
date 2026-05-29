function Title({
  textColorStyle,
  children,
}: {
  textColorStyle: string;
  children: any;
}) {
  return (
    <h1
      className={`font-primary-font font-bold leading-none ${textColorStyle} mt-4 text-[45px] md:text-[57px]`}
    >
      {children}
    </h1>
  );
}

export default Title;
