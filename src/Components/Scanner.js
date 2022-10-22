import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import "./Scanner.css";

const Scanner = (props) => {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        className="scanner-window"
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      <p className="results">
        <a href={data}>{data}</a>
      </p>
    </>
  );
};

export default Scanner;
