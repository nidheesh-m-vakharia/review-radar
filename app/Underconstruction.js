import Image from "next/image";
export default function Underconstruction() {
  return (
    <main class="dark grid h-[100vh] place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <Image
          src={"https://media1.tenor.com/m/qYpzX7uvYFcAAAAC/pixel-popcat.gif"}
          width={500}
          height={500}
        />
        <h1 class="mt-4 text-3xl tracking-tight text-text sm:text-5xl">
          Work In Progress...
        </h1>
        <p class="mt-6 text-base leading-7 text-accent">
          We will soon release a finished product
        </p>
      </div>
    </main>
  );
}
