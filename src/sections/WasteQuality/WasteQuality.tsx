import Reveal from "../../components/ui/Reveal";

export default function WasteQuality() {
  return (
    <section
      id="quality"
      className="py-24 md:py-28 px-4 sm:px-6"
    >
      <Reveal>

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-14">

            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
              Waste Quality Intelligence
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Beyond Segregation.
              <span className="text-cyan-400">
                {" "}Measure Quality.
              </span>
            </h2>

            <p className="text-gray-400 mt-5 text-lg">
              Zyphor continuously evaluates segregation quality,
              contamination levels and recyclable recovery potential,
              enabling data-driven waste management decisions.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-sm text-gray-500">
                Segregation Quality Score
              </p>

              <h3 className="text-5xl font-bold text-green-400 mt-3">
                92%
              </h3>

              <p className="text-sm text-gray-400 mt-3">
                High segregation accuracy achieved.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-sm text-gray-500">
                Contamination Level
              </p>

              <h3 className="text-5xl font-bold text-orange-400 mt-3">
                8%
              </h3>

              <p className="text-sm text-gray-400 mt-3">
                Mixed waste detected across monitored bins.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-sm text-gray-500">
                Recovery Potential
              </p>

              <h3 className="text-5xl font-bold text-cyan-400 mt-3">
                HIGH
              </h3>

              <p className="text-sm text-gray-400 mt-3">
                Recyclable extraction opportunity remains strong.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-8">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

              <h3 className="font-semibold text-xl">
                Waste Process Summary
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                  <span>Total Waste Processed</span>
                  <span className="font-semibold">
                    1,248 kg
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Correctly Segregated</span>
                  <span className="font-semibold text-green-400">
                    1,154 kg
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Requires Recheck</span>
                  <span className="font-semibold text-yellow-400">
                    94 kg
                  </span>
                </div>

              </div>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

              <h3 className="font-semibold text-xl">
                Quality Flow
              </h3>

              <div className="mt-6 text-gray-400 space-y-3">

                <p>
                  Better Source Segregation
                </p>

                <p>
                  ↓
                </p>

                <p>
                  Better Waste Quality
                </p>

                <p>
                  ↓
                </p>

                <p>
                  Smarter Management
                </p>

                <p>
                  ↓
                </p>

                <p className="text-cyan-400 font-semibold">
                  Sustainable Waste Ecosystem
                </p>

              </div>

            </div>

          </div>

        </div>

      </Reveal>
    </section>
  );
}