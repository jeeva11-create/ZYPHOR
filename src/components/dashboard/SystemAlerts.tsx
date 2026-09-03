import { motion } from "framer-motion";

import {
  AlertTriangle,
  CheckCircle2,
  Info,
} from "lucide-react";

interface Bin {
  id: string;
  name: string;
  fillLevel: number;
  weight: number;
  status: string;
}

interface Props {
  bins: Bin[];
}

export default function SystemAlerts({ bins }: Props) {
  const criticalBins = bins.filter(
    (bin) => bin.fillLevel >= 80
  );

  const attentionBins = bins.filter(
    (bin) =>
      bin.fillLevel >= 60 &&
      bin.fillLevel < 80
  );

  const totalAlerts =
    criticalBins.length + attentionBins.length;

  return (
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold">
            System Alerts
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Real-time bin monitoring
          </p>
        </div>

        <div className="relative w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
          {totalAlerts > 0 && (
            <span className="absolute inset-0 rounded-xl bg-yellow-400/10 animate-pulse" />
          )}

          <AlertTriangle
            size={20}
            className="text-yellow-400 relative z-10"
          />
        </div>
      </div>

      {/* Critical Alerts */}
      <div className="space-y-3">
        {criticalBins.map((bin) => (
          <motion.div
            key={`critical-${bin.id}`}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              flex items-start gap-3
              rounded-xl
              border border-red-400/20
              bg-red-400/5
              p-4
            "
          >
            <div className="relative mt-0.5">
              <span className="absolute inset-0 rounded-full bg-red-400/30 animate-ping" />

              <AlertTriangle
                size={18}
                className="text-red-400 relative z-10"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-red-400">
                Critical Fill Level
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {bin.name} bin has reached{" "}
                <span className="text-white font-medium">
                  {bin.fillLevel}%
                </span>{" "}
                capacity.
              </p>

              <p className="text-[11px] text-gray-600 mt-2">
                Immediate collection recommended.
              </p>
            </div>
          </motion.div>
        ))}

        {/* Attention Alerts */}
        {attentionBins.map((bin) => (
          <motion.div
            key={`attention-${bin.id}`}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              flex items-start gap-3
              rounded-xl
              border border-yellow-400/20
              bg-yellow-400/5
              p-4
            "
          >
            <Info
              size={18}
              className="text-yellow-400 mt-0.5 shrink-0"
            />

            <div>
              <p className="text-sm font-semibold text-yellow-400">
                Attention Required
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {bin.name} bin is at{" "}
                <span className="text-white font-medium">
                  {bin.fillLevel}%
                </span>{" "}
                capacity.
              </p>

              <p className="text-[11px] text-gray-600 mt-2">
                Collection should be planned soon.
              </p>
            </div>
          </motion.div>
        ))}

        {/* No Alerts */}
        {totalAlerts === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              flex items-start gap-3
              rounded-xl
              border border-green-400/20
              bg-green-400/5
              p-4
            "
          >
            <CheckCircle2
              size={18}
              className="text-green-400 mt-0.5 shrink-0"
            />

            <div>
              <p className="text-sm font-semibold text-green-400">
                All Systems Normal
              </p>

              <p className="text-xs text-gray-400 mt-1">
                No bin capacity alerts detected.
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Alert Summary */}
      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
        <span className="text-gray-500">
          Active Alerts
        </span>

        <span
          className={
            criticalBins.length > 0
              ? "text-red-400 font-semibold"
              : attentionBins.length > 0
              ? "text-yellow-400 font-semibold"
              : "text-green-400 font-semibold"
          }
        >
          {totalAlerts}
        </span>
      </div>
    </div>
  );
}