import Underconstruction from "./Underconstruction";
import { IoLink, IoPersonSharp, IoBarChart } from "react-icons/io5";
import Image from "next/image";
export default function Home() {
  const features = [
    {
      name: "Link Inputs.",
      description:
        "Paste your Amazon product link into the provided field for a quick start.",
      icon: IoLink,
    },
    {
      name: "Top Recommendations.",
      description:
        "Display the top-rated review videos along with their titles and links, ensuring you get the most insightful and helpful content.",
      icon: IoBarChart,
    },
    {
      name: "User-Friendly Interface.",
      description:
        "Enjoy a clean and intuitive design for easy navigation, making your review discovery process smooth and enjoyable.",
      icon: IoPersonSharp,
    },
  ];
  return (
    <>
      <section className="h-[100vh] relative isolate px-6 md:pt-14 pt-24 lg:px-8   from-accent-200  bg-gradient-to-b">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-base leading-6 text-text-900 ring-1 ring-background-300 hover:ring-background-500">
              Checkout the GitHub.{" "}
              <a
                href="https://github.com/nidheesh-m-vakharia/review-radar"
                className="font-semibold text-secondary-600"
              >
                <span className="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight text-text-900 sm:text-6xl">
              Review Radar
            </h1>
            <p className="mt-6 text-lg leading-8 text-background-400">
              Your shortcut to the best Amazon product reviews on YouTube—shop
              smarter, create better!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary-400 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-base  leading-6 text-secondary-600">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </section>
      <section className="overflow-hidden bg-background-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-600">
                  Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-text-950 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-background-600 text-pretty">
                  Unlock the power of informed shopping with Review Radar.
                  Effortlessly find the best review videos for your Amazon
                  products and make confident decisions.{" "}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-background-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-background-950">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-accent-700"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="https://utfs.io/f/6a6ae7f0-9097-423f-989d-26f7f7f79170-4h1ci8.webp"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              placeholder="empty"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
