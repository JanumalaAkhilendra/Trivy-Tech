import { CopyIcon, EyeOffIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const DesignLayer = () => {
  // Card vectors data - organizing all the vector images for better maintainability
  const cardVectors = [
    {
      top: "top-[163px]",
      left: "left-[74px]",
      width: "w-5",
      height: "h-[29px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-86.svg",
    },
    {
      top: "top-[238px]",
      left: "left-[104px]",
      width: "w-10",
      height: "h-[37px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-79.svg",
    },
    {
      top: "top-0",
      left: "left-[159px]",
      width: "w-[27px]",
      height: "h-[39px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-100.svg",
    },
    {
      top: "top-0",
      left: "left-[159px]",
      width: "w-[27px]",
      height: "h-[39px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-92.svg",
    },
    {
      top: "top-0",
      left: "left-[143px]",
      width: "w-[43px]",
      height: "h-16",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-105.svg",
    },
    {
      top: "top-0",
      left: "left-[143px]",
      width: "w-[43px]",
      height: "h-16",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-61.svg",
    },
    {
      top: "top-[51px]",
      left: "left-[149px]",
      width: "w-[37px]",
      height: "h-[39px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-88.svg",
    },
    {
      top: "top-[51px]",
      left: "left-[149px]",
      width: "w-[37px]",
      height: "h-[39px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-70.svg",
    },
    {
      top: "top-0",
      left: "left-[78px]",
      width: "w-[67px]",
      height: "h-[61px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-54.svg",
    },
    {
      top: "top-0",
      left: "left-[78px]",
      width: "w-[67px]",
      height: "h-[61px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-99.svg",
    },
    {
      top: "top-0",
      left: "left-[54px]",
      width: "w-10",
      height: "h-3.5",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-57.svg",
    },
    {
      top: "top-0",
      left: "left-[54px]",
      width: "w-10",
      height: "h-3.5",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-90.svg",
    },
    {
      top: "top-0",
      left: "left-3",
      width: "w-[66px]",
      height: "h-[49px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-83.svg",
    },
    {
      top: "top-0",
      left: "left-3",
      width: "w-[66px]",
      height: "h-[49px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-98.svg",
    },
    {
      top: "top-0",
      left: "left-0",
      width: "w-12",
      height: "h-[57px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-72.svg",
    },
    {
      top: "top-0",
      left: "left-0",
      width: "w-12",
      height: "h-[57px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-95.svg",
    },
    {
      top: "top-3.5",
      left: "left-[74px]",
      width: "w-28",
      height: "h-[94px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-66.svg",
    },
    {
      top: "top-3.5",
      left: "left-[74px]",
      width: "w-28",
      height: "h-[94px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-93.svg",
    },
    {
      top: "top-[61px]",
      left: "left-[146px]",
      width: "w-[3px]",
      height: "h-[3px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-103.svg",
    },
    {
      top: "top-[61px]",
      left: "left-[146px]",
      width: "w-[3px]",
      height: "h-[3px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-109.svg",
    },
    {
      top: "top-[61px]",
      left: "left-[146px]",
      width: "w-[3px]",
      height: "h-[3px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-87.svg",
    },
    {
      top: "top-16",
      left: "left-[146px]",
      width: "w-10",
      height: "h-[27px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-76.svg",
    },
    {
      top: "top-16",
      left: "left-[146px]",
      width: "w-10",
      height: "h-[27px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-108.svg",
    },
    {
      top: "top-16",
      left: "left-[146px]",
      width: "w-10",
      height: "h-[27px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-112.svg",
    },
    {
      top: "top-3.5",
      left: "left-[78px]",
      width: "w-[68px]",
      height: "h-[51px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-53.svg",
    },
    {
      top: "top-3.5",
      left: "left-[78px]",
      width: "w-[68px]",
      height: "h-[51px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-37.svg",
    },
    {
      top: "top-3.5",
      left: "left-[78px]",
      width: "w-[68px]",
      height: "h-[51px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-19.svg",
    },
    {
      top: "top-[49px]",
      left: "left-0",
      width: "w-12",
      height: "h-[38px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-17.svg",
    },
    {
      top: "top-[49px]",
      left: "left-0",
      width: "w-12",
      height: "h-[38px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-6.svg",
    },
    {
      top: "top-3.5",
      left: "left-[38px]",
      width: "w-10",
      height: "h-[94px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-38.svg",
    },
    {
      top: "top-3.5",
      left: "left-[38px]",
      width: "w-10",
      height: "h-[94px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-21.svg",
    },
    {
      top: "top-[95px]",
      left: "left-[74px]",
      width: "w-28",
      height: "h-[74px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-47.svg",
    },
    {
      top: "top-24",
      left: "left-[74px]",
      width: "w-28",
      height: "h-[74px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-20.svg",
    },
    {
      top: "top-[107px]",
      left: "left-[74px]",
      width: "w-28",
      height: "h-16",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-65.svg",
    },
    {
      top: "top-[107px]",
      left: "left-[74px]",
      width: "w-28",
      height: "h-16",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-102.svg",
    },
    {
      top: "top-[141px]",
      left: "left-[88px]",
      width: "w-[98px]",
      height: "h-[31px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-39.svg",
    },
    {
      top: "top-[141px]",
      left: "left-[88px]",
      width: "w-[98px]",
      height: "h-[31px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector.svg",
    },
    {
      top: "top-[159px]",
      left: "left-[103px]",
      width: "w-[83px]",
      height: "h-[38px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-3.svg",
    },
    {
      top: "top-[159px]",
      left: "left-[103px]",
      width: "w-[83px]",
      height: "h-[38px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-43.svg",
    },
    {
      top: "top-[177px]",
      left: "left-36",
      width: "w-[42px]",
      height: "h-[71px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-35.svg",
    },
    {
      top: "top-[177px]",
      left: "left-36",
      width: "w-[42px]",
      height: "h-[71px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-4.svg",
    },
    {
      top: "top-[141px]",
      left: "left-[88px]",
      width: "w-4",
      height: "h-[71px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-84.svg",
    },
    {
      top: "top-[141px]",
      left: "left-[88px]",
      width: "w-4",
      height: "h-[71px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-31.svg",
    },
    {
      top: "top-[107px]",
      left: "left-[74px]",
      width: "w-[15px]",
      height: "h-[73px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-111.svg",
    },
    {
      top: "top-[107px]",
      left: "left-[74px]",
      width: "w-[15px]",
      height: "h-[73px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-62.svg",
    },
    {
      top: "top-[153px]",
      left: "left-0",
      width: "w-[103px]",
      height: "h-[60px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-60.svg",
    },
    {
      top: "top-[153px]",
      left: "left-0",
      width: "w-[103px]",
      height: "h-[60px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-85.svg",
    },
    {
      top: "top-[157px]",
      left: "left-0",
      width: "w-7",
      height: "h-4",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-1.svg",
    },
    {
      top: "top-[157px]",
      left: "left-0",
      width: "w-7",
      height: "h-4",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-71.svg",
    },
    {
      top: "top-[191px]",
      left: "left-[93px]",
      width: "w-[9px]",
      height: "h-[21px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-2.svg",
    },
    {
      top: "top-[191px]",
      left: "left-[93px]",
      width: "w-[9px]",
      height: "h-[21px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-36.svg",
    },
    {
      top: "top-[191px]",
      left: "left-[93px]",
      width: "w-[9px]",
      height: "h-[21px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-27.svg",
    },
    {
      top: "top-[150px]",
      left: "left-0",
      width: "w-[88px]",
      height: "h-[30px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-52.svg",
    },
    {
      top: "top-[150px]",
      left: "left-0",
      width: "w-[88px]",
      height: "h-[30px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-26.svg",
    },
    {
      top: "top-[157px]",
      left: "left-0",
      width: "w-[104px]",
      height: "h-[118px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-32.svg",
    },
    {
      top: "top-[157px]",
      left: "left-0",
      width: "w-[104px]",
      height: "h-[118px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-14.svg",
    },
    {
      top: "top-[87px]",
      left: "left-[38px]",
      width: "w-[35px]",
      height: "h-[75px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-48.svg",
    },
    {
      top: "top-[87px]",
      left: "left-[38px]",
      width: "w-[35px]",
      height: "h-[75px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-45.svg",
    },
    {
      top: "top-[87px]",
      left: "left-0",
      width: "w-[72px]",
      height: "h-[73px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-9.svg",
    },
    {
      top: "top-[87px]",
      left: "left-0",
      width: "w-[72px]",
      height: "h-[73px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-94.svg",
    },
    {
      top: "top-[162px]",
      left: "left-[74px]",
      width: "w-px",
      height: "h-px",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-29.svg",
    },
    {
      top: "top-[162px]",
      left: "left-[74px]",
      width: "w-px",
      height: "h-px",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-7.svg",
    },
    {
      top: "top-[150px]",
      left: "left-0",
      width: "w-[71px]",
      height: "h-[11px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-15.svg",
    },
    {
      top: "top-[150px]",
      left: "left-0",
      width: "w-[71px]",
      height: "h-[11px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-101.svg",
    },
    {
      top: "top-[150px]",
      left: "left-0",
      width: "w-[71px]",
      height: "h-[11px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-73.svg",
    },
    {
      top: "top-[87px]",
      left: "left-[38px]",
      width: "w-[33px]",
      height: "h-[71px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-12.svg",
    },
    {
      top: "top-[87px]",
      left: "left-[38px]",
      width: "w-[33px]",
      height: "h-[71px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-68.svg",
    },
    {
      top: "top-[87px]",
      left: "left-[38px]",
      width: "w-[33px]",
      height: "h-[71px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-51.svg",
    },
    {
      top: "top-[69px]",
      left: "left-0",
      width: "w-[38px]",
      height: "h-[59px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-8.svg",
    },
    {
      top: "top-[69px]",
      left: "left-0",
      width: "w-[38px]",
      height: "h-[59px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-13.svg",
    },
    {
      top: "top-[170px]",
      left: "left-0",
      width: "w-[50px]",
      height: "h-[125px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-28.svg",
    },
    {
      top: "top-[170px]",
      left: "left-0",
      width: "w-[50px]",
      height: "h-[125px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-30.svg",
    },
    {
      top: "top-[164px]",
      left: "left-0",
      width: "w-[50px]",
      height: "h-[69px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-67.svg",
    },
    {
      top: "top-[164px]",
      left: "left-0",
      width: "w-[50px]",
      height: "h-[69px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-64.svg",
    },
    {
      top: "top-[164px]",
      left: "left-0",
      width: "w-[50px]",
      height: "h-[69px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-50.svg",
    },
    {
      top: "top-[293px]",
      left: "left-[9px]",
      width: "w-0.5",
      height: "h-0.5",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-89.svg",
    },
    {
      top: "top-[293px]",
      left: "left-[9px]",
      width: "w-0.5",
      height: "h-0.5",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-10.svg",
    },
    {
      top: "top-[233px]",
      left: "left-[11px]",
      width: "w-[94px]",
      height: "h-[63px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-22.svg",
    },
    {
      top: "top-[233px]",
      left: "left-[11px]",
      width: "w-[94px]",
      height: "h-[63px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-23.svg",
    },
    {
      top: "top-[275px]",
      left: "left-[59px]",
      width: "w-[45px]",
      height: "h-[21px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-18.svg",
    },
    {
      top: "top-[275px]",
      left: "left-[59px]",
      width: "w-[45px]",
      height: "h-[21px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-69.svg",
    },
    {
      top: "top-[159px]",
      left: "left-[103px]",
      width: "w-[46px]",
      height: "h-20",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-82.svg",
    },
    {
      top: "top-[159px]",
      left: "left-[103px]",
      width: "w-[46px]",
      height: "h-20",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-74.svg",
    },
    {
      top: "top-[238px]",
      left: "left-[134px]",
      width: "w-[11px]",
      height: "h-2.5",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-11.svg",
    },
    {
      top: "top-[238px]",
      left: "left-[134px]",
      width: "w-[11px]",
      height: "h-2.5",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-63.svg",
    },
    {
      top: "top-[238px]",
      left: "left-[106px]",
      width: "w-20",
      height: "h-[58px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-81.svg",
    },
    {
      top: "top-[238px]",
      left: "left-[106px]",
      width: "w-20",
      height: "h-[58px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-91.svg",
    },
    {
      top: "top-[216px]",
      left: "left-[104px]",
      width: "w-10",
      height: "h-[59px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-41.svg",
    },
    {
      top: "top-[216px]",
      left: "left-[104px]",
      width: "w-10",
      height: "h-[59px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-46.svg",
    },
    {
      top: "top-0",
      left: "left-[140px]",
      width: "w-1.5",
      height: "h-[61px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-5.svg",
    },
    {
      top: "top-0",
      left: "left-[140px]",
      width: "w-1.5",
      height: "h-[61px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-104.svg",
    },
    {
      top: "top-[61px]",
      left: "left-[146px]",
      width: "w-px",
      height: "h-[3px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-34.svg",
    },
    {
      top: "top-[95px]",
      left: "left-[106px]",
      width: "w-20",
      height: "h-[9px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-40.svg",
    },
    {
      top: "top-[95px]",
      left: "left-[117px]",
      width: "w-[69px]",
      height: "h-[7px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-56.svg",
    },
    {
      top: "top-[158px]",
      left: "left-[166px]",
      width: "w-5",
      height: "h-[11px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-75.svg",
    },
    {
      top: "top-[131px]",
      left: "left-[113px]",
      width: "w-[73px]",
      height: "h-[39px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-55.svg",
    },
    {
      top: "top-[253px]",
      left: "left-2.5",
      width: "w-[26px]",
      height: "h-10",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-79.svg",
    },
    {
      top: "top-[264px]",
      left: "left-[9px]",
      width: "w-5",
      height: "h-8",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-59.svg",
    },
    {
      top: "top-[163px]",
      left: "left-[73px]",
      width: "w-px",
      height: "h-px",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-16.svg",
    },
    {
      top: "top-[155px]",
      left: "left-[30px]",
      width: "w-[43px]",
      height: "h-2",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-44.svg",
    },
    {
      top: "top-[126px]",
      left: "left-[72px]",
      width: "w-0.5",
      height: "h-[37px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-33.svg",
    },
    {
      top: "top-[158px]",
      left: "left-[71px]",
      width: "w-0.5",
      height: "h-1",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-107.svg",
    },
    {
      top: "top-[153px]",
      left: "left-[15px]",
      width: "w-[58px]",
      height: "h-2.5",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-49.svg",
    },
    {
      top: "top-[158px]",
      left: "left-[103px]",
      width: "w-0.5",
      height: "h-[57px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-58.svg",
    },
    {
      top: "top-[157px]",
      left: "left-0",
      width: "w-[104px]",
      height: "h-[59px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-97.svg",
    },
    {
      top: "top-[212px]",
      left: "left-[103px]",
      width: "w-0.5",
      height: "h-1",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-42.svg",
    },
    {
      top: "top-[173px]",
      left: "left-7",
      width: "w-[77px]",
      height: "h-11",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-80.svg",
    },
    {
      top: "top-[194px]",
      left: "left-[104px]",
      width: "w-px",
      height: "h-[22px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-78.svg",
    },
    {
      top: "top-[216px]",
      left: "left-[104px]",
      width: "w-px",
      height: "h-px",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-77.svg",
    },
    {
      top: "top-[233px]",
      left: "left-[50px]",
      width: "w-px",
      height: "h-px",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-24.svg",
    },
    {
      top: "top-44",
      left: "left-2",
      width: "w-[42px]",
      height: "h-[57px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-106.svg",
    },
    {
      top: "top-[248px]",
      left: "left-[104px]",
      width: "w-[29px]",
      height: "h-[27px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-25.svg",
    },
    {
      top: "top-[238px]",
      left: "left-[104px]",
      width: "w-10",
      height: "h-[58px]",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/vector-110.svg",
    },
  ];

  // Card elements data
  const cardElements = [
    {
      top: "top-[9px]",
      left: "left-[124px]",
      width: "w-12",
      height: "h-[21px]",
      alt: "Element",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/-105553332380480.png",
    },
    {
      top: "top-[76px]",
      left: "left-[23px]",
      width: "w-[35px]",
      height: "h-[94px]",
      alt: "Element",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/8124-4212-3456-7890.svg",
    },
    {
      top: "top-[13px]",
      left: "left-[19px]",
      width: "w-12",
      height: "h-[15px]",
      alt: "Element",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/-105553332372640.png",
    },
    {
      top: "top-[244px]",
      left: "left-[105px]",
      width: "w-[71px]",
      height: "h-[34px]",
      alt: "Group",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/group.png",
    },
  ];

  // Union elements data
  const unionElements = [
    {
      top: "top-[76px]",
      left: "left-3.5",
      width: "w-[54px]",
      height: "h-10",
      alt: "Union",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/union.svg",
    },
    {
      top: "top-[102px]",
      left: "left-3.5",
      width: "w-[54px]",
      height: "h-10",
      alt: "Union",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/union.svg",
    },
    {
      top: "top-32",
      left: "left-3.5",
      width: "w-[54px]",
      height: "h-10",
      alt: "Union",
      src: "https://c.animaapp.com/mcz0zc5gslQDDg/img/union.svg",
    },
  ];

  return (
    <Card
      className="relative w-[186px] h-[296px] rounded-2xl overflow-hidden"
      data-model-id="1:110"
    >
      <CardContent className="p-0">
        <div className="w-[186px] top-0 left-0 absolute h-[296px]">
          {/* Render all vector images */}
          {cardVectors.map((vector, index) =>
            vector.src ? (
              <img
                key={`vector-${index}`}
                className={`absolute ${vector.width} ${vector.height} ${vector.top} ${vector.left}`}
                alt="Vector"
                src={vector.src}
              />
            ) : (
              <img
                key={`vector-${index}`}
                className={`absolute ${vector.width} ${vector.height} ${vector.top} ${vector.left}`}
                alt="Vector"
              />
            ),
          )}

          {/* Gradient overlay */}
          <div className="absolute w-[186px] h-[296px] top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.9)_32%)]" />

          {/* Card elements */}
          {cardElements.map((element, index) => (
            <img
              key={`element-${index}`}
              className={`absolute ${element.width} ${element.height} ${element.top} ${element.left}`}
              alt={element.alt}
              src={element.src}
            />
          ))}

          {/* Union elements */}
          {unionElements.map((union, index) => (
            <img
              key={`union-${index}`}
              className={`absolute ${union.width} ${union.height} ${union.top} ${union.left}`}
              alt={union.alt}
              src={union.src}
            />
          ))}

          {/* Card security code with eye icon */}
          <div className="flex w-[71px] items-center gap-2 pl-0 pr-[45px] py-0 absolute top-[152px] left-[95px]">
            <img
              className="relative w-[39px] mr-[-13.00px]"
              alt="Frame"
              src="https://c.animaapp.com/mcz0zc5gslQDDg/img/frame-120.svg"
            />
            <div className="relative w-6 h-6 mr-[-45.00px]">
              <EyeOffIcon className="w-6 h-6 text-gray-400" />
            </div>
          </div>

          {/* CopyIcon details button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-[205px] left-3.5 flex items-center gap-1 p-0 h-auto text-[#a90808] hover:bg-transparent"
          >
            <CopyIcon className="w-5 h-5" />
            <span className="font-medium text-xs tracking-[-0.17px]">
              copy details
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
