"use client";
import { getProductName } from "./actions.js";
import { useState, useEffect } from "react";

export default function Page({ params }) {
  const [productName, setProductName] = useState("");
  useEffect(() => {
    getProductName(params.prodId).then((name) => {
      setProductName(name);
    });
  }, []);

  return (
    <div className="flex flex-col  justify-center items-center h-[100vh]">
      <div className="text-white bg-black text-center w-[18em] p-10 rounded-xl">
        <h1 className="text-3xl font-bold mb-10">Result</h1>
        <p className="mb-4">
          Product ID:
          <br /> {params.prodId}
        </p>
        <p>
          Name:
          <br />
          {productName ? productName : "Loading..."}
        </p>
      </div>
    </div>
  );
}
