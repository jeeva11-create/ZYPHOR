import {
  AlertTriangle,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

import Reveal from "../../components/ui/Reveal";

const levels = [
  {
    range: "80–100%",
    title: "High Confidence",
    action: "Automatic Segregation",
    description:
      "The prediction is sufficiently reliable for automatic routing.",
    icon: CheckCircle2,
    status: "ACCEPT",
  },
  {
    range: "50–79%",
    title: "Medium Confidence",
    action: "Sensor Verification",
    description:
      "Additional sensor evidence is considered before making the decision.",
    icon: ShieldCheck,
    status: "VERIFY",
  },
  {
    range: "0–49%",
    title: "Low Confidence",
    action: "Recheck Required",
    description:
      "The system avoids blindly sorting uncertain or unfamiliar waste.",
    icon: AlertTriangle,
    status: "RECHECK",
  },
];

export default function AdaptiveAI() {
  return (
    <section
      id="adaptive-ai"
      className="py-24 md:py-28 px-4 sm:px-6"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="max-w-3xl mb-14">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
              Adaptive Intelligence
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              AI That Knows{" "}
              <span className="text-cyan-400">
                When It's Uncertain
              </span>
            </h2>

            <p className="text-gray-400 text-lg mt-5 leading-relaxed">
              Real-world waste does not always look like training
              data. Lighting, orientation, contamination and
              unfamiliar objects can reduce prediction reliability.
            </p>

            <p className="text-gray-400 text-lg mt-4 leading-relaxed">
              Zyphor uses confidence-aware decision making so
              uncertain predictions can trigger additional
              verification instead of causing automatic
              misclassification.
            </p>
          </div>

          {/* Confidence Decision Engine */}
          <div
            className="
              bg-white/[0.04]
              backdrop-blur-xl
              border border-white/10
              rounded-2xl
              p-6 md:p-8
              mb-8
            "
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="
                  w-11 h-11
                  rounded-xl
                  bg-cyan-400/10
                  border border-cyan-400/20
                  flex items-center justify-center
                "
              >
                <BrainCircuit
                  size={22}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Confidence Decision Engine
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Every AI prediction passes through a
                  confidence-aware decision layer.
                </p>
              </div>
            </div>

            {/* Decision Pipeline */}
            <div className="grid md:grid-cols-5 gap-3 items-center">

              {/* AI Detection */}
              <PipelineCard
                step="01"
                title="AI Detection"
                description="Identify waste"
              />

              <PipelineArrow />

              {/* Confidence */}
              <PipelineCard
                step="02"
                title="Confidence"
                description="Evaluate reliability"
              />

              <PipelineArrow />

              {/* Decision */}
              <PipelineCard
                step="03"
                title="Decision"
                description="Choose action"
              />
            </div>

            {/* Decision Logic */}
            <div
              className="
                mt-6
                p-4
                rounded-xl
                border border-cyan-400/10
                bg-cyan-400/[0.03]
                text-center
              "
            >
              <p className="text-sm text-gray-400">
                Predict
                <span className="text-cyan-400 mx-2">
                  →
                </span>

                Evaluate
                <span className="text-cyan-400 mx-2">
                  →
                </span>

                Verify when required
                <span className="text-cyan-400 mx-2">
                  →
                </span>

                Decide
              </p>
            </div>
          </div>

          {/* Confidence Levels */}
          <div className="grid lg:grid-cols-3 gap-5">

            {levels.map((level) => {
              const Icon = level.icon;

              return (
                <div
                  key={level.range}
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-white/[0.04]
                    backdrop-blur-xl
                    border border-white/10
                    rounded-2xl
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/30
                    hover:bg-white/[0.06]
                    hover:shadow-lg
                    hover:shadow-cyan-500/5
                  "
                >

                  {/* Icon + Status */}
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        w-11 h-11
                        rounded-xl
                        bg-cyan-400/10
                        border border-cyan-400/10
                        flex items-center justify-center
                      "
                    >
                      <Icon
                        size={22}
                        className="text-cyan-400"
                      />
                    </div>

                    <span
                      className="
                        px-3 py-1
                        rounded-full
                        bg-cyan-400/10
                        border border-cyan-400/20
                        text-cyan-300
                        text-[11px]
                        font-semibold
                        tracking-wider
                      "
                    >
                      {level.status}
                    </span>
                  </div>

                  {/* Confidence Range */}
                  <p className="text-3xl font-bold text-cyan-400 mt-6">
                    {level.range}
                  </p>

                  <h3 className="text-xl font-bold mt-2">
                    {level.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {level.description}
                  </p>

                  {/* Action */}
                  <div
                    className="
                      mt-6
                      pt-4
                      border-t border-white/10
                      flex items-center gap-2
                    "
                  >
                    <RefreshCcw
                      size={15}
                      className="text-gray-500"
                    />

                    <span className="text-sm text-gray-300">
                      {level.action}
                    </span>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Safety Message */}
          <div
            className="
              mt-8
              flex flex-col md:flex-row
              md:items-center
              gap-4
              p-5
              rounded-2xl
              border border-green-400/10
              bg-green-400/[0.03]
            "
          >
            <CheckCircle2
              className="text-green-400 shrink-0"
              size={22}
            />

            <div>
              <p className="font-semibold">
                Safety-first AI decision making
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Low-confidence predictions can be routed for
                additional verification instead of being blindly
                automated.
              </p>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}

/* Pipeline Card */

function PipelineCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        p-5
        rounded-xl
        bg-black/20
        border border-white/10
        text-center
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-cyan-400/[0.03]
      "
    >
      <p className="text-[10px] text-cyan-400 tracking-widest font-semibold">
        STEP {step}
      </p>

      <p className="font-semibold mt-2">
        {title}
      </p>

      <p className="text-xs text-gray-500 mt-1">
        {description}
      </p>
    </div>
  );
}

/* Pipeline Arrow */

function PipelineArrow() {
  return (
    <div className="hidden md:flex justify-center">
      <ArrowRight
        size={20}
        className="text-cyan-400/50"
      />
    </div>
  );
}