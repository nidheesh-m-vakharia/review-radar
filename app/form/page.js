"use client";
import { postToResult } from "./actions.js";

export default function Page() {
  return (
    <>
      <div className=" dark w-full items-center h-[100vh] flex flex-col  justify-center bg-background text-text text-center">
        <h1 className="text-6xl m-10">Enter the Link!</h1>
        <form action={postToResult}>
          <div className="w-[30em] text-left p-9">
            <label>Enter Amazon Link</label>
            <br />
            <input
              type="text"
              name="link"
              placeholder="link"
              className="w-full border-accent bg-gray-950  rounded-xl m-3 border-solid border-2 p-2"
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
    </>
  );
}
