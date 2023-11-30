import React from "react";

import { Button, Img, Input, List, Text } from "components";
import QuNLMYInFooter from "components/QuNLMYInFooter";
import QuNLMYInMenucaspso from "components/QuNLMYInMenucaspso";

const QunlmyinPage = () => {
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
          <div className="flex md:flex-col flex-row md:gap-10 gap-[70px] items-start justify-start md:px-5 w-[96%] md:w-full">
            <div className="bg-blue-A100 flex flex-col md:gap-10 gap-[309px] items-center justify-end p-[17px] w-1/5 md:w-full">
              <QuNLMYInMenucaspso className="flex flex-col items-center justify-start mt-3 w-full" />
              <Text
                className="text-lg text-white-A700"
                size="txtEBGaramondRomanBold18"
              >
                HCMUT_SSPS
              </Text>
            </div>
            <div className="flex flex-col gap-[23px] justify-start md:mt-0 mt-[31px] w-[76%] md:w-full">
              <Text
                className="ml-80 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-blue-900 text-center"
                size="txtEBGaramondRomanBold48"
              >
                QUẢN LÝ MÁY IN
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mr-1.5 w-full">
                <div className="flex md:flex-1 flex-col gap-[7px] justify-start w-[29%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[23px] text-blue-900 text-lg"
                    size="txtEBGaramondRomanBold18Blue900"
                  >
                    Mã máy in
                  </Text>
                  <Input
                    name="groupOne"
                    placeholder="Nhập mã máy in"
                    className="leading-[normal] p-0 placeholder:text-blue-900_7f text-left text-lg w-full"
                    wrapClassName="flex w-full"
                    suffix={
                      <div className="h-[17px] mt-px mb-[5px] ml-[35px] w-[17px] bg-blue-A200">
                        <Img
                          className="h-[17px] my-auto"
                          src="images/img_rewind.svg"
                          alt="rewind"
                        />
                      </div>
                    }
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-[7px] justify-start w-[29%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[23px] text-blue-900 text-lg"
                    size="txtEBGaramondRomanBold18Blue900"
                  >
                    Thương hiệu
                  </Text>
                  <Input
                    name="groupTwo"
                    placeholder="Nhập brand/NSX"
                    className="leading-[normal] p-0 placeholder:text-blue-900_7f text-left text-lg w-full"
                    wrapClassName="flex w-full"
                    suffix={
                      <div className="h-[17px] mt-px mb-[5px] ml-[35px] w-[17px] bg-blue-A200">
                        <Img
                          className="h-[17px] my-auto"
                          src="images/img_rewind.svg"
                          alt="rewind"
                        />
                      </div>
                    }
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-2 justify-start w-[29%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[23px] text-blue-900 text-lg"
                    size="txtEBGaramondRomanBold18Blue900"
                  >
                    Địa điểm
                  </Text>
                  <Input
                    name="groupThree"
                    placeholder="Nhập địa điểm"
                    className="leading-[normal] p-0 placeholder:text-blue-900_7f text-left text-lg w-full"
                    wrapClassName="flex w-full"
                    suffix={
                      <div className="h-[17px] mt-px mb-[5px] ml-[35px] w-[17px] bg-blue-A200">
                        <Img
                          className="h-[17px] my-auto"
                          src="images/img_rewind.svg"
                          alt="rewind"
                        />
                      </div>
                    }
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start ml-11 md:ml-[0] w-[96%] md:w-full">
                <Text
                  className="text-blue-900 text-center text-lg underline"
                  size="txtEBGaramondRomanBold18Blue900"
                >
                  Thêm máy in
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-evenly w-full">
                  <div className="border border-blue-A100 border-solid flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start w-auto md:w-full">
                      <div className="border border-blue-A100 border-solid flex flex-col items-start justify-start w-auto md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[948px] w-full">
                          <Button className="cursor-pointer font-bold leading-[normal] text-center text-lg w-[172px]">
                            MÃ MÁY IN
                          </Button>
                          <Button className="cursor-pointer font-bold leading-[normal] text-center text-lg w-[200px]">
                            THƯƠNG HIỆU
                          </Button>
                          <Button className="cursor-pointer font-bold leading-[normal] text-center text-lg w-[172px]">
                            ĐỊA ĐIỂM
                          </Button>
                          <div className="bg-blue-A100 flex flex-1 flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-full">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtEBGaramondRomanBold18"
                            >
                              HÀNH ĐỘNG
                            </Text>
                          </div>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start max-w-[948px] w-full">
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[172px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              ABCD
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[200px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              Canon
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[172px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              601H1 BK HCM
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[50px] items-center justify-center px-10 sm:px-5 py-2.5 w-full">
                            <Text
                              className="text-blue-900 text-lg underline w-auto"
                              size="txtEBGaramondRomanBold18Blue900"
                            >
                              Xóa
                            </Text>
                            <Text
                              className="text-blue-900 text-lg underline w-auto"
                              size="txtEBGaramondRomanBold18Blue900"
                            >
                              Vô hiệu hóa
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start max-w-[948px] w-full">
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[172px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              BCDE
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[200px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              Canon
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[172px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              601H6 BK HCM
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[50px] items-center justify-center px-10 sm:px-5 py-2.5 w-full">
                            <Text
                              className="text-blue-900 text-lg underline w-auto"
                              size="txtEBGaramondRomanBold18Blue900"
                            >
                              Xóa
                            </Text>
                            <Text
                              className="text-blue-900 text-lg underline w-auto"
                              size="txtEBGaramondRomanBold18Blue900"
                            >
                              Vô hiệu hóa
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start max-w-[948px] w-full">
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[172px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              CDEF
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[200px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              Samsung
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[172px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              102H6 BK HCM
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[50px] items-center justify-center px-10 sm:px-5 py-2.5 w-full">
                            <Text
                              className="text-blue-900 text-lg underline w-auto"
                              size="txtEBGaramondRomanBold18Blue900"
                            >
                              Xóa
                            </Text>
                            <Text
                              className="text-blue-900 text-lg underline w-auto"
                              size="txtEBGaramondRomanBold18Blue900"
                            >
                              Vô hiệu hóa
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start max-w-[948px] w-full">
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[172px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              DEFG
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[200px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              Lexmark
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[172px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              202H2 BK HCM
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[50px] items-center justify-center px-10 sm:px-5 py-2.5 w-full">
                            <Text
                              className="text-blue-900 text-lg underline w-auto"
                              size="txtEBGaramondRomanBold18Blue900"
                            >
                              Xóa
                            </Text>
                            <Text
                              className="text-blue-900 text-lg underline w-auto"
                              size="txtEBGaramondRomanBold18Blue900"
                            >
                              Vô hiệu hóa
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start max-w-[948px] w-full">
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[172px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              EFGH
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[200px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              Panasonic
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-center px-10 sm:px-5 py-2.5 w-[172px]">
                            <Text
                              className="text-black-900 text-lg w-auto"
                              size="txtEBGaramondRomanRegular18"
                            >
                              301H3 BK HCM
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[50px] items-center justify-center px-10 sm:px-5 py-2.5 w-full">
                            <Text
                              className="text-blue-900 text-lg underline w-auto"
                              size="txtEBGaramondRomanBold18Blue900"
                            >
                              Xóa
                            </Text>
                            <Text
                              className="text-blue-900 text-lg underline w-auto"
                              size="txtEBGaramondRomanBold18Blue900"
                            >
                              Vô hiệu hóa
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue-900 border-solid flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[43px] pb-[122px] w-[2%] md:w-full">
                    <div className="bg-blue-A100 h-[92px] w-full"></div>
                  </div>
                  <div className="flex flex-col gap-[19px] items-center justify-start mb-[9px] md:mt-0 mt-[53px] w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_settings.svg"
                      alt="settings_One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_settings.svg"
                      alt="settings_Two"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_settings.svg"
                      alt="settings_Three"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_settings.svg"
                      alt="settings_Four"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <QuNLMYInFooter
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

export default QunlmyinPage;
