import React from 'react'
import { useState } from "react";

import BarcodeScanner from "react-qr-barcode-scanner";
export default function BarCode() {
    const [data, setData] = useState("Not Found");
  return (
    <div>
      <>
      <BarcodeScanner
        width={500}
        height={500}
        
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
        facingMode="environment"
      />
      <p>{data} hello data from scan</p>
    </>
    </div>
  )
}
