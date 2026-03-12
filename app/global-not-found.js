// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <section class="flex items-center justify-center text-center px-4 min-h-dvh">
          <div>
            <h1 class="text-5xl md:text-7xl font-extrabold text-gray-800 mb-4">
              OOPS!
            </h1>
            <h2 class="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              Page not found.
            </h2>
            <p class="text-gray-500 mb-8">
              Sorry, we couldn’t find the page you were looking for. We suggest
              that you return to home page.
            </p>
            <a
              href="/"
              class="inline-block bg-black text-white md:px-35 px-10 py-3 md:py-5 md:text-xl rounded hover:bg-gray-800 transition "
            >
              GO BACK
            </a>
          </div>
        </section>
      </body>
    </html>
  );
}
