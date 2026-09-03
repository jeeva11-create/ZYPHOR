import {
  Activity,
  Camera,
  Cpu,
  Radio,
  Scale,
  Wifi,
} from "lucide-react";

import type { Sensor } from "../../hooks/useLiveSensors";

interface Props {
  sensors: Sensor[];
}

const iconMap = {
  camera: Camera,
  ultrasonic: Activity,
  loadcell: Scale,
  esp32: Cpu,
  ai: Activity,
  gateway: Wifi,
};

export default function SensorStatus({
  sensors,
}: Props) {
  return (
    <div
      className="
        bg-white/[0.04]
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-6
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>
          <h3 className="text-xl font-bold">
            Sensor Network
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Real-time hardware and AI status
          </p>
        </div>

        <div
          className="
            flex
            items-center
            gap-2
            text-xs
            text-green-400
          "
        >
          <span className="relative flex h-2 w-2">

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
                h-2
                w-2
                rounded-full
                bg-green-400
              "
            />

          </span>

          LIVE
        </div>

      </div>

      {/* Sensor Grid */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {sensors.map((sensor) => {

          const Icon =
            iconMap[
              sensor.id as keyof typeof iconMap
            ] ?? Radio;

          const isWarning =
            sensor.status === "Warning";

          const isOffline =
            sensor.status === "Offline";

          return (
            <div
              key={sensor.id}
              className="
                group
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-4
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-white/[0.07]
              "
            >

              <div className="flex items-start justify-between">

                {/* Icon */}

                <div
                  className={`
                    w-10
                    h-10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    border
                    ${
                      isWarning
                        ? "bg-yellow-400/10 border-yellow-400/20"
                        : isOffline
                        ? "bg-red-400/10 border-red-400/20"
                        : "bg-cyan-400/10 border-cyan-400/20"
                    }
                  `}
                >

                  <Icon
                    size={19}
                    className={
                      isWarning
                        ? "text-yellow-400"
                        : isOffline
                        ? "text-red-400"
                        : "text-cyan-400"
                    }
                  />

                </div>

                {/* Status */}

                <div className="flex items-center gap-1.5">

                  <span
                    className={`
                      w-2
                      h-2
                      rounded-full
                      ${
                        isWarning
                          ? "bg-yellow-400"
                          : isOffline
                          ? "bg-red-400"
                          : "bg-green-400"
                      }
                    `}
                  />

                  <span
                    className={`
                      text-[11px]
                      font-medium
                      ${
                        isWarning
                          ? "text-yellow-400"
                          : isOffline
                          ? "text-red-400"
                          : "text-green-400"
                      }
                    `}
                  >
                    {sensor.status}
                  </span>

                </div>

              </div>

              {/* Sensor Information */}

              <div className="mt-4">

                <h4 className="font-semibold">
                  {sensor.name}
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  {sensor.type}
                </p>

              </div>

              {/* Current Value */}

              <div
                className="
                  mt-4
                  pt-3
                  border-t
                  border-white/10
                  flex
                  items-center
                  justify-between
                "
              >

                <span className="text-xs text-gray-500">
                  Current Value
                </span>

                <span
                  className={`
                    text-sm
                    font-semibold
                    ${
                      isWarning
                        ? "text-yellow-400"
                        : isOffline
                        ? "text-red-400"
                        : "text-cyan-400"
                    }
                  `}
                >
                  {sensor.value}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}