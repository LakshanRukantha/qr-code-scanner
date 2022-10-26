import React from "react";
import QRCode from "qrcode";

const Generator = () => {
  const GenerateQRCode = () => {
    QRCode.toDataURL("Hello World!")
      .then((url) => {
        console.log(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <button onClick={GenerateQRCode}>generate</button>
    </>
  );
};

export default Generator;
