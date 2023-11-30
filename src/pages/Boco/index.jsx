import React from "react";

import { Img, Input, Text } from "components";
import BOCOFooter from "components/BOCOFooter";
import BOCOMenucaspso from "components/BOCOMenucaspso";

const BocoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ebgaramond items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="bg-blue-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start mb-[25px] md:ml-[0] ml-[71px] md:mt-0 mt-[7px] w-[9%] md:w-full">
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
            <ul className="flex md:flex-1 sm:flex-col flex-row gap-[52px] sm:hidden items-center justify-center mb-12 md:ml-[0] ml-[219px] md:mt-0 mt-[54px] w-[34%] md:w-full common-row-list">
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtEBGaramondRomanBold18">Trang chủ</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtEBGaramondRomanBold18">Tài liệu</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtEBGaramondRomanBold18">Danh sách máy in</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtEBGaramondRomanBold18">Nhật ký</Text>
                </a>
              </li>
            </ul>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-[30px] items-center justify-center md:ml-[0] ml-[110px] mr-[57px] md:mt-0 my-[29px] w-[27%] md:w-full">
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
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 w-[74%] md:w-full">
            <div className="bg-blue-A100 flex flex-col md:gap-10 gap-[304px] items-center justify-end p-[17px] w-[26%] md:w-full">
              <BOCOMenucaspso className="flex flex-col items-center justify-start mt-[17px] w-full" />
              <Text
                className="text-lg text-white-A700"
                size="txtEBGaramondRomanBold18"
              >
                HCMUT_SSPS
              </Text>
            </div>
            <div className="flex flex-col gap-[13px] justify-start md:ml-[0] ml-[102px] md:mt-0 mt-[108px] w-[29%] md:w-full">
              <Text
                className="ml-6 md:ml-[0] text-blue-900 text-lg"
                size="txtEBGaramondRomanBold18Blue900"
              >
                Tên SV
              </Text>
              <Input
                name="groupOne"
                placeholder="Nhập tên SV"
                className="leading-[normal] p-0 placeholder:text-blue-900_7f text-left text-lg w-full"
                wrapClassName="flex w-full"
                suffix={
                  <div className="mb-px ml-[35px] sm:w-full sm:mx-0 w-[6%] bg-blue-A200">
                    <Img
                      className="my-auto"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  </div>
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-5 justify-start md:ml-[0] ml-[78px] md:mt-0 mt-[25px] w-[30%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue-900 text-center"
                size="txtEBGaramondRomanBold48"
              >
                BÁO CÁO
              </Text>
              <div className="flex flex-col gap-3 justify-start ml-2 md:ml-[0] w-[98%] md:w-full">
                <Text
                  className="ml-6 md:ml-[0] text-blue-900 text-lg"
                  size="txtEBGaramondRomanBold18Blue900"
                >
                  MSSV
                </Text>
                <Input
                  name="groupTwo"
                  placeholder="Nhập MSSV"
                  className="leading-[normal] p-0 placeholder:text-blue-900_7f text-left text-lg w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <div className="mb-px ml-[35px] sm:w-full sm:mx-0 w-[6%] bg-blue-A200">
                      <Img
                        className="my-auto"
                        src="images/img_rewind.svg"
                        alt="rewind"
                      />
                    </div>
                  }
                ></Input>
              </div>
            </div>
          </div>
          <BOCOFooter
            className="bg-blue-900 flex flex-col items-center justify-end p-5 w-full"
            website={
              <Text className="font-bold md:ml-[0] ml-[447px] md:mt-0 mt-1.5 text-lg text-white-A700">
                <span className="text-white-A700 font-ebgaramond text-left">
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
            }
            description={
              <Text className="font-bold ml-32 md:ml-[0] md:mt-0 mt-1.5 text-lg text-white-A700">
                <span className="text-white-A700 font-ebgaramond text-left">
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
            }
          />
        </div>
      </div>
    </>
  );
};

export default BocoPage;
