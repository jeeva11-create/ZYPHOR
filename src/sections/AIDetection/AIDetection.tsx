import {
  BrainCircuit,
  ShieldCheck,
  Zap,
  ScanLine,
  Cpu,
  Activity,
} from "lucide-react";
import { useState } from "react";
import WasteUpload from "../../components/detection/WasteUpload";
import Reveal from "../../components/ui/Reveal";
import useLiveDetection from "../../hooks/useLiveDetection";
import LiveStatus from "../../components/ui/LiveStatus";
interface DetectionResult {
  category: string;
  confidence: number;
  bin: string;
  decision: string;
}

interface Props {
  onDetection?: (result: DetectionResult) => void;
}
export default function AIDetection({
  onDetection,
}: Props) {
  const { detection, isScanning } = useLiveDetection();
const [latestDetection, setLatestDetection] =
  useState<{
    category: string;
    confidence: number;
    bin: string;
    decision: string;
  } | null>(null);
  return (
    <section
      id="detection"
      className="py-28 px-6"
    >
      <Reveal>

        <div className="max-w-7xl mx-auto">
          <div className="mb-5">
  <LiveStatus
    label={isScanning ? "AI Processing" : "AI System"}
    status={isScanning ? "processing" : "online"}
  />
</div>

          <div className="max-w-3xl mb-14">

            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
              AI Waste Detection
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              See How{" "}
              <span className="text-cyan-400">
                Zyphor Thinks
              </span>
            </h2>

            <p className="text-gray-400 mt-5 text-lg">
              The vision intelligence layer identifies waste,
              estimates prediction confidence and determines
              whether the item can be automatically segregated.
            </p>

          </div>

          {/* AI Features */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <BrainCircuit className="text-cyan-400" />

              <h3 className="font-semibold mt-4">
                AI Classification
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Vision-based waste category prediction.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <ShieldCheck className="text-green-400" />

              <h3 className="font-semibold mt-4">
                Confidence Aware
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Low-confidence predictions are sent for rechecking.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <Zap className="text-blue-400" />

              <h3 className="font-semibold mt-4">
                Fast Decision
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Classification drives the automated sorting decision.
              </p>
            </div>

          </div>

          {/* Live AI Engine */}
          <div className="mb-8">

            <div className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-5">

              {/* Header */}
              <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-3">

                  <div
                    className={`w-3 h-3 rounded-full ${
                      isScanning
                        ? "bg-yellow-400 animate-pulse"
                        : "bg-green-400"
                    }`}
                  />

                  <div>
                    <p className="font-semibold">
                      AI Detection Engine
                    </p>

                    <p className="text-xs text-gray-400">
                      {isScanning
                        ? "Analyzing waste..."
                        : "Monitoring waste stream"}
                    </p>
                  </div>

                </div>

                <span className="text-xs text-gray-500">
                  SIMULATION
                </span>

              </div>

              {/* Processing Animation */}
              <div
                className={`relative overflow-hidden rounded-xl border transition-all duration-500 ${
                  isScanning
                    ? "border-cyan-400/40 bg-cyan-400/5"
                    : "border-white/10 bg-black/20"
                }`}
              >

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(6,182,212,0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(6,182,212,0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Scanning Line */}
                {isScanning && (
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      h-0.5
                      bg-cyan-400
                      shadow-[0_0_15px_rgba(34,211,238,0.9)]
                      animate-[scan_1.5s_linear_infinite]
                    "
                  />
                )}

                <div className="relative p-6">

                  <div className="grid md:grid-cols-3 gap-6 items-center">

                    {/* Scanner */}
                    <div className="flex flex-col items-center justify-center">

                      <div
                        className={`relative w-24 h-24 rounded-2xl border flex items-center justify-center transition-all duration-500 ${
                          isScanning
                            ? "border-cyan-400/60 bg-cyan-400/10"
                            : "border-white/10 bg-white/5"
                        }`}
                      >

                        <ScanLine
                          size={42}
                          className={`transition-all duration-500 ${
                            isScanning
                              ? "text-cyan-400 animate-pulse"
                              : "text-gray-500"
                          }`}
                        />

                        {isScanning && (
                          <div className="absolute inset-2 rounded-xl border border-cyan-400/20 animate-ping" />
                        )}

                      </div>

                      <p className="text-xs text-gray-400 mt-3 tracking-wider">
                        VISION SCANNER
                      </p>

                    </div>

                    {/* Processing */}
                    <div className="space-y-4">

                      <div className="flex items-center gap-3">

                        <Cpu
                          size={18}
                          className={
                            isScanning
                              ? "text-cyan-400 animate-pulse"
                              : "text-gray-500"
                          }
                        />

                        <div className="flex-1">

                          <div className="flex justify-between text-xs mb-1">

                            <span className="text-gray-400">
                              YOLO Vision Model
                            </span>

                            <span className="text-cyan-400">
                              {isScanning ? "PROCESSING" : "READY"}
                            </span>

                          </div>

                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">

                            <div
                              className={`h-full rounded-full transition-all duration-700 ${
                                isScanning
                                  ? "w-4/5 bg-cyan-400"
                                  : "w-full bg-green-400"
                              }`}
                            />

                          </div>

                        </div>

                      </div>

                      <div className="flex items-center gap-3">

                        <Activity
                          size={18}
                          className={
                            isScanning
                              ? "text-yellow-400 animate-pulse"
                              : "text-gray-500"
                          }
                        />

                        <div className="flex-1">

                          <div className="flex justify-between text-xs mb-1">

                            <span className="text-gray-400">
                              Confidence Engine
                            </span>

                            <span className="text-yellow-400">
                              {isScanning ? "CALCULATING" : "STABLE"}
                            </span>

                          </div>

                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">

                            <div
                              className={`h-full rounded-full transition-all duration-700 ${
                                isScanning
                                  ? "w-3/5 bg-yellow-400"
                                  : "w-full bg-green-400"
                              }`}
                            />

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Processing Status */}
                    <div className="text-center md:text-right">

                      <p className="text-xs text-gray-500 tracking-widest">
                        SYSTEM STATUS
                      </p>

                      <p
                        className={`text-lg font-bold mt-2 ${
                          isScanning
                            ? "text-cyan-400"
                            : "text-green-400"
                        }`}
                      >
                        {isScanning
                          ? "CLASSIFICATION IN PROGRESS"
                          : "AI ENGINE READY"}
                      </p>

                      <p className="text-xs text-gray-500 mt-2">
                        {isScanning
                          ? "Processing visual features..."
                          : "Awaiting next detection cycle"}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Detection Results */}
              <div className="grid md:grid-cols-4 gap-4 mt-6">

                <div>
                  <p className="text-xs text-gray-500">
                    Detected Object
                  </p>

                  <p className="font-semibold mt-1">
                    {detection.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Confidence
                  </p>

                  <p className="font-semibold mt-1 text-cyan-400">
                    {detection.confidence}%
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Recommended Bin
                  </p>

                  <p className="font-semibold mt-1">
                    {detection.bin}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Decision
                  </p>

                  <p
                    className={`font-semibold mt-1 ${
                      detection.decision === "Accepted"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {detection.decision}
                  </p>
                </div>

              </div>

            </div>

          </div>

          <WasteUpload
            onDetection={(result) => {
              setLatestDetection(result);
              onDetection?.(result);
            }}
          />
{latestDetection && (
  <div className="mt-5 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3">
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Latest AI Event
        </p>

        <p className="text-sm font-semibold text-gray-200 mt-1">
          {latestDetection.category}
        </p>
      </div>

      <div className="text-right">
        <p className="text-xs text-gray-500">
          Confidence
        </p>

        <p className="text-sm font-semibold text-cyan-400">
          {latestDetection.confidence}%
        </p>
      </div>
    </div>

    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
      <span className="text-xs text-gray-500">
        Recommended Bin
      </span>

      <span className="text-xs font-semibold text-cyan-300">
        {latestDetection.bin}
      </span>
    </div>

    <div className="flex items-center justify-between mt-2">
      <span className="text-xs text-gray-500">
        Decision
      </span>

      <span
        className={`text-xs font-semibold ${
          latestDetection.decision === "Accepted"
            ? "text-green-400"
            : "text-orange-400"
        }`}
      >
        {latestDetection.decision}
      </span>
    </div>
  </div>
)}

        </div>

      </Reveal>
    </section>
  );
}