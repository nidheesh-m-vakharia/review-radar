import Image from "next/image";

export default function VideoCard({ productVideo }) {
  return (
    <>
      <a
        href={`https://www.youtube.com/watch?v=${productVideo.videoId}`}
        className=" mb-8 md:mx-4 mx-2 flex flex-col md:w-80 md:min-h-[20rem] w-48 h-52 bg-background-200 transition-all ease-in-out duration-100 group rounded-3xl hover:bg-accent-200 hover:rounded-2xl hover:scale-105"
        target="_blank"
      >
        <div className="aspect-w-16 aspect-h-8 md:m-4 m-2 overflow-hidden  rounded-xl group-hover:rounded-lg transition-all duration-200">
          <Image
            src={productVideo.thumbnail}
            alt={productVideo.title}
            className="object-cover object-center w-full  h-full absolute"
            height={productVideo.height}
            width={productVideo.width}
          />
        </div>
        <div className="inline-block md:m-4 m-2 max-w-80">
          <h1 className="text-ellipsis text-text-950 md:text-xl text-base truncate text-pretty line-clamp-2">
            {productVideo.title}
          </h1>
          <a
            target="_blank"
            className=" text-secondary-700 font-light text-sm md:mt-2 mt-1 line-clamp-1 p-1 truncate rounded-md  hover:bg-accent-100 duration-200 transition-all"
            href={
              productVideo.channelId
                ? `https://www.youtube.com/channel/${productVideo.channelId}`
                : "www.youtube.com"
            }
          >
            {productVideo.channelTitle}
          </a>
        </div>
      </a>
    </>
  );
}
