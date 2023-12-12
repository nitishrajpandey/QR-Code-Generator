// import React from 'react'
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import WelcomeMassage from "./WelcomeMassage";
function QrcodeBox() {
  const value = useSelector((store) => store.Input);
  return (
    <div className=" mt-10 flex flex-col items-center justify-center">
      {value.length === 0 ? (
        <WelcomeMassage />
      ) : (
        <QRCode
          value={value}
          fgColor="#4CB8C4"
          bgColor="white"
          className="border border-[#DBEE] p-5 rounded-xl"
        />
      )}

      {/* <h2 className="mt-3 normal-text-size font-semibold">Hello</h2> */}

      <h3 className=" mt-5 xxs:mt-8 mb-2 opacity-25 text-slate-500 font-medium font-serif">
        @2023 Made by Nitish Raj
      </h3>
    </div>
  );
}

export default QrcodeBox;
