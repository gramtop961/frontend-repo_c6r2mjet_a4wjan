import { useMemo, useState } from "react";
import { Calculator, CheckCircle2, Info } from "lucide-react";

const crops = [
  // Basic, safe staples
  {
    name: "Wheat",
    soil: ["loamy", "clay"],
    terrain: ["flat"],
    irrigation: "optional",
    costPerAcre: 220,
    seasons: ["rabi"],
    notes: "Reliable staple; good fit for loamy/clay in rabi season.",
  },
  {
    name: "Rice",
    soil: ["clay", "loamy"],
    terrain: ["flat"],
    irrigation: "required",
    costPerAcre: 350,
    seasons: ["kharif"],
    notes: "Needs standing water and reliable irrigation.",
  },
  {
    name: "Maize",
    soil: ["sandy", "loamy"],
    terrain: ["flat", "gentle"],
    irrigation: "optional",
    costPerAcre: 180,
    seasons: ["kharif", "rabi"],
    notes: "Adaptable and cost‑effective with moderate inputs.",
  },
  // Vegetables with higher value
  {
    name: "Tomato",
    soil: ["loamy", "sandy"],
    terrain: ["flat", "gentle"],
    irrigation: "required",
    costPerAcre: 520,
    seasons: ["rabi", "zaid"],
    notes: "High value; requires staking and regular irrigation.",
  },
  {
    name: "Potato",
    soil: ["loamy", "sandy"],
    terrain: ["flat"],
    irrigation: "required",
    costPerAcre: 600,
    seasons: ["rabi"],
    notes: "Input intensive; strong market demand in many regions.",
  },
  {
    name: "Onion",
    soil: ["loamy", "sandy"],
    terrain: ["flat", "gentle"],
    irrigation: "optional",
    costPerAcre: 300,
    seasons: ["rabi", "kharif"],
    notes: "Flexible crop; watch for price cycles.",
  },
  {
    name: "Spinach",
    soil: ["loamy"],
    terrain: ["flat"],
    irrigation: "optional",
    costPerAcre: 150,
    seasons: ["rabi", "zaid"],
    notes: "Quick cycle leafy green; good for small plots.",
  },
];

function rankMatches({ area, soil, terrain, irrigation, season, budget }) {
  return crops
    .map((c) => {
      let score = 0;
      if (c.soil.includes(soil)) score += 3;
      if (c.terrain.includes(terrain)) score += 2;
      if (c.seasons.includes(season)) score += 2;
      if (irrigation === "yes" && c.irrigation !== "forbidden") score += 1;
      if (irrigation === "no" && c.irrigation !== "required") score += 1;
      // Budget fit (per acre)
      const affordability = budget >= c.costPerAcre ? 2 : budget >= c.costPerAcre * 0.6 ? 1 : 0;
      score += affordability;
      // Preference for small area -> leafy/quick crops
      if (area && area < 2 && ["Spinach", "Onion"].includes(c.name)) score += 1;
      return { ...c, score };
    })
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

export default function CropAdvisor() {
  const [area, setArea] = useState(1);
  const [soil, setSoil] = useState("loamy");
  const [terrain, setTerrain] = useState("flat");
  const [irrigation, setIrrigation] = useState("yes");
  const [season, setSeason] = useState("rabi");
  const [budget, setBudget] = useState(300);

  const suggestions = useMemo(
    () => rankMatches({ area: Number(area), soil, terrain, irrigation, season, budget: Number(budget) }),
    [area, soil, terrain, irrigation, season, budget]
  );

  const totalBudget = (Number(budget) * Number(area)) || 0;

  return (
    <section id="advisor" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-emerald-100 bg-white shadow-sm">
            <div className="border-b border-emerald-100 p-6">
              <div className="flex items-center gap-2 text-emerald-700">
                <Calculator className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Crop suggestion advisor</h2>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Provide your land details to get tailored crop options with estimated input costs per acre.
              </p>
            </div>
            <div className="grid gap-6 p-6 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <form className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Land area (acres)</label>
                    <input
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Soil type</label>
                    <select
                      value={soil}
                      onChange={(e) => setSoil(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="sandy">Sandy</option>
                      <option value="loamy">Loamy</option>
                      <option value="clay">Clay</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Terrain</label>
                    <select
                      value={terrain}
                      onChange={(e) => setTerrain(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="flat">Flat</option>
                      <option value="gentle">Gentle slope</option>
                      <option value="hilly">Hilly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Irrigation</label>
                    <div className="mt-1 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setIrrigation("yes")}
                        className={`rounded-md px-3 py-2 text-sm font-medium shadow-sm border ${
                          irrigation === "yes"
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white text-gray-700 border-gray-300"
                        }`}
                      >
                        Available
                      </button>
                      <button
                        type="button"
                        onClick={() => setIrrigation("no")}
                        className={`rounded-md px-3 py-2 text-sm font-medium shadow-sm border ${
                          irrigation === "no"
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white text-gray-700 border-gray-300"
                        }`}
                      >
                        Rain‑fed
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Season</label>
                    <select
                      value={season}
                      onChange={(e) => setSeason(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="kharif">Kharif (Monsoon)</option>
                      <option value="rabi">Rabi (Winter)</option>
                      <option value="zaid">Zaid (Summer)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Budget per acre (USD)</label>
                    <input
                      type="number"
                      min="50"
                      step="10"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                    <p className="mt-1 text-xs text-gray-500">Estimated total budget: ${totalBudget.toFixed(0)}</p>
                  </div>
                </form>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-sm text-emerald-900">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4" />
                    <p>
                      Results are guidance only. Consult local advisories for cultivar selection and planting dates.
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {suggestions.map((s) => (
                    <div key={s.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{s.name}</h3>
                          <p className="mt-1 text-sm text-gray-600">{s.notes}</p>
                        </div>
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      </div>
                      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <dt className="text-gray-500">Fits soil</dt>
                          <dd className="font-medium text-gray-900">{s.soil.join(", ")}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Terrain</dt>
                          <dd className="font-medium text-gray-900">{s.terrain.join(", ")}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Season</dt>
                          <dd className="font-medium text-gray-900">{s.seasons.join(", ")}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Est. input/acre</dt>
                          <dd className="font-medium text-gray-900">${s.costPerAcre}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
                {suggestions.length === 0 && (
                  <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 text-center text-gray-600">
                    No matches yet. Try adjusting budget or season.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
