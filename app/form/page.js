
"use client";
import { postToResult } from "./actions.js";

export default function Page() {
  return (
    <>
      <div className=" w-full items-center h-[100vh] flex flex-col  justify-center bg-white text-black text-center">
        <h1 className="text-6xl font-black m-10">Enter the Link!</h1>
        <form action={postToResult}>
          <div className="w-[30em] text-left bg-gray-100 p-9">
            <label>Enter Amazon Link</label>
            <br />
            <input
              type="text"
              name="link"
              placeholder="link"
              className="w-full border-sky-200 border-solid border-2 p-2"
            />
            <label className={`text-sm italic text-red-500 invisible `}>
              Not valid Input
            </label>
          </div>
          <button type="submit" className="bg-black text-white p-2 mt-10 ">
            Submit
          </button>
        </form>
      </div>
  );
}
