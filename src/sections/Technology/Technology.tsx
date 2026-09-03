import {
  BrainCircuit,
  Camera,
  Cpu,
  Database,
  Eye,
  Gauge,
  Radio,
  Server,
  ArrowDown,
  Workflow,
} from "lucide-react";

import Reveal from "../../components/ui/Reveal";

const technologies = [
  {
    icon: BrainCircuit,
    name: "YOLO",
    category: "AI Vision",
    description:
      "Real-time object detection for identifying different waste categories.",
  },
  {
    icon: Eye,
    name: "OpenCV",
    category: "Computer Vision",
    description:
      "Image preprocessing and vision pipeline support for incoming waste.",
  },
  {
    icon: Cpu,
    name: "ESP32",
    category: "Edge Controller",
    description:
      "Coordinates sensors, actuators and local device communication.",
  },
  {
    icon: Radio,
    name: "Multi-Sensors",
    category: "Verification",
    description:
      "Additional sensor signals provide supporting evidence for AI decisions.",
  },
  {
    icon: Gauge,
    name: "Load Cell",
    category: "Measurement",
    description:
      "Measures waste weight for quantity and operational analytics.",
  },
  {
    icon: Camera,
    name: "Camera",
    category: "Input",
    description:
      "Captures waste images for the computer vision pipeline.",
  },
  {
    icon: Server,
    name: "IoT Backend",
    category: "Connectivity",
    description:
      "Transfers device measurements and system events for monitoring.",
  },
  {
    icon: Database,
    name: "Cloud Database",
    category: "Data",
    description:
      "Stores detection history, measurements and operational records.",
  },
];

const architecture = [
  {
    title: "Waste Input",
    description: "Camera captures the incoming waste item.",
    icon: Camera,
  },
  {
    title: "AI Vision",
    description: "YOLO + OpenCV identify and classify the waste.",
    icon: BrainCircuit,
  },
  {
    title: "Verification",
    description: "Sensor signals validate the AI prediction.",
    icon: Radio,
  },
  {
    title: "Decision Engine",
    description: "Confidence determines the next action.",
    icon: Cpu,
  },
  {
    title: "Automatic Segregation",
    description: "ESP32 controls the sorting mechanism.",
    icon: Workflow,
  },
  {
    title: "Measurement & IoT",
    description: "Weight, capacity and events are monitored.",
    icon: Gauge,
  },
  {
    title: "Intelligence Layer",
    description: "Data is stored for analytics and monitoring.",
    icon: Database,
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="py-24 md:py-28 px-4 sm:px-6"
    >
      <Reveal>

        <div className="max-w-7xl mx-auto">

          {/* Header */}

          <div className="max-w-3xl mb-14">

            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
              Technology Stack
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Intelligence Meets{" "}
              <span className="text-cyan-400">
                Hardware
              </span>
            </h2>

            <p className="text-gray-400 mt-5 text-lg">
              Zyphor combines computer vision, edge computing,
              multi-sensor verification, automation and IoT
              monitoring into one integrated system.
            </p>

          </div>

          {/* Technology Cards */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <div
                  key={technology.name}
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-white/[0.04]
                    backdrop-blur-xl
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/[0.03]
                    hover:shadow-lg
                    hover:shadow-cyan-500/5
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-cyan-400/10
                      border
                      border-cyan-400/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      className="text-cyan-400 group-hover:scale-110 transition-transform duration-300"
                      size={24}
                    />
                  </div>

                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-6">
                    {technology.category}
                  </p>

                  <h3 className="text-xl font-bold mt-2">
                    {technology.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {technology.description}
                  </p>

                </div>
              );
            })}

          </div>

          {/* Architecture */}

          <div className="mt-16">

            <div className="flex items-center gap-3 mb-8">

              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <Workflow
                  size={20}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Zyphor System Architecture
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  End-to-end AI, hardware and IoT processing pipeline
                </p>
              </div>

            </div>

            <div className="relative">

              {/* Desktop connection line */}

              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

              <div className="grid lg:grid-cols-7 gap-4">

                {architecture.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <div
                      key={stage.title}
                      className="relative"
                    >

                      <div
                        className="
                          group
                          h-full
                          bg-white/[0.04]
                          backdrop-blur-xl
                          border
                          border-white/10
                          rounded-2xl
                          p-5
                          text-center
                          transition-all
                          duration-300
                          hover:border-cyan-400/40
                          hover:bg-cyan-400/[0.04]
                        "
                      >

                        <div className="mx-auto w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">

                          <Icon
                            size={21}
                            className="text-cyan-400 group-hover:scale-110 transition-transform"
                          />

                        </div>

                        <p className="text-[10px] tracking-widest uppercase text-gray-500 mt-4">
                          Stage {index + 1}
                        </p>

                        <h4 className="font-semibold mt-2 text-sm">
                          {stage.title}
                        </h4>

                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                          {stage.description}
                        </p>

                      </div>

                      {/* Mobile connector */}

                      {index < architecture.length - 1 && (
                        <div className="lg:hidden flex justify-center py-2">
                          <ArrowDown
                            size={18}
                            className="text-cyan-400/50"
                          />
                        </div>
                      )}

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </Reveal>
    </section>
  );
}