import React from "react";

import { Img, Text } from "components";

const BOCOMenucaspso = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-black-900 text-lg"
          size="txtEBGaramondRomanBold18Black900"
        >
          {props?.username}
        </Text>
        <Text
          className="mt-[7px] text-black-900 text-lg"
          size="txtEBGaramondRomanBold18Black900"
        >
          {props?.userid}
        </Text>
        <div className="flex flex-col gap-[29px] items-start justify-start mt-[65px] w-[71%] md:w-full">
          <div className="flex flex-row gap-[17px] items-start justify-start w-[91%] md:w-full">
            <Img
              className="h-[25px] mb-[3px] w-[25px]"
              src="images/img_pinterest.svg"
              alt="pinterest"
            />
            <Text
              className="mt-1 text-black-900 text-lg"
              size="txtEBGaramondRomanRegular18"
            >
              {props?.qunlmyin}
            </Text>
          </div>
          <div className="flex flex-row gap-[17px] items-start justify-start w-full">
            <Img
              className="h-[25px] mb-0.5 w-[25px]"
              src="images/img_search.svg"
              alt="search"
            />
            <Text
              className="mt-[3px] text-black-900 text-lg"
              size="txtEBGaramondRomanRegular18"
            >
              {props?.qunlcuhnh}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full">
            <Img
              className="h-[25px] w-[25px]"
              src="images/img_clock.svg"
              alt="clock"
            />
            <Text
              className="mt-0.5 text-black-900 text-lg"
              size="txtEBGaramondRomanRegular18"
            >
              {props?.xemlchsinn}
            </Text>
          </div>
          <div className="flex flex-row gap-[17px] items-start justify-start w-[59%] md:w-full">
            <Img
              className="h-[25px] w-[25px]"
              src="images/img_television.svg"
              alt="television"
            />
            <Text
              className="text-black-900 text-lg"
              size="txtEBGaramondRomanRegular18"
            >
              {props?.boco}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

BOCOMenucaspso.defaultProps = {
  username: "TRẦN NGUYỄN NAM ANH",
  userid: "2110758",
  qunlmyin: "Quản lý máy in",
  qunlcuhnh: "Quản lý cấu hình",
  xemlchsinn: "Xem lịch sử in ấn",
  boco: "Báo cáo",
};

export default BOCOMenucaspso;
