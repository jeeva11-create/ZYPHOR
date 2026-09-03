import {
  ArrowRight,
  BrainCircuit,
  Activity,
  Camera,
} from "lucide-react";

import GlassCard from "../../components/ui/GlassCard";
import Reveal from "../../components/ui/Reveal";
import LiveStatus from "../../components/ui/LiveStatus";
import smartBinImage from "../../assets/smart-bin.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        pt-28
        pb-16
        px-6
        flex
        items-center
      "
    >
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <Reveal>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Smart India Hackathon 2026
              </div>

              <LiveStatus
                label="AI System Online"
                status="online"
              />
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mt-6">
              Intelligent
              <br />
              Waste
              <br />
              <span className="text-cyan-400">
                Segregation.
              </span>
            </h1>

            <p className="mt-7 text-gray-300 text-lg leading-relaxed max-w-xl">
              Zyphor transforms waste segregation into an
              intelligent, measurable and data-driven process
              using AI vision, multi-sensor verification and
              IoT-powered monitoring.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#detection"
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-cyan-500
                  hover:bg-cyan-400
                  transition
                  text-black
                  font-semibold
                  flex
                  items-center
                  gap-2
                "
              >
                Try AI Detection
                <ArrowRight size={18} />
              </a>

              <a
                href="#works"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl
                  bg-cyan-500
                  text-black
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-cyan-400
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  hover:shadow-cyan-500/20
                  active:translate-y-0
                "
              >
                Explore System
              </a>
            </div>

            {/* Statistics Bar */}
            <div className="mt-10 grid grid-cols-3 gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md max-w-lg">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-cyan-400">
                  94.8%
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Segregation Accuracy
                </p>
              </div>

              <div className="border-x border-white/10 px-3">
                <p className="text-2xl md:text-3xl font-bold text-cyan-400">
                  24/7
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  IoT Monitoring
                </p>
              </div>

              <div className="pl-2">
                <p className="text-2xl md:text-3xl font-bold text-cyan-400">
                  3-Way
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Auto Segregation
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE - HERO SMART BIN SHOWCASE */}
        <Reveal delay={0.15}>
          <div className="relative group">
            {/* Ambient Cyber Neon Glow */}
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/25 via-blue-500/15 to-emerald-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            <GlassCard>
              <div className="relative">
                {/* Header Info */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                      Autonomous Hardware Unit
                    </p>
                    <h2 className="text-xl font-bold text-white mt-0.5">
                      Zyphor Smart Segregation Bin
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 text-green-400 text-xs font-mono bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    HARDWARE LIVE
                  </div>
                </div>

                {/* Hero Product Image Showcase */}
                <div className="relative mt-4 rounded-2xl overflow-hidden border border-cyan-500/20 bg-black/40 group/img">
                  <img
                    src={smartBinImage}
                    alt="Zyphor Intelligent Waste Segregation Bin"
                    className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Top Floating Badge: AI Vision */}
                  <div className="absolute top-3 left-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 border border-cyan-400/30 backdrop-blur-md text-[11px] text-cyan-300 shadow-md">
                    <Camera size={13} className="text-cyan-400" />
                    <span>360° AI Optical Vision</span>
                  </div>

                  {/* Bottom Floating Compartment Legend */}
                  <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1 sm:gap-2 p-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-center text-[10px] sm:text-[11px]">
                    <div className="flex items-center justify-center gap-1 text-emerald-400 font-medium py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="truncate">Wet Waste</span>
                    </div>

                    <div className="flex items-center justify-center gap-1 text-cyan-400 font-medium py-0.5 border-x border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                      <span className="truncate">Dry Recyclable</span>
                    </div>

                    <div className="flex items-center justify-center gap-1 text-rose-400 font-medium py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse shrink-0" />
                      <span className="truncate">Hazardous</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry & Status Panel */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                      <BrainCircuit size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400">
                        AI Confidence
                      </p>
                      <p className="text-xl font-bold text-white">96.4%</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
                      <Activity size={20} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400">
                        IoT Sensors
                      </p>
                      <p className="text-xl font-bold text-emerald-400">
                        ONLINE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Reveal>

      </div>
    </section>
  );
}