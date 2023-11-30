import React from "react";

import { Img, Text } from "components";

const XemMYInMenucasinhvin = (props) => {
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
        <div className="flex flex-col gap-[30px] items-start justify-start mt-[66px] w-[72%] md:w-full">
          <div className="flex flex-row gap-[17px] items-start justify-start w-[70%] md:w-full">
            <Img
              className="h-[25px] w-[25px]"
              src="images/img_twitter.svg"
              alt="twitter"
            />
            <Text
              className="mt-0.5 text-black-900 text-lg"
              size="txtEBGaramondRomanRegular18"
            >
              {props?.downloadtext}
            </Text>
          </div>
          <div className="flex flex-row gap-[17px] items-start justify-start w-[66%] md:w-full">
            <Img
              className="h-[25px] w-[25px]"
              src="images/img_pinterest.svg"
              alt="pinterest"
            />
            <Text
              className="mt-0.5 text-black-900 text-lg"
              size="txtEBGaramondRomanRegular18"
            >
              {props?.printtext}
            </Text>
          </div>
          <div className="flex flex-row gap-[17px] items-start justify-start w-[95%] md:w-full">
            <Img
              className="h-[25px] mb-0.5 w-[25px]"
              src="images/img_cart.svg"
              alt="cart"
            />
            <Text
              className="mt-[3px] text-black-900 text-lg"
              size="txtEBGaramondRomanRegular18"
            >
              {props?.buytext}
            </Text>
          </div>
          <div className="flex flex-row gap-[17px] items-start justify-start w-full">
            <Img
              className="h-[25px] w-[25px]"
              src="images/img_search.svg"
              alt="search"
            />
            <Text
              className="mt-0.5 text-black-900 text-lg"
              size="txtEBGaramondRomanRegular18"
            >
              {props?.searchtext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

XemMYInMenucasinhvin.defaultProps = {
  username: "TRẦN NGUYỄN NAM ANH",
  userid: "2110758",
  downloadtext: "Tải tài liệu",
  printtext: "In tài liệu",
  buytext: "Mua thêm trang",
  searchtext: "Tra cứu thông tin",
};

export default XemMYInMenucasinhvin;
