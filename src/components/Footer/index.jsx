import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-5 ml-[38px] mr-[57px] mt-[25px] w-[94%]">
          <div className="flex flex-col gap-2 items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-12 md:ml-[0] w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[10%] md:w-full">
                <Img
                  className="h-[70px] md:h-auto object-cover w-[70px]"
                  src="images/img_rectangle9.png"
                  alt="rectangleNine_One"
                />
                <Text
                  className="text-lg text-white-A700"
                  size="txtEBGaramondRomanBold18"
                >
                  HCMUT_SSPS
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[447px] md:mt-0 mt-1.5 text-lg text-white-A700"
                size="txtEBGaramondRomanBold18"
              >
                <span className="text-white-A700 font-ebgaramond text-left font-bold">
                  <>
                    Website
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-ebgaramond text-left font-normal">
                  <>
                    HCMUT
                    <br />
                    MyBK
                    <br />
                    BKeL
                    <br />
                    BKSI
                  </>
                </span>
              </Text>
              <Text
                className="ml-32 md:ml-[0] md:mt-0 mt-1.5 text-lg text-white-A700"
                size="txtEBGaramondRomanBold18"
              >
                <span className="text-white-A700 font-ebgaramond text-left font-bold">
                  <>
                    Liên hệ
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-ebgaramond text-left font-normal">
                  <>
                    Cơ sở 1: 268 Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM
                    <br />
                    Cơ sở 2: Khu phố Tân Lập, Phường Đông Hòa, TP.Dĩ An, Tỉnh
                    Bình Dương
                  </>
                </span>
              </Text>
            </div>
            <Text
              className="mr-[888px] text-lg text-white-A700"
              size="txtEBGaramondRomanBold18"
            >
              Bản quyền thuộc Trường Đại học Bách Khoa - ĐHQG-HCM
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
