import { Leaf, Map, Droplets, DollarSign, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "Soil‑aware recommendations",
    desc: "Match crops to sandy, loamy, or clay soils to boost yield and reduce risk.",
  },
  {
    icon: Map,
    title: "Terrain & climate context",
    desc: "Flat or hilly terrain? We factor feasibility and effort into each suggestion.",
  },
  {
    icon: Droplets,
    title: "Irrigation sensitivity",
    desc: "Get options optimized for rain‑fed or irrigated plots and seasonal timing.",
  },
  {
    icon: DollarSign,
    title: "Budget fit",
    desc: "See estimated input costs per acre so you can plan within your means.",
  },
  {
    icon: ShieldCheck,
    title: "Risk balanced",
    desc: "Blend staples and high‑value vegetables to diversify revenue streams.",
  },
  {
    icon: Sparkles,
    title: "Actionable outputs",
    desc: "Clear next steps with seed rate, spacing, and simple agronomy tips.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for better decisions</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to choose the right crop mix for your land, season, and market.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-700">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
