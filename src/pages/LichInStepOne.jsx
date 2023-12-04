import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Datepicker, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import TLChInStepOneMenucasinhvin from "components/TLChInStepOneMenucasinhvin";

const TlchinstepOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ebgaramond items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-blue-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[62px] items-start justify-start md:px-5 w-[96%] md:w-full">
            <div className="bg-blue-A100 flex flex-col md:gap-10 gap-[636px] items-center justify-start p-[17px] w-1/5 md:w-full">
              <TLChInStepOneMenucasinhvin className="flex flex-col items-center justify-start mt-3.5 w-full" />
              <Text
                className="mb-[23px] text-lg text-white-A700"
                size="txtEBGaramondRomanBold18"
              >
                HCMUT_SSPS
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start md:mt-0 mt-9 w-[77%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue-900 text-center"
                size="txtEBGaramondRomanBold48"
              >
                ĐẶT LỊCH IN
              </Text>
              <Text
                className="mt-[33px] text-blue-900 text-center text-lg"
                size="txtEBGaramondRomanBold18Blue900"
              >
                Thời gian biểu làm việc
              </Text>
              <div className="md:gap-5 gap-[52px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[46px] w-full">
                <div className="flex flex-1 flex-col gap-1.5 items-center justify-start w-full">
                  <div className="bg-blue-A100 border border-blue-900 border-solid flex flex-col gap-[52px] items-start justify-end p-[23px] sm:px-5 w-full">
                    <Text
                      className="md:ml-[0] ml-[38px] mt-[3px] text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Sáng: 7h - 11h
                    </Text>
                    <Text
                      className="ml-7 md:ml-[0] text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Chiều: 13h - 16h
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[38px] text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Tối: 18h - 20h
                    </Text>
                  </div>
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtEBGaramondRomanRegular18"
                  >
                    Thứ 2
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[5px] items-center justify-start w-full">
                  <div className="bg-blue-A100 border border-blue-900 border-solid flex flex-col gap-[52px] items-center justify-end p-[23px] sm:px-5 w-full">
                    <Text
                      className="mt-[3px] text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Sáng: 7h - 11h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Chiều: 13h - 16h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Tối: 18h - 20h
                    </Text>
                  </div>
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtEBGaramondRomanRegular18"
                  >
                    Thứ 3
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[5px] justify-start w-full">
                  <div className="bg-blue-A100 border border-blue-900 border-solid flex flex-col gap-[52px] items-center justify-end p-6 sm:px-5 w-full">
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Sáng: 7h - 11h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Chiều: 13h - 16h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Tối: 18h - 20h
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[99px] text-black-900 text-center text-lg"
                    size="txtEBGaramondRomanRegular18"
                  >
                    Thứ 4
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[5px] items-center justify-start w-full">
                  <div className="bg-blue-A100 border border-blue-900 border-solid flex flex-col gap-[52px] items-center justify-end p-[23px] sm:px-5 w-full">
                    <Text
                      className="mt-[3px] text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Sáng: 7h - 11h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Chiều: 13h - 16h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Tối: 18h - 20h
                    </Text>
                  </div>
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtEBGaramondRomanRegular18"
                  >
                    Thứ 5
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                  <div className="bg-blue-A100 border border-blue-900 border-solid flex flex-col gap-[52px] items-center justify-end p-[23px] sm:px-5 w-full">
                    <Text
                      className="mt-[3px] text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Sáng: 7h - 11h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Chiều: 13h - 16h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Tối: 18h - 20h
                    </Text>
                  </div>
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtEBGaramondRomanRegular18"
                  >
                    Thứ 6
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[9px] items-center justify-start w-full">
                  <div className="bg-blue-A100 border border-blue-900 border-solid flex flex-col gap-[52px] items-center justify-end p-[22px] sm:px-5 w-full">
                    <Text
                      className="mt-[5px] text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Sáng: 7h - 11h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Chiều: 13h - 16h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Tối: 18h - 20h
                    </Text>
                  </div>
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtEBGaramondRomanRegular18"
                  >
                    Thứ 7
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="bg-blue-A100 border border-blue-900 border-solid flex flex-col gap-[52px] items-center justify-end p-[23px] sm:px-5 w-full">
                    <Text
                      className="mt-[3px] text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Sáng: 7h - 11h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Chiều: 13h - 16h
                    </Text>
                    <Text
                      className="text-lg text-white-A700 underline"
                      size="txtEBGaramondRomanBold18"
                    >
                      Tối: 18h - 20h
                    </Text>
                  </div>
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtEBGaramondRomanRegular18"
                  >
                    Chủ nhật
                  </Text>
                </div>
              </div>
              <Text
                className="mt-[38px] text-blue-900 text-center text-lg"
                size="txtEBGaramondRomanBold18Blue900"
              >
                Chọn ngày
              </Text>
              <Datepicker
                className="groupTwentySix"
                placeholder="dd/mm/yyyy"
              ></Datepicker>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[149px] mt-[46px]"
                onClick={() => navigate("/tlchinsteptwo")}
                rightIcon={
                  <Img
                    className="h-7 ml-[25px]"
                    src="images/img_arrowleft.svg"
                    alt="arrow_left"
                  />
                }
              >
                <div className="font-bold leading-[normal] text-blue-900 text-center text-lg underline">
                  TIẾP THEO
                </div>
              </Button>
            </div>
          </div>
          <Footer className="bg-blue-900 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default TlchinstepOnePage;
