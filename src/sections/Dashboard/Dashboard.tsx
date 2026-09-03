import {
  Activity,
  Cpu,
  Scale,
  Wifi,
  RefreshCw,
  
   ScanLine,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { useEffect } from "react";

import StatusCard from "../../components/dashboard/StatusCard";
import BinCard from "../../components/dashboard/BinCard";
import Analytics from "../../components/dashboard/Analytics";
import ActivityFeed from "../../components/dashboard/ActivityFeed";
import SystemAlerts from "../../components/dashboard/SystemAlerts";

import Reveal from "../../components/ui/Reveal";
import LiveStatus from "../../components/ui/LiveStatus";
import useLiveDashboard from "../../hooks/useLiveDashboard";
import SensorStatus from "../../components/dashboard/SensorStatus";
import useLiveSensors from "../../hooks/useLiveSensors";

interface DetectionResult {
  category: string;
  confidence: number;
  bin: string;
  decision: string;
}

interface Props {
  latestDetection?: DetectionResult | null;
}

export default function Dashboard({
  latestDetection,
}: Props) {
  const {
  bins,
  lastUpdated,
  isRefreshing,
  refreshDashboard,
  updateCount,
  emptyBin,
  emptyingBinId,
   processDetection,
} = useLiveDashboard();
useEffect(() => {
  if (!latestDetection) {
    return;
  }

  processDetection(
    latestDetection.category,
    latestDetection.bin,
    latestDetection.confidence
  );
}, [latestDetection]);
const { sensors } = useLiveSensors();
  return (
    
    <section
      id="dashboard"
      className="py-28 px-6"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">

          {/* Header */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>
              <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                IoT Monitoring
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Live{" "}
                <span className="text-cyan-400">
                  Smart Dashboard
                </span>
              </h2>

              <p className="text-gray-400 mt-5 text-lg max-w-2xl">
                Monitor bin capacity, waste weight, sensors
                and system health from a single intelligent
                control interface.
              </p>

              {/* Live Update Status */}

              <div className="mt-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />

                  <span>
                    Live data · Updated{" "}
                    {lastUpdated.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard Controls */}

            <div className="flex items-center gap-3">

              <LiveStatus
                label="IoT Network"
                status="online"
              />

              <button
                onClick={refreshDashboard}
                disabled={isRefreshing}
                className="
                  group
                  p-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
                aria-label="Refresh dashboard"
              >
                <RefreshCw
                  size={18}
                  className={`
                    transition-transform
                    duration-500
                    ${
                      isRefreshing
                        ? "animate-spin"
                        : "group-hover:rotate-180"
                    }
                  `}
                />
              </button>

            </div>

          </div>
          {/* Latest AI Detection Event */}

{latestDetection && (
  <div
    className="
      mt-8
      rounded-2xl
      border
      border-cyan-400/20
      bg-cyan-400/[0.04]
      backdrop-blur-xl
      p-6
      relative
      overflow-hidden
    "
  >
    <div
      className="
        pointer-events-none
        absolute
        -right-16
        -top-16
        w-40
        h-40
        rounded-full    
        bg-cyan-400/10
        blur-3xl
      "
    />

    <div className="relative z-10">

      {/* Event Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div className="flex items-center gap-4">

          <div
            className="
              w-12
              h-12
              rounded-xl
              flex
              items-center
              justify-center
              bg-cyan-400/10
              border
              border-cyan-400/20
            "
          >
            <ScanLine
              size={22}
              className="text-cyan-400"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-400">
              Latest AI Detection
            </p>

            <h3 className="text-xl font-bold mt-1">
              {latestDetection.category}
            </h3>
          </div>

        </div>

        <div className="flex items-center gap-2 text-xs text-green-400">

          <span className="relative flex h-2.5 w-2.5">

            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                rounded-full
                bg-green-400
                opacity-75
                animate-ping
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2.5
                w-2.5
                rounded-full
                bg-green-400
              "
            />

          </span>

          LIVE AI EVENT

        </div>

      </div>

      {/* Detection Information */}

      <div className="grid sm:grid-cols-3 gap-4 mt-6">

        {/* Target Bin */}

        <div
          className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
          "
        >
          <p className="text-xs text-gray-500">
            Target Bin
          </p>

          <p className="text-lg font-semibold mt-1">
            {latestDetection.bin}
          </p>
        </div>

        {/* Confidence */}

        <div
          className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
          "
        >
          <p className="text-xs text-gray-500">
            Confidence
          </p>

          <p className="text-lg font-semibold text-cyan-400 mt-1">
            {latestDetection.confidence}%
          </p>
        </div>

        {/* Decision */}

        <div
          className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
          "
        >

          <div className="flex items-center gap-2">

            {latestDetection.decision === "Accepted" ? (
              <CheckCircle2
                size={16}
                className="text-green-400"
              />
            ) : (
              <AlertTriangle
                size={16}
                className="text-yellow-400"
              />
            )}

            <p className="text-xs text-gray-500">
              Decision
            </p>

          </div>

          <p
            className={`
              text-lg
              font-semibold
              mt-1
              ${
                latestDetection.decision === "Accepted"
                  ? "text-green-400"
                  : "text-yellow-400"
              }
            `}
          >
            {latestDetection.decision}
          </p>

        </div>

      </div>

    </div>
  </div>
)}

          {/* Status Cards */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

            <StatusCard
              title="System Status"
              value="Online"
              subtitle="All core modules operational"
              icon={Activity}
            />

            <StatusCard
              title="AI Engine"
              value="98.2%"
              subtitle="Average detection confidence"
              icon={Cpu}
            />

            <StatusCard
              title="Waste Processed"
              value="184.6 kg"
              subtitle="Today's total"
              icon={Scale}
            />

            <StatusCard
              title="IoT Connection"
              value="12 / 12"
              subtitle="Sensors connected"
              icon={Wifi}
            />

          </div>

          {/* Smart Bin Monitoring */}

          <div className="mt-10">

            <div className="flex items-center justify-between mb-5">

              <div>
                <h3 className="text-2xl font-bold">
                  Smart Bin Monitoring
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Real-time capacity and weight measurements
                </p>
              </div>

              <span className="text-xs text-gray-500">
                Updated{" "}
                {lastUpdated.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </span>

            </div>

            <div className="grid md:grid-cols-3 gap-5">

             {bins.map((bin) => (
  <BinCard
    key={bin.id}
    bin={bin}
    onEmpty={emptyBin}
    isEmptying={emptyingBinId === bin.id}
  />
))}

            </div>

          </div>

          {/* Sensors + Alerts */}

          <div className="grid lg:grid-cols-2 gap-5 mt-10">

            {/* Sensor Network */}

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-xl font-bold">
                    Sensor Network
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Hardware connectivity status
                  </p>
                </div>

                <Wifi className="text-cyan-400" />

              </div>

              <div className="mt-6 space-y-3">

                {[
                  "Camera Module",
                  "IR Detection Sensor",
                  "Ultrasonic Sensor",
                  "Load Cell",
                  "Servo Controller",
                  "ESP32 Gateway",
                ].map((sensor) => (

                  <div
                    key={sensor}
                    className="
                      flex items-center justify-between
                      p-4
                      rounded-xl
                      bg-black/20
                      border border-white/5
                    "
                  >

                    <div className="flex items-center gap-3">

                      <span className="w-2 h-2 rounded-full bg-green-400" />

                      <span className="text-sm">
                        {sensor}
                      </span>

                    </div>

                    <span className="text-xs text-green-400">
                      Connected
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Dynamic System Alerts */}

            <SystemAlerts bins={bins} />

          </div>

          {/* Live Activity */}

         <div className="mt-8">
  <ActivityFeed
  bins={bins}
  updateCount={updateCount}
  latestDetection={latestDetection}
/>
</div>
<SensorStatus sensors={sensors} />

          {/* Analytics */}

          <Analytics />

        </div>
      </Reveal>
    </section>
  );
}