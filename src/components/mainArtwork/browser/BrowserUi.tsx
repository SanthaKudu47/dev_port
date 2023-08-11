import refreshIcon from "@assets/refresh_icon.svg";

function styleGenerator(mode: "light" | "dark") {
  return {
    bgColorStyle: mode === "dark" ? "bg-dark_primary" : "bg-light_primary",
    borderColorStyle:
      mode === "dark" ? "border-dark_white" : "border-dark_primary",
    textColorStyle: mode === "dark" ? "text-dark_white" : "text-dark_primary",
    buttonColorStyle: mode === "dark" ? "bg-light_primary" : "bg-dark_primary",
    addressBarColorStyle:
      mode === "dark" ? "bg-dark_address_bar_bg" : "bg-light_1",
    itemContainerBgStyle:
      mode === "dark" ? "bg-dark_ui_bg" : "bg-light_secondary",
    itemColor: mode === "dark" ? "#4CD86B" : "#18191C",
  };
}

export default function BrowserUi({
  step = 0,
  theme,
}: {
  step: number;
  theme: "dark" | "light";
}) {
  const layoutOpacity = step > 0 ? "opacity-100" : "";
  const productOpacity = step === 2 ? "opacity-100" : "";
  const {
    addressBarColorStyle,
    bgColorStyle,
    borderColorStyle,
    buttonColorStyle,
    textColorStyle,
    itemColor,
    itemContainerBgStyle,
  } = styleGenerator(theme);

  return (
    <div
      className={`${bgColorStyle} border-2 ${borderColorStyle} w-full rounded`}
    >
      <div className={` ${textColorStyle} flex h-[40px]`}>
        <div className={`flex  ${borderColorStyle} items-center px-5 gap-3`}>
          {[1, 2, 3].map((element, index) => (
            <div
              key={`${index}-${element}`}
              className={`rounded-full ${buttonColorStyle} w-[15px] h-[15px]`}
            ></div>
          ))}
        </div>
        <div
          className={`mt-2 rounded flex items-center  border-dark_white ${addressBarColorStyle} w-1/2 px-1 content-center justify-around`}
        >
          localhost:3000
          <img
            src={refreshIcon}
            className="w-[20px] h-[20px]"
            alt="refresh_icon"
          />
        </div>
      </div>
      <div className="p-3 grid grid-flow-row grid-cols-3 items-center gap-x-2 ">
        <div className="gap-2 items-center flex flex-row">
          <div className="relative rounded-full w-[40px] h-[40px] bg-gray-500"></div>
          <div className="flex flex-col gap-2 flex-grow">
            <div className="bg-gray-500 w-full h-[15px] rounded"></div>
            <div className="bg-gray-500 w-full h-[15px] rounded"></div>
          </div>
        </div>
        <div className="col-span-2 gap-2 w-full flex-row flex">
          <div className="bg-gray-500 w-full h-[15px] rounded"></div>
          <div className="bg-gray-500 w-full h-[15px] rounded"></div>
          <div className="bg-gray-500 w-full h-[15px] rounded"></div>
          <div className="bg-gray-500 w-full h-[15px] rounded"></div>
          <div className="bg-gray-500 w-full h-[15px] rounded"></div>
        </div>
      </div>

      <div className="grid grid-flow-col gap-5 p-2 grid-cols-2 ">
        <div
          className={`${itemContainerBgStyle} col-span-1 h-[120px] flex rounded p-2 transition-opacity opacity-0 duration-500 delay-75 ${productOpacity}`}
        >
          <div className="flex w-full  p-2 justify-center items-center">
            <svg
              width={80}
              viewBox="0 0 125 136"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0307 33.2867H102.969V136H22.0307V33.2867Z"
                fill={itemColor}
              />
              <path
                d="M40.5169 0H0V33.2867H125V0H84.483C80.0039 7.40708 71.8349 12.3636 62.5 12.3636C53.1651 12.3636 44.9961 7.40708 40.5169 0Z"
                fill={itemColor}
              />
            </svg>
          </div>

          {/* <img
            src={tShirt}
            alt="product_image"
            className="m-auto"
            width={80}
            color="red"
          /> */}
        </div>
        <div
          className={`col-span-1 flex flex-col gap-2 transition-opacity opacity-0 duration-500 delay-75 ${layoutOpacity}`}
        >
          <div className="bg-gray-500 w-full h-[20px] rounded"></div>
          <div className="bg-gray-500 w-full h-full rounded"></div>
        </div>
      </div>
    </div>
  );
}
