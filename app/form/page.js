"use client";
import { postToResult } from "./actions.js";

export default function Page() {
  return (
    <>
      <div className=" w-full items-center h-[100vh] flex flex-col  justify-center  text-text-950 text-center bg-gradient-to-tl from-accent-100">
        <h1 className="md:text-6xl text-3xl m-10 text-primary-600">
          Enter the Link!
        </h1>
        <form
          action={postToResult}
          className="md:w-2/3 w-11/12 text-left p-9 flex flex-col justify-center align-middle items-center"
        >
          <label>Enter Amazon Link</label>
          <br />
          <input
            type="text"
            name="link"
            placeholder="link"
            className="w-full border-accent-100 bg-accent-50  rounded-xl border-solid border-2 p-2"
          />
          <button
            type="submit"
            className="bg-accent-500 text-white w-fit rounded-md p-2 mt-10 hover:bg-accent-600 hover:scale-105 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
