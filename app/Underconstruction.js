import Image from "next/image";
export default function Underconstruction() {
  return (
    <main class=" grid h-[100vh] place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <Image
          src={"https://media1.tenor.com/m/qYpzX7uvYFcAAAAC/pixel-popcat.gif"}
          width={500}
          height={500}
          alt="Under Construction"
        />
        <h1 class="mt-4 text-3xl tracking-tight text-text-950 sm:text-5xl">
          Work In Progress...
        </h1>
        <p class="mt-6 text-base leading-7 text-secondary-700">
          We will soon release a finished product
        </p>
      </div>
    </main>
  );
}
