import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-start mb-[25px] md:ml-[0] ml-[71px] md:mt-0 mt-[7px] w-[9%] md:w-full">
          <Img
            className="h-[70px] md:h-auto object-cover w-[70px]"
            src="images/img_rectangle9.png"
            alt="rectangleNine"
          />
          <Text
            className="text-lg text-white-A700"
            size="txtEBGaramondRomanBold18"
          >
            HCMUT_SSPS
          </Text>
        </div>
        <ul className="flex sm:flex-col flex-row gap-[52px] sm:hidden items-center justify-center mb-12 md:ml-[0] ml-[219px] md:mt-0 mt-[54px] w-[34%] md:w-full common-row-list">
          <li>
            <Text
              className="text-lg text-white-A700"
              size="txtEBGaramondRomanBold18"
            >
              Trang chủ
            </Text>
          </li>
          <li>
            <Text
              className="text-lg text-white-A700"
              size="txtEBGaramondRomanBold18"
            >
              Tài liệu
            </Text>
          </li>
          <li>
            <Text
              className="text-lg text-white-A700"
              size="txtEBGaramondRomanBold18"
            >
              Danh sách máy in
            </Text>
          </li>
          <li>
            <Text
              className="text-lg text-white-A700"
              size="txtEBGaramondRomanBold18"
            >
              Nhật ký
            </Text>
          </li>
        </ul>
        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-center md:ml-[0] ml-[110px] mr-[57px] md:mt-0 my-[29px] w-[27%] md:w-full">
          <Img
            className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
            src="images/img_ellipse1.png"
            alt="ellipseOne"
          />
          <Text
            className="text-lg text-white-A700"
            size="txtEBGaramondRomanBold18"
          >
            TRẦN NGUYỄN NAM ANH
          </Text>
          <Img
            className="h-5 w-5"
            src="images/img_zondiconsnotification.svg"
            alt="zondiconsnotifi"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
