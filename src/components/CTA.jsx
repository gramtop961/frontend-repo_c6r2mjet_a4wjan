import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-green-100 bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-900">Start planning your next season today</h3>
              <p className="mt-2 text-gray-600">
                Use the advisor to compare crop options by cost and suitability. It’s free and takes less than a minute.
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                Private and secure — your inputs stay on this device.
              </div>
            </div>
            <div className="flex justify-start md:justify-end">
              <a
                href="#advisor"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white shadow-lg shadow-green-600/30 transition hover:translate-y-[-1px] hover:bg-green-700"
              >
                Try the advisor
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
