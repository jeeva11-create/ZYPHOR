import { useState } from "react";
import {
  Camera,
  Radio,
  Brain,
  Settings,
  Scale,
} from "lucide-react";
import Reveal from "../../components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "DETECT",
    icon: Camera,
    description:
      "The camera captures the incoming waste and the vision system prepares the image for AI analysis.",
    technology: "Camera + LED + OpenCV + YOLO",
  },
  {
    number: "02",
    title: "VERIFY",
    icon: Radio,
    description:
      "Sensor information is used alongside the visual prediction to provide additional evidence.",
    technology: "IR Sensor + Multi-Sensor Verification",
  },
  {
    number: "03",
    title: "DECIDE",
    icon: Brain,
    description:
      "The confidence-aware decision engine determines whether the prediction is reliable enough for automatic sorting.",
    technology: "Confidence-Based Decision Engine",
  },
  {
    number: "04",
    title: "SEGREGATE",
    icon: Settings,
    description:
      "The controller activates the servo and mechanical flap to route the waste into the appropriate bin.",
    technology: "ESP32 + Servo + Mechanical Flap",
  },
  {
    number: "05",
    title: "MEASURE",
    icon: Scale,
    description:
      "The system records waste weight, bin fill level, segregation quality and collection status.",
    technology: "Load Cell + Ultrasonic + IoT",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  const current = steps[active];
  const Icon = current.icon;

  return (
    <section id="works" className="py-28 px-6">
    <Reveal>
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            System Architecture
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            How <span className="text-cyan-400">Zyphor</span> Works
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Every waste item passes through a controlled
            intelligence pipeline before reaching a smart bin.
          </p>
        </div>

        {/* Process Flow */}

        <div className="mt-16 flex flex-wrap justify-center gap-3">

          {steps.map((step, index) => (
            <button
              key={step.title}
              onClick={() => setActive(index)}
              className={`
                px-5 py-3
                rounded-xl
                border
                transition
                ${
                  active === index
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                    : "border-white/10 text-gray-400 hover:border-white/30"
                }
              `}
            >
              {step.title}
            </button>
          ))}

        </div>

        {/* Main Step */}

        <div className="mt-10 grid lg:grid-cols-2 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">

            <div className="flex items-center justify-between">

              <span className="text-6xl font-bold text-white/10">
                {current.number}
              </span>

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
                <Icon className="text-cyan-400" size={32} />
              </div>

            </div>

            <h3 className="text-3xl font-bold mt-8">
              {current.title}
            </h3>

            <p className="text-gray-400 text-lg mt-5 leading-relaxed">
              {current.description}
            </p>

            <div className="mt-8 p-4 rounded-xl bg-black/30 border border-white/10">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Technology
              </p>

              <p className="mt-2 text-cyan-300">
                {current.technology}
              </p>
            </div>

          </div>

          {/* Visualization */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-center min-h-[350px]">

            <div className="text-center">

              <div className="w-32 h-32 mx-auto rounded-full border border-cyan-400/30 bg-cyan-400/5 flex items-center justify-center">

                <Icon
                  size={60}
                  className="text-cyan-400"
                />

              </div>

              <p className="mt-8 text-2xl font-semibold">
                {current.title}
              </p>

              <p className="mt-2 text-gray-500">
                Processing stage {active + 1} of 5
              </p>

            </div>

          </div>

        </div>

      </div>
     </Reveal>
    </section>
  );
}