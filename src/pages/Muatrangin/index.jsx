import React from "react";

import { Button, Img, List, Text } from "components";
import MuaTrangInFooter from "components/MuaTrangInFooter";
import MuaTrangInMenucasinhvin from "components/MuaTrangInMenucasinhvin";

const MuatranginPage = () => {
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
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1163px] mx-auto md:px-5 w-full">
            <div className="bg-blue-A100 flex md:flex-1 flex-col md:gap-10 gap-[306px] items-center justify-end p-[17px] w-[23%] md:w-full">
              <MuaTrangInMenucasinhvin className="flex flex-col items-center justify-start mt-[13px] w-full" />
              <Text
                className="text-lg text-white-A700"
                size="txtEBGaramondRomanBold18"
              >
                HCMUT_SSPS
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-7 w-[54%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue-900 text-center"
                size="txtEBGaramondRomanBold48"
              >
                MUA TRANG IN
              </Text>
              <Text
                className="mt-[54px] text-blue-900 text-lg"
                size="txtEBGaramondRomanBold18Blue900"
              >
                Thông tin đơn hàng
              </Text>
              <div className="flex flex-col items-start justify-start mt-[23px] outline outline-[0.5px] outline-blue-900 w-auto md:w-full">
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18"
                      >
                        Sinh viên
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Black900"
                      >
                        Trần Nguyễn Nam Anh
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18"
                      >
                        Mã số sinh viên
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Black900"
                      >
                        2110758
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18"
                      >
                        Thời gian
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Black900"
                      >
                        01/01/2021
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                  <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                    <Text
                      className="text-blue-900 text-lg w-auto"
                      size="txtEBGaramondRomanRegular18"
                    >
                      A4
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-center p-2.5 w-full">
                    <div className="md:h-6 h-[26px] relative w-[37%]">
                      <div className="absolute bg-blue_gray-100 h-6 inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-black-900_7f text-lg w-max"
                        size="txtEBGaramondRomanRegular18Black9007f"
                      >
                        Nhập số lượng trang
                      </Text>
                    </div>
                    <Img
                      className="h-5 w-5"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                  <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                    <Text
                      className="text-blue-900 text-lg w-auto"
                      size="txtEBGaramondRomanRegular18"
                    >
                      Tổng tiền
                    </Text>
                  </div>
                  <Img
                    className="flex-1 h-11 w-full"
                    src="images/img_frame20.svg"
                    alt="frameTwenty"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between mt-[67px] w-[70%] md:w-full">
                <Button className="cursor-pointer font-bold leading-[normal] min-w-[156px] text-center text-lg">
                  Thanh toán
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[156px] text-center text-lg"
                  color="red_400"
                >
                  Hủy
                </Button>
              </div>
            </div>
          </div>
          <MuaTrangInFooter
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

export default MuatranginPage;