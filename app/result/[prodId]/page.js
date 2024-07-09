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
      <div className="text-text-950 text-center w-[18em] p-10 rounded-xl">
        <h1 className="text-3xl font-black text-primary  mb-10">Result</h1>
        <p className="mb-4">
          Product ID:
          <br /> {params.prodId}
        </p>
        <p>
          Name:
          <br />
          {productName}
        </p>
        <p>
          Video:
          <br />
        </p>
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
