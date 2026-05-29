function stylesGenerator(theme = "dark") {
  return {
    iconColorStyle: theme === "dark" ? "#F9E7BB" : "#EAEDF5",
    borderColorStyle:
      theme === "dark" ? "border-dark_secondary" : "border-dark_primary",
    bgColorStyle: theme === "dark" ? "bg-dark_primary" : "bg-light_secondary",
    textColorStyle:
      theme === "dark" ? "text-dark_secondary" : "text-light_primary",
  };
}

function Contact({
  name,
  contact,
  type,
  path,
  theme = "dark",
}: {
  name: string;
  contact: string;
  type: "url" | "email" | "tel";
  path: string;
  theme?: "dark" | "light";
}) {
  const { bgColorStyle, borderColorStyle, iconColorStyle, textColorStyle } =
    stylesGenerator(theme);
  const base = (
    <div
      className={`border ${borderColorStyle} flex items-center gap-5 mx-auto px-5 ${bgColorStyle}`}
    >
      {/* <svg
        width="40"
        height="40"
        viewBox="0 0 90 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M89.7493 5.20806V61.5H0V4.97196L45.1253 37.5L89.7493 5.20806Z"
          fill="#F9E7BB"
        />
        <path d="M90 0H0L45.1253 33L90 0Z" fill="#F9E7BB" />
      </svg> */}
      <svg viewBox="0 0 24 24" fill={iconColorStyle} height="40" width="40">
        {/* <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" /> */}
        <path fillRule="evenodd" d={path} clipRule="evenodd" />
      </svg>
      <span className={`font-primary-font ${textColorStyle} text-[30px]`}>
        {name}
      </span>
    </div>
  );
  return (
    <div className="flex items-center gap-5 mx-auto px-5">
      {type === "email" ? (
        <a href={`mailto:${contact}`}>{base}</a>
      ) : type === "tel" ? (
        <a href={`tel:+${contact}`}>{base}</a>
      ) : (
        <a href={contact} target="_blank" rel="noopener noreferrer">
          {base}
        </a>
      )}
    </div>
  );
}

export default Contact;
