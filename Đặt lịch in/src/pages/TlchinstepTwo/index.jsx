import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import TLChInStepOneMenucasinhvin from "components/TLChInStepOneMenucasinhvin";

const nhpDaDimOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const nhpMaMayInOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const chnKichThcOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TlchinstepTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ebgaramond items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-blue-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1163px] mx-auto md:px-5 w-full">
            <div className="bg-blue-A100 flex md:flex-1 flex-col md:gap-10 gap-[312px] items-center justify-end p-[17px] w-[23%] md:w-full">
              <TLChInStepOneMenucasinhvin className="flex flex-col items-center justify-start mt-[7px] w-full" />
              <Text
                className="text-lg text-white-A700"
                size="txtEBGaramondRomanBold18"
              >
                HCMUT_SSPS
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[54%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue-900 text-center"
                size="txtEBGaramondRomanBold48"
              >
                ĐẶT LỊCH IN
              </Text>
              <Text
                className="mt-[5px] text-blue-900 text-lg"
                size="txtEBGaramondRomanBold18Blue900"
              >
                Thông tin lịch in
              </Text>
              <div className="flex flex-col items-start justify-start mt-[11px] outline outline-[0.5px] outline-blue-900 w-auto md:w-full">
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Blue900"
                      >
                        Sinh viên
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18"
                      >
                        Trần Nguyễn Nam Anh
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Blue900"
                      >
                        Mã số sinh viên
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18"
                      >
                        2110758
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Blue900"
                      >
                        Thời gian
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18"
                      >
                        Thứ 4 (29/11/2023), ca chiều
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                  <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                    <Text
                      className="text-blue-900 text-lg w-auto"
                      size="txtEBGaramondRomanRegular18Blue900"
                    >
                      Tải tài liệu
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-center p-2.5 w-full">
                    <div className="md:h-6 h-[25px] relative w-[39%]">
                      <div className="absolute bg-blue_gray-100 h-6 inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-black-900_7f text-lg w-max"
                        size="txtEBGaramondRomanRegular18Black9007f"
                      >
                        Tải tài liệu
                      </Text>
                    </div>
                    <Img
                      className="h-5 w-5"
                      src="images/img_twitter_blue_a200.svg"
                      alt="twitter_One"
                    />
                  </div>
                </div>
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Blue900"
                      >
                        Địa điểm
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <div className="md:h-6 h-[26px] relative w-[45%]">
                        <div className="absolute bg-blue_gray-100 h-6 inset-x-[0] mx-auto top-[0] w-full"></div>
                        <SelectBox
                          className="absolute bottom-[0] inset-x-[0] leading-[normal] mx-auto text-black-900_7f text-left text-lg w-[91%] sm:w-full"
                          placeholderClassName="text-black-900_7f"
                          indicator={
                            <Img
                              className="h-2.5 mr-[0] w-6 right-[0] absolute"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="groupThirtyThree"
                          options={nhpDaDimOptionsList}
                          isSearchable={false}
                          placeholder="Nhập địa điểm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Blue900"
                      >
                        Máy in
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <div className="md:h-6 h-[26px] relative w-[45%]">
                        <div className="absolute bg-blue_gray-100 h-6 inset-x-[0] mx-auto top-[0] w-full"></div>
                        <SelectBox
                          className="absolute bottom-[0] inset-x-[0] leading-[normal] mx-auto text-black-900_7f text-left text-lg w-[91%] sm:w-full"
                          placeholderClassName="text-black-900_7f"
                          indicator={
                            <Img
                              className="h-2.5 mr-[0] w-6 right-[0] absolute"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="groupThirtyThree"
                          options={nhpMaMayInOptionsList}
                          isSearchable={false}
                          placeholder="Nhập mã máy in"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Blue900"
                      >
                        Kích thước trang
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <div className="md:h-6 h-[25px] relative w-[45%]">
                        <div className="absolute bg-blue_gray-100 h-6 inset-x-[0] mx-auto top-[0] w-full"></div>
                        <SelectBox
                          className="absolute bottom-[0] inset-x-[0] leading-[normal] mx-auto text-black-900_7f text-left text-lg w-[91%] sm:w-full"
                          placeholderClassName="text-black-900_7f"
                          indicator={
                            <Img
                              className="h-2.5 mr-[0] w-6 right-[0] absolute"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="groupThirtyThree"
                          options={chnKichThcOptionsList}
                          isSearchable={false}
                          placeholder="Chọn kích thước"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Blue900"
                      >
                        Số lượng trang
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <div className="md:h-6 h-[26px] relative w-[45%]">
                        <div className="absolute bg-blue_gray-100 h-6 inset-x-[0] mx-auto top-[0] w-full"></div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto">
                          <Text
                            className="text-black-900_7f text-center text-lg"
                            size="txtEBGaramondRomanRegular18Black9007f"
                          >
                            Nhập số lượng
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Blue900"
                      >
                        Số mặt in
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <div className="md:h-6 h-[25px] relative w-[45%]">
                        <div className="absolute bg-blue_gray-100 h-6 inset-x-[0] mx-auto top-[0] w-full"></div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto">
                          <Text
                            className="text-black-900_7f text-center text-lg"
                            size="txtEBGaramondRomanRegular18Black9007f"
                          >
                            1 hoặc 2
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-[622px] md:w-full">
                    <div className="flex flex-col items-center justify-center p-2.5 w-[155px]">
                      <Text
                        className="text-blue-900 text-lg w-auto"
                        size="txtEBGaramondRomanRegular18Blue900"
                      >
                        Số bản in
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2.5 w-full">
                      <div className="md:h-6 h-[26px] relative w-[45%]">
                        <div className="absolute bg-blue_gray-100 h-6 inset-x-[0] mx-auto top-[0] w-full"></div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto">
                          <Text
                            className="text-black-900_7f text-center text-lg"
                            size="txtEBGaramondRomanRegular18Black9007f"
                          >
                            Nhập số lượng
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-row items-center justify-between mt-[15px] w-[70%] md:w-full">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[156px] text-center text-lg"
                  shape="square"
                  color="blue_A100"
                  size="xs"
                  variant="fill"
                >
                  Đặt lịch in
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[156px] text-center text-lg"
                  shape="square"
                  color="red_400"
                  size="xs"
                  variant="fill"
                >
                  Hủy
                </Button>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[117px] mt-[19px]"
                onClick={() => navigate("/tlchinstepone")}
                rightIcon={
                  <div className="h-7 ml-[22px] w-7 bg-blue-A200">
                    <Img
                      className="h-7"
                      src="images/img_arrowleft_blue_a200.svg"
                      alt="arrow_left"
                    />
                  </div>
                }
              >
                <div className="font-bold leading-[normal] text-blue-900 text-center text-lg underline">
                  TRỞ VỀ
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

export default TlchinstepTwoPage;
