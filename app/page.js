import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-50 min-h-screen">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 h-[80vh] px-6 md:px-16 py-10 gap-6">
        {/* Text Content */}
        <div className="flex flex-col gap-6 items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 leading-tight">
            The Best URL Shortener in Pakistan
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            We provide a simple, secure, and efficient way to shorten URLs. Perfect for professionals and businesses alike, UrlShortener is here to make sharing easy.
          </p>
          <Link href="/shorten">
            <button className="mt-4 bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition duration-200">
              Get Started
            </button>
          </Link>
        </div>

        {/* Image Content */}
        <div className="flex items-center justify-center relative">
          <Image
            alt="A vector illustration representing URL shortening"
            className="rounded-lg shadow-lg"
            src={"/vector.avif"}
            width={500}
            height={500}
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-purple-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Fast and Reliable</h3>
            <p className="text-gray-600">
              Our service ensures that your links are always live and accessible. Speed and reliability are our top priorities.
            </p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Customizable Links</h3>
            <p className="text-gray-600">
              Customize your shortened URLs for better branding and easier sharing with your audience.
            </p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Secure and Private</h3>
            <p className="text-gray-600">
              We prioritize security and privacy to ensure that your links are protected and safe to share.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

