export default function Footer() {
  return (
    <footer class="bg-slate-900">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-slate-50 sm:text-center ">
          © 2024{" "}
          <a href="/" class="hover:underline">
            Review Radar
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-50 sm:mt-0">
          <li>
            <a href="/about" class="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="https://github.com/nidheesh-m-vakharia/review-radar/blob/main/LICENSE" class="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
