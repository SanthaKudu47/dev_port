function SkillSkelton() {
  return (
    <>
      <div className={`w-[130px] flex flex-col gap-y-3 items-end animate-pulse`}>
        <div
          className={`w-[130px] h-[130px]  relative flex justify-center items-center bg-gray-400`}
        ></div>
        <div className="w-2/3 h-[20px] bg-gray-400 animate-pulse"></div>
      </div>
    </>
  );
}

export { SkillSkelton };
