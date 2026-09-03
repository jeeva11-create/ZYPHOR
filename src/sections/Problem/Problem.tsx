import {
  AlertTriangle,
  Brain,
  Recycle,
  ShieldAlert,
  Trash2,
  Activity,
} from "lucide-react";
import GlassCard from "../../components/ui/GlassCard";
import Reveal from "../../components/ui/Reveal";

const problems = [
  {
    icon: Trash2,
    title: "Manual Sorting",
    description:
      "Manual waste segregation is slow, inconsistent and difficult to scale in high-volume environments.",
  },
  {
    icon: Recycle,
    title: "Wrong Segregation",
    description:
      "Incorrect disposal contaminates recyclable and biodegradable waste streams.",
  },
  {
    icon: ShieldAlert,
    title: "Hazard Exposure",
    description:
      "Direct handling of unknown or contaminated waste increases health and safety risks.",
  },
  {
    icon: Brain,
    title: "Real-World AI Gap",
    description:
      "AI predictions can become unreliable when waste appears under unusual lighting, orientation or conditions.",
  },
  {
    icon: AlertTriangle,
    title: "Unknown Waste",
    description:
      "A practical system must know when it is uncertain instead of blindly classifying unfamiliar objects.",
  },
  {
    icon: Activity,
    title: "Poor Monitoring",
    description:
      "Without real-time measurements, bin capacity, waste quantity and segregation quality remain difficult to track.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-28 px-4 sm:px-6">
    <Reveal>
      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl mb-14">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            The Challenge
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Why Waste Segregation
            <span className="text-cyan-400"> Needs Intelligence</span>
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Waste segregation is not simply a disposal problem.
            It is a classification, verification, automation and
            monitoring problem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <GlassCard key={problem.title}>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Icon className="text-cyan-400" size={24} />
                </div>

                <h3 className="text-xl font-semibold mt-5">
                  {problem.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  {problem.description}
                </p>
              </GlassCard>
            );
          })}

        </div>
        
      </div>
      </Reveal>
    </section>
  );
}