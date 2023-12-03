import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Datepicker, Img, Input, ReactTable, Text } from "components";
import XemLChSInNSPSOFooter from "components/XemLChSInNSPSOFooter";
import XemLChSInNSPSOMenucaspso from "components/XemLChSInNSPSOMenucaspso";

const XemlchsinnSPSOPage = () => {
  const tableData = React.useRef([
    {
      min: "1234ABCD",
      thigian: "Thứ 4, 28/09/2018, ca chiều",
      myin: "ABCD",
      tiliu: "Capstone_Project_hk231_2023_v3",
    },
    {
      min: "2345ABCD",
      thigian: "Thứ 4, 28/09/2018, ca chiều",
      myin: "BCDE",
      tiliu: "01_Ch1 Introduction_2023",
    },
    {
      min: "3456ABCD",
      thigian: "Thứ 4, 28/09/2018, ca chiều",
      myin: "CDEF",
      tiliu: "02_Ch2 Software Processes_2023",
    },
    {
      min: "4567ABCD",
      thigian: "Thứ 4, 28/09/2018, ca chiều",
      myin: "DEFG",
      tiliu: "03_Ch3_4 Requirements Engineering_2023",
    },
    {
      min: "5678ABCD",
      thigian: "Thứ 4, 28/09/2018, ca chiều",
      myin: "ABCD",
      tiliu: "05_Ch5_Introduction_OOP_2023",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("min", {
        cell: (info) => (
          <Text
            className="pb-[5px] sm:pl-5 pl-[35px] pt-2.5 text-black-900 text-lg"
            size="txtEBGaramondRomanRegular18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Button className="cursor-pointer font-bold leading-[normal] min-w-[172px] text-center text-lg">
            <div className="min-w-[172px]">MÃ IN</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("thigian", {
        cell: (info) => (
          <Text
            className="pb-1 sm:pl-5 pl-[35px] pt-2.5 text-black-900 text-lg"
            size="txtEBGaramondRomanRegular18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Button className="cursor-pointer font-bold leading-[normal] min-w-[279px] text-center text-lg">
            <div className="min-w-[279px]">THỜI GIAN</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("myin", {
        cell: (info) => (
          <Text
            className="pb-[5px] pt-[9px] sm:px-5 px-[35px] text-black-900 text-lg"
            size="txtEBGaramondRomanRegular18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Button className="cursor-pointer font-bold leading-[normal] min-w-[172px] text-center text-lg">
            <div className="min-w-[172px]">MÁY IN</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("tiliu", {
        cell: (info) => (
          <Text
            className="pb-[3px] sm:pl-5 pl-[35px] pt-3 text-black-900 text-lg"
            size="txtEBGaramondRomanRegular18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Button className="cursor-pointer font-bold leading-[normal] min-w-[325px] text-center text-lg">
            <div className="min-w-[325px]">TÀI LIỆU</div>
          </Button>
        ),
      }),
    ];
  }, []);

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
          <div className="flex md:flex-col flex-row md:gap-10 gap-[82px] items-start justify-start md:px-5 w-[94%] md:w-full">
            <div className="bg-blue-A100 flex flex-col md:gap-10 gap-[304px] items-center justify-end p-[17px] w-1/5 md:w-full">
              <XemLChSInNSPSOMenucaspso className="flex flex-col items-center justify-start mt-[17px] w-full" />
              <Text
                className="text-lg text-white-A700"
                size="txtEBGaramondRomanBold18"
              >
                HCMUT_SSPS
              </Text>
            </div>
            <div className="flex flex-col gap-7 items-center justify-start md:mt-0 mt-[29px] w-3/4 md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue-900 text-center"
                size="txtEBGaramondRomanBold48"
              >
                LỊCH SỬ IN ẤN
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-2 justify-start w-[30%] md:w-full">
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
                        <div className="mb-1 ml-[35px] w-[18px] bg-blue-A200">
                          <Img
                            className="my-auto"
                            src="images/img_rewind.svg"
                            alt="rewind"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col justify-start w-[30%] md:w-full">
                    <Text
                      className="ml-6 md:ml-[0] text-blue-900 text-lg"
                      size="txtEBGaramondRomanBold18Blue900"
                    >
                      Máy in
                    </Text>
                    <Input
                      name="language"
                      placeholder="Nhập mã máy in "
                      className="leading-[normal] p-0 placeholder:text-blue-900_7f text-left text-lg w-full"
                      wrapClassName="flex mt-1 rounded-[19px] w-full"
                      suffix={
                        <div className="mb-[5px] ml-[35px] w-[18px] bg-blue-A200">
                          <Img
                            className="my-auto"
                            src="images/img_rewind.svg"
                            alt="rewind"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[5px] justify-start w-[30%] md:w-full">
                    <Text
                      className="md:ml-[0] ml-[23px] text-blue-900 text-lg"
                      size="txtEBGaramondRomanBold18Blue900"
                    >
                      Thời gian
                    </Text>
                    <Datepicker
                      className="groupOne"
                      placeholder="dd/mm/yyyy"
                    ></Datepicker>
                  </div>
                </div>
                <Text
                  className="ml-6 md:ml-[0] mt-8 text-blue-900 text-lg"
                  size="txtEBGaramondRomanBold18Blue900"
                >
                  Lịch sử in ấn
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-evenly mt-[19px] w-full">
                  <div className="border border-blue-A100 border-solid flex flex-1 flex-col h-[277px] md:h-auto items-start justify-start max-w-[953px] w-full">
                    <div className="overflow-auto w-auto">
                      <ReactTable
                        columns={tableColumns}
                        data={tableData.current}
                        rowClass={""}
                        headerClass="bg-blue-A100 border border-blue-A100"
                      />
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue-900 border-solid flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[46px] pb-[131px] w-[2%] md:w-full">
                    <div className="bg-blue-A100 h-[99px] w-full"></div>
                  </div>
                  <div className="flex flex-col gap-[19px] h-[210px] md:h-auto items-center justify-start mb-[9px] md:mt-0 mt-14 w-6">
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
          <XemLChSInNSPSOFooter
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
            contactinfo={
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

export default XemlchsinnSPSOPage;
