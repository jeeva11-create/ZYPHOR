import {
  Building2,
  Cloud,
  Cpu,
  GraduationCap,
  HeartPulse,
  Factory,
  MapPin,
  Network,
  Radio,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";

import Reveal from "../../components/ui/Reveal";

const deploymentAreas = [
  {
    title: "Smart Cities",
    description:
      "Deploy intelligent waste segregation and monitoring across public waste collection points.",
    icon: Building2,
  },
  {
    title: "Industrial Sites",
    description:
      "Monitor and classify waste generated across factories and industrial facilities.",
    icon: Factory,
  },
  {
    title: "Educational Campuses",
    description:
      "Support smart waste management across schools, colleges and university campuses.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare Facilities",
    description:
      "Provide monitored waste handling workflows for hospitals and healthcare environments.",
    icon: HeartPulse,
  },
  {
    title: "Commercial Spaces",
    description:
      "Enable intelligent waste monitoring in malls, offices, restaurants and commercial buildings.",
    icon: ShoppingBag,
  },
  {
    title: "Public Infrastructure",
    description:
      "Extend smart waste intelligence to transport hubs, parks and other public spaces.",
    icon: MapPin,
  },
];

export default function Deployment() {
  return (
    <section
      id="deployment"
      className="py-24 md:py-28 px-4 sm:px-6"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="max-w-3xl mb-14">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
              Deployment
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Built for{" "}
              <span className="text-cyan-400">
                Real-World Deployment
              </span>
            </h2>

            <p className="text-gray-400 text-lg mt-5 leading-relaxed">
              Zyphor is designed as a modular edge-to-cloud system
              that can scale from a single smart bin to multiple
              connected waste management locations.
            </p>
          </div>

          {/* Deployment Architecture */}
          <div
            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-6
              md:p-8
            "
          >
            <div className="flex items-center gap-3 mb-8">

              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-cyan-400/10
                  border border-cyan-400/20
                  flex items-center justify-center
                "
              >
                <Network
                  size={22}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Edge → IoT → Cloud Architecture
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  A scalable architecture for connected smart waste systems.
                </p>
              </div>

            </div>

            {/* Architecture Flow */}
            <div className="grid lg:grid-cols-5 gap-4 items-center">

              <ArchitectureNode
                icon={Cpu}
                number="01"
                title="Smart Bin"
                description="Camera + Sensors"
              />

              <ArchitectureArrow />

              <ArchitectureNode
                icon={Zap}
                number="02"
                title="Edge AI"
                description="Local Detection"
              />

              <ArchitectureArrow />

              <ArchitectureNode
                icon={Radio}
                number="03"
                title="IoT Gateway"
                description="Device Communication"
              />

              <ArchitectureArrow />

              <ArchitectureNode
                icon={Cloud}
                number="04"
                title="Cloud Backend"
                description="Data + Analytics"
              />

              <ArchitectureArrow />

              <ArchitectureNode
                icon={Smartphone}
                number="05"
                title="Dashboard"
                description="Monitoring + Alerts"
              />

            </div>

            {/* Architecture Explanation */}
            <div
              className="
                mt-8
                grid md:grid-cols-3
                gap-4
              "
            >
              <ArchitectureInfo
                title="Edge Intelligence"
                description="Process vision and sensor information close to the waste stream."
              />

              <ArchitectureInfo
                title="Connected Monitoring"
                description="Transmit measurements, device status and events through an IoT layer."
              />

              <ArchitectureInfo
                title="Central Intelligence"
                description="Store operational data and expose analytics through a monitoring dashboard."
              />
            </div>
          </div>

          {/* Deployment Areas */}
          <div className="mt-12">

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
                <Building2
                  size={20}
                  className="text-green-400"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Deployment Environments
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Flexible enough for multiple waste management scenarios.
                </p>
              </div>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {deploymentAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-green-400/30
                      hover:bg-white/[0.06]
                    "
                  >

                    {/* Glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-8
                        -top-8
                        h-24
                        w-24
                        rounded-full
                        bg-green-400/10
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
                          w-11
                          h-11
                          rounded-xl
                          bg-green-400/10
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon
                          size={22}
                          className="
                            text-green-400
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </div>

                      <h4 className="text-lg font-semibold mt-5">
                        {area.title}
                      </h4>

                      <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                        {area.description}
                      </p>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Scalability Section */}
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
            <div className="grid lg:grid-cols-3 gap-8 items-center">

              <div>
                <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
                  Scalable Architecture
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  From One Bin to a Connected Network
                </h3>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  The same architecture can support individual
                  smart bins, multiple collection points or a
                  larger network of connected waste management units.
                </p>
              </div>

              <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">

                <ScaleCard
                  title="Single Unit"
                  description="One intelligent sorting unit"
                  icon={Cpu}
                />

                <ScaleCard
                  title="Site Network"
                  description="Multiple connected smart bins"
                  icon={Network}
                />

                <ScaleCard
                  title="Smart City"
                  description="Centralized monitoring network"
                  icon={Building2}
                />

              </div>

            </div>
          </div>

          {/* Prototype Notice */}
          <div className="mt-6 text-center text-xs text-gray-600">
            Deployment architecture shown here represents the proposed
            system architecture for the prototype and future scaling.
          </div>

        </div>
      </Reveal>
    </section>
  );
}


/* Architecture Node */

function ArchitectureNode({
  icon: Icon,
  number,
  title,
  description,
}: {
  icon: typeof Cpu;
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
      <div
        className="
          mx-auto
          w-11
          h-11
          rounded-xl
          bg-cyan-400/10
          border border-cyan-400/10
          flex items-center justify-center
        "
      >
        <Icon
          size={21}
          className="text-cyan-400"
        />
      </div>

      <p className="text-[10px] text-cyan-400 tracking-widest font-semibold mt-4">
        {number}
      </p>

      <h4 className="font-semibold mt-1">
        {title}
      </h4>

      <p className="text-xs text-gray-500 mt-1">
        {description}
      </p>
    </div>
  );
}


/* Architecture Arrow */

function ArchitectureArrow() {
  return (
    <div className="hidden lg:flex justify-center">
      <ArrowRightIcon />
    </div>
  );
}


/* Arrow */

function ArrowRightIcon() {
  return (
    <div className="text-cyan-400/50">
      →
    </div>
  );
}


/* Architecture Information */

function ArchitectureInfo({
  title,
  description,
}: {
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
      "
    >
      <h4 className="font-semibold">
        {title}
      </h4>

      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}


/* Scalability Card */

function ScaleCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: typeof Cpu;
}) {
  return (
    <div
      className="
        rounded-xl
        border border-white/10
        bg-black/20
        p-5
        transition-all
        duration-300
        hover:border-cyan-400/30
      "
    >
      <Icon
        size={21}
        className="text-cyan-400"
      />

      <h4 className="font-semibold mt-4">
        {title}
      </h4>

      <p className="text-xs text-gray-500 mt-1">
        {description}
      </p>
    </div>
  );
}