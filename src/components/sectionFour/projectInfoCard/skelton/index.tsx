function ProjectCardSkeltonDesktop() {
  return (
    <div
      className={`flex rounded-md relative  gap-x-5 w-[800px] h-[245px] px-1 bg-gray-400 animate-pulse `}
    ></div>
  );
}

function ProjectCardSkeltonMobile() {
    return (
      <div
        className={`flex rounded-md relative w-[320px] mx-auto flex-col h-[450px] px-1 bg-gray-400 animate-pulse `}
      ></div>
    );
  }

export { ProjectCardSkeltonDesktop,ProjectCardSkeltonMobile };
