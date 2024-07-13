"use client";
import { getProductName, getProductVideo } from "./actions.js";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard.js";
import VideoCardSkull from "./VideoCardSkull.js";

const { v4: uuidv4 } = require("uuid");
export default function Page({ params }) {
  const [productName, setProductName] = useState("");
  const [productVideo, setProductVideo] = useState(null);
  useEffect(() => {
    getProductName(params.prodId).then((name) => {
      setProductName(name);
    });
    getProductVideo(params.prodId).then((video) => {
      setProductVideo(video);
    });
  }, [params.prodId]);

  return (
    <div className="  flex flex-col    justify-center items-center min-h-[100vh]">
      <div className=" flex flex-col text-text-950 text-center  mt-36 rounded-xl border-background-400 border-solid border-2 lg:w-2/3 w-3/4 mb-10 items-center justify-center">

        <h1 className="lg:text-3xl  w-fit text-2xl font-black text-primary  mb-10">
          Result
        </h1>
        <h2 className="md:text-2xl text-xl text-text-800 mb-10 w-2/3">
          {productName ? (
            productName
          ) : (
            <div className="animate-pulse">Loading...</div>
          )}
        </h2>
      </div>
      <div class="flex flex-row w-[100vw] justify-center flex-wrap">
        {!productVideo
          ? [...Array(10)].map((e, i) => <VideoCardSkull key={uuidv4()} />)
          : productVideo.map((video) => {
              return <VideoCard key={video.videoId} productVideo={video} />;
            })}
      </div>
    </div>
  );
}
