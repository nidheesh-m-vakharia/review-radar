"use client";
import { postToResult } from "./actions.js";

export default function Page() {
  return (
    <>
      <div className=" w-full items-center h-[100vh] flex flex-col  justify-center  text-text-950 text-center">
        <h1 className="text-6xl m-10 text-primary-600">Enter the Link!</h1>
        <form action={postToResult}>
          <div className="w-[30em] text-left p-9">
            <label>Enter Amazon Link</label>
            <br />
            <input
              type="text"
              name="link"
              placeholder="link"
              className="w-full border-accent-100 bg-accent-50  rounded-xl m-1 border-solid border-2 p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-accent-500 text-white rounded-md p-2 mt-3 hover:bg-accent-600 hover:scale-105 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
