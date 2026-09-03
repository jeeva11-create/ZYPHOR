import {
  Activity,
  BarChart3,
  CheckCircle2,
  Leaf,
  Recycle,
  ShieldCheck,
  TrendingDown,
  Truck,
} from "lucide-react";

import Reveal from "../../components/ui/Reveal";

const impactMetrics = [
  {
    value: "94.8%",
    label: "Segregation Accuracy",
    description:
      "Improved waste classification through AI-assisted segregation.",
    icon: CheckCircle2,
  },
  {
    value: "35%",
    label: "Less Contamination",
    description:
      "Better source segregation helps reduce mixed and contaminated waste.",
    icon: TrendingDown,
  },
  {
    value: "24/7",
    label: "Smart Monitoring",
    description:
      "Continuous monitoring of bins, sensors and system health.",
    icon: Activity,
  },
];

const benefits = [
  {
    title: "Cleaner Waste Streams",
    description:
      "Improved segregation increases the quality of recyclable and organic waste streams.",
    icon: Recycle,
  },
  {
    title: "Safer Operations",
    description:
      "Automated handling can reduce unnecessary human exposure to potentially hazardous waste.",
    icon: ShieldCheck,
  },
  {
    title: "Smarter Collection",
    description:
      "Bin-level monitoring can support better collection planning and reduce overflow events.",
    icon: Truck,
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Waste measurements and classification data provide actionable operational insights.",
    icon: BarChart3,
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="py-24 md:py-28 px-4 sm:px-6"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="max-w-3xl mb-14">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
              System Impact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Turning Smart Segregation Into{" "}
              <span className="text-cyan-400">
                Real Impact
              </span>
            </h2>

            <p className="text-gray-400 text-lg mt-5 leading-relaxed">
              Zyphor combines AI classification, sensor verification,
              automated segregation and IoT monitoring to create a
              smarter and more measurable waste management workflow.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-3 gap-5">

            {impactMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/30
                    hover:bg-white/[0.06]
                    hover:shadow-lg
                    hover:shadow-cyan-500/5
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-28
                      w-28
                      rounded-full
                      bg-cyan-400/10
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-cyan-400/10
                        border border-cyan-400/10
                        flex items-center justify-center
                      "
                    >
                      <Icon
                        size={24}
                        className="text-cyan-400"
                      />
                    </div>

                    <p className="text-5xl font-bold mt-7">
                      {metric.value}
                    </p>

                    <h3 className="text-lg font-semibold mt-2">
                      {metric.label}
                    </h3>

                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                      {metric.description}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

          {/* Benefits */}
          <div className="mt-10">

            <div className="flex items-center gap-3 mb-6">
              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-green-400/10
                  border border-green-400/10
                  flex items-center justify-center
                "
              >
                <Leaf
                  size={20}
                  className="text-green-400"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Why Zyphor Matters
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  From waste identification to measurable operational value.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="
                      group
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-green-400/30
                      hover:bg-green-400/[0.03]
                    "
                  >
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-green-400/10
                        flex items-center justify-center
                      "
                    >
                      <Icon
                        size={21}
                        className="
                          text-green-400
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </div>

                    <h4 className="font-semibold text-lg mt-5">
                      {benefit.title}
                    </h4>

                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Impact Pipeline */}
          <div
            className="
              mt-10
              rounded-2xl
              border border-cyan-400/10
              bg-cyan-400/[0.03]
              p-6
              md:p-8
            "
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">

              <div className="lg:w-1/3">
                <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
                  Impact Pipeline
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  From Detection to Sustainability
                </h3>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  Every stage of the system contributes to better
                  waste handling, better monitoring and smarter
                  resource recovery.
                </p>
              </div>

              <div className="flex-1 grid sm:grid-cols-4 gap-3">

                <ImpactStep
                  number="01"
                  title="Detect"
                  description="Identify waste"
                />

                <ImpactStep
                  number="02"
                  title="Segregate"
                  description="Route correctly"
                />

                <ImpactStep
                  number="03"
                  title="Measure"
                  description="Track quality"
                />

                <ImpactStep
                  number="04"
                  title="Improve"
                  description="Optimize operations"
                />

              </div>

            </div>
          </div>

          {/* Demo Data Notice */}
          <div
            className="
              mt-6
              text-center
              text-xs
              text-gray-600
            "
          >
            Impact metrics shown in this prototype are representative
            demo values for system visualization.
          </div>

        </div>
      </Reveal>
    </section>
  );
}


/* Impact Step */

function ImpactStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-xl
        border border-white/10
        bg-black/20
        p-5
        text-center
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-cyan-400/[0.03]
      "
    >
      <p className="text-[10px] text-cyan-400 font-semibold tracking-widest">
        {number}
      </p>

      <h4 className="font-semibold mt-2">
        {title}
      </h4>

      <p className="text-xs text-gray-500 mt-1">
        {description}
      </p>
    </div>
  );
}