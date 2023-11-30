import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, ReactTable, Text } from "components";
import XemMYInFooter from "components/XemMYInFooter";
import XemMYInMenucasinhvin from "components/XemMYInMenucasinhvin";

const XemmyinPage = () => {
  const tableData = React.useRef([
    { mmyin: "ABCD", thnghiu: "Canon", aim: "601H1 BK HCM" },
    { mmyin: "BCDE", thnghiu: "Canon", aim: "601H6 BK HCM" },
    { mmyin: "CDEF", thnghiu: "Samsung", aim: "102H6 BK HCM" },
    { mmyin: "DEFG", thnghiu: "Lexmark", aim: "202H2 BK HCM" },
    { mmyin: "EFGH", thnghiu: "Panasonic", aim: "301H3 BK HCM" },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("mmyin", {
        cell: (info) => (
          <Text
            className="pb-1 pt-[9px] sm:px-5 px-[35px] text-black-900 text-lg"
            size="txtEBGaramondRomanRegular18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Button className="cursor-pointer font-bold leading-[normal] min-w-[172px] text-center text-lg">
            <div className="min-w-[172px]">MÃ MÁY IN</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("thnghiu", {
        cell: (info) => (
          <Text
            className="pb-1 pt-2.5 sm:px-5 px-[35px] text-black-900 text-lg"
            size="txtEBGaramondRomanRegular18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Button className="cursor-pointer font-bold leading-[normal] min-w-[200px] text-center text-lg">
            <div className="min-w-[200px]">THƯƠNG HIỆU</div>
          </Button>
        ),
      }),
      tableColumnHelper.accessor("aim", {
        cell: (info) => (
          <Text
            className="pb-1 sm:pl-5 pl-6 pt-2.5 text-black-900 text-lg"
            size="txtEBGaramondRomanRegular18"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Button className="cursor-pointer font-bold leading-[normal] min-w-[172px] text-center text-lg">
            <div className="min-w-[172px]">ĐỊA ĐIỂM</div>
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
          <div className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-start justify-start md:px-5 w-[96%] md:w-full">
            <div className="bg-blue-A100 flex flex-col md:gap-10 gap-[303px] justify-end p-[7px] w-[19%] md:w-full">
              <XemMYInMenucasinhvin className="flex flex-col items-center justify-start ml-2 md:ml-[0] mt-[26px] w-[97%] md:w-full" />
              <Text
                className="mb-[11px] md:ml-[0] ml-[52px] mr-[68px] text-lg text-white-A700"
                size="txtEBGaramondRomanBold18"
              >
                HCMUT_SSPS
              </Text>
            </div>
            <div className="flex flex-col gap-[15px] items-center justify-start md:mt-0 mt-[25px] w-3/4 md:w-full">
              <div className="flex flex-col justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[265px] text-5xl sm:text-[38px] md:text-[44px] text-blue-900 text-center"
                  size="txtEBGaramondRomanBold48"
                >
                  DANH SÁCH MÁY IN
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[33px] w-full">
                  <div className="flex md:flex-1 flex-col gap-[13px] justify-start w-[30%] md:w-full">
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
                        <div className="mt-px mb-0.5 ml-[35px] sm:w-full sm:mx-0 w-[6%] bg-blue-A200">
                          <Img
                            className="my-auto"
                            src="images/img_rewind.svg"
                            alt="rewind"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[13px] justify-start w-[30%] md:w-full">
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
                        <div className="mt-px mb-0.5 ml-[35px] sm:w-full sm:mx-0 w-[6%] bg-blue-A200">
                          <Img
                            className="my-auto"
                            src="images/img_rewind.svg"
                            alt="rewind"
                          />
                        </div>
                      }
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-3.5 justify-start w-[30%] md:w-full">
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
                        <div className="mt-px mb-0.5 ml-[35px] sm:w-full sm:mx-0 w-[6%] bg-blue-A200">
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
                <Text
                  className="md:ml-[0] ml-[151px] mt-[43px] text-blue-900 text-lg"
                  size="txtEBGaramondRomanBold18Blue900"
                >
                  Danh sách máy in
                </Text>
              </div>
              <div className="border border-blue-A100 border-solid flex flex-col items-start justify-start w-[544px] sm:w-full">
                <div className="overflow-auto w-[544px]">
                  <ReactTable
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={""}
                    headerClass="bg-blue-A100 border border-blue-A100"
                  />
                </div>
              </div>
            </div>
          </div>
          <XemMYInFooter
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

export default XemmyinPage;
