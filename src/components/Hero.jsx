import { Rocket, Leaf, Sprout } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-medium text-green-700 shadow-sm">
              <Sprout className="h-4 w-4" />
              Designed for Progressive Farmers
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Grow smarter with AI‑guided crop suggestions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Enter your land details and budget. We’ll recommend the best crops for your soil, terrain, and market—so you can plant with confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#advisor"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white shadow-lg shadow-green-600/30 transition hover:translate-y-[-1px] hover:bg-green-700"
              >
                <Rocket className="h-5 w-5" />
                Get crop suggestions
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-800 transition hover:bg-gray-50"
              >
                <Leaf className="h-5 w-5 text-green-600" />
                Explore features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-600" />
                Real‑time, on your device
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-600" />
                No signup required
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-green-100 bg-white p-6 shadow-xl">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-green-100 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-emerald-100 blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop"
                alt="Lush farmland"
                className="relative rounded-lg object-cover shadow-md"
              />
              <div className="relative mt-4 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 p-[1px]">
                <div className="rounded-md bg-white p-4">
                  <p className="text-sm text-gray-600">
                    “We switched crops based on the suggestions and improved margins in the first season.”
                  </p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">— R. Patel, Gujarat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
