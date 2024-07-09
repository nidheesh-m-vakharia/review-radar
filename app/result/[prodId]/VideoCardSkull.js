export default function VideoCardSkull() {
  return (
    <>
      <div className=" mb-8 ml-4 mr-4  flex flex-col w-80 h-[20rem] bg-background-100 transition-all ease-in-out duration-100 group rounded-3xl ">
        <div className="aspect-w-16 animate-pulse aspect-h-8 m-4 overflow-hidden bg-background-200  rounded-xl transition-all duration-200"></div>
        <div className="inline-block mx-4 max-w-80">
          <div className="w-full h-8 rounded-xl animate-pulse bg-background-200"></div>
          <div className="w-full h-4 rounded-xl animate-pulse bg-background-200 mt-2"></div>
        </div>
      </div>
    </>
  );
}
