function stylesGenerator(theme = "dark") {
  return {
    bgColor: theme === "dark" ? "bg-dark_secondary" : "bg-light_secondary",
    textColor: theme === "dark" ? "text-dark_primary" : "text-light_primary",
    iconColor: theme === "dark" ? "#18191C" : "#EAEDF5",
    chipColor: theme === "dark" ? "bg-dark_primary" : "bg-light_primary",
    chipTextColor: theme === "dark" ? "text-white" : "text-dark_primary",
  };
}

function ProjectInfoCard({
  projectName,
  projectDescription,
  stack,
  link,
  repo,
  theme = "dark",
  thumbnailUrl = "https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
}: {
  projectName: string;
  projectDescription: string;
  stack: string[];
  link: string;
  repo: string;
  theme?: "dark" | "light";
  thumbnailUrl?: string;
}) {
  const { bgColor, textColor, iconColor, chipColor, chipTextColor } =
    stylesGenerator(theme);

  return (
    <div
      className={`flex ${bgColor} rounded-md relative max-w-[320px] mx-auto flex-col ${textColor}`}
    >
      <div className="absolute top-1 left-1 my-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.533687 0.519292L19.0361 4.96411L4.97851 19.0217L0.533687 0.519292Z"
            fill={iconColor}
          />
        </svg>
      </div>
      <div className="flex w-full justify-center p-6">
        <img src={thumbnailUrl} alt="project_img" />
      </div>
      <div className="flex flex-col px-6">
        <h4 className=" font-primary-font font-medium text-[35px]">
          {projectName}
        </h4>
        <div className="flex items-center justify-start gap-5">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" height={25} width={25} fill={iconColor}>
              <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
              <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
            </svg>
          </a>

          <a href={repo} target="_blank" rel="noopener noreferrer">
            <svg
              height={25}
              width={25}
              viewBox="0 0 42 40"
              fill={iconColor}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6427 0.142794C8.96307 1.17432 1.1773 8.80758 0.125165 18.0913C-0.926966 27.7876 4.75454 36.4524 13.382 39.7532C14.0133 39.9595 14.6446 39.5469 14.6446 38.7217V35.4208C14.6446 35.4208 13.8029 35.6271 12.7507 35.6271C9.80478 35.6271 8.54222 33.1515 8.33179 31.7074C8.12136 30.8821 7.70051 30.2632 7.06923 29.6443C6.43795 29.438 6.22753 29.438 6.22753 29.2317C6.22753 28.8191 6.85881 28.8191 7.06923 28.8191C8.33179 28.8191 9.38392 30.2632 9.80477 30.8821C10.8569 32.5326 12.1195 32.9452 12.7507 32.9452C13.5924 32.9452 14.2237 32.7389 14.6446 32.5326C14.855 31.0884 15.4863 29.6443 16.7488 28.8191C11.909 27.7876 8.33179 25.1056 8.33179 20.5669C8.33179 18.2976 9.38392 16.0282 10.8569 14.3778C10.6465 13.9652 10.4361 12.9337 10.4361 11.4895C10.4361 10.6643 10.4361 9.42649 11.0673 8.18866C11.0673 8.18866 14.0133 8.18866 16.9593 10.8706C18.0114 10.458 19.4844 10.2517 20.9574 10.2517C22.4304 10.2517 23.9033 10.458 25.1659 10.8706C27.9014 8.18866 31.0578 8.18866 31.0578 8.18866C31.4787 9.42649 31.4787 10.6643 31.4787 11.4895C31.4787 13.14 31.2683 13.9652 31.0578 14.3778C32.5308 16.0282 33.5829 18.0913 33.5829 20.5669C33.5829 25.1056 30.0057 27.7876 25.1659 28.8191C26.4285 29.8506 27.2702 31.7074 27.2702 33.5641V38.928C27.2702 39.5469 27.9014 40.1658 28.7431 39.9595C36.5289 36.865 42 29.438 42 20.7732C42 8.39497 31.2683 -1.30134 18.6427 0.142794Z"
                fill={iconColor}
              />
            </svg>
          </a>
        </div>
        <p className="font-primary-font font-normal text-[19px] mt-3 mb-2 leading-tight">
          {projectDescription}
        </p>
        <div className="flex flex-row mt-2 mb-3  gap-2 flex-wrap">
          {stack.map((s, index) => (
            <div
              key={index}
              className={`${chipColor} rounded-md px-2 py-1 ${chipTextColor} font-primary-font font-semibold`}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ProjectInfoCard };
