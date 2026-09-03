import {
  AlertTriangle,
  CheckCircle2,
  Trash2,
} from "lucide-react";

interface Bin {
  id: string;
  name: string;
  fillLevel: number;
  weight: number;
  status: string;
}

interface Props {
  bin: Bin;
  onEmpty: (binId: string) => void;
  isEmptying: boolean;
}

export default function BinCard({
  bin,
  onEmpty,
  isEmptying,
}: Props) {
  const getStatusConfig = () => {
    if (bin.fillLevel >= 80) {
      return {
        label: "Critical",
        text: "text-red-400",
        bg: "bg-red-400/10",
        border: "border-red-400/20",
        bar: "bg-red-400",
        icon: AlertTriangle,
      };
    }

    if (bin.fillLevel >= 60) {
      return {
        label: "Attention",
        text: "text-yellow-400",
        bg: "bg-yellow-400/10",
        border: "border-yellow-400/20",
        bar: "bg-yellow-400",
        icon: AlertTriangle,
      };
    }

    return {
      label: "Normal",
      text: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/20",
      bar: "bg-green-400",
      icon: CheckCircle2,
    };
  };

  const config = getStatusConfig();

  const StatusIcon = config.icon;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:bg-white/[0.06]
      "
    >
      {/* Top glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-cyan-400/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Smart Bin
            </p>

            <h3 className="text-xl font-bold mt-1">
              {bin.name}
            </h3>
          </div>

          {/* Status */}
          <div
            className={`
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-3
              py-1.5
              text-xs
              font-medium
              ${config.bg}
              ${config.border}
              ${config.text}
            `}
          >
            <StatusIcon size={14} />
            {config.label}
          </div>

        </div>

        {/* Fill Level */}
        <div className="mt-7">

          <div className="flex items-center justify-between mb-2">

            <span className="text-sm text-gray-400">
              Fill Level
            </span>

            <span className="text-sm font-semibold">
              {bin.fillLevel}%
            </span>

          </div>

          <div className="h-2 rounded-full bg-white/10 overflow-hidden">

            <div
              className={`
                h-full
                rounded-full
                transition-all
                duration-700
                ${config.bar}
              `}
              style={{
                width: `${bin.fillLevel}%`,
              }}
            />

          </div>

        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">

            <p className="text-xs text-gray-500">
              Weight
            </p>

            <p className="text-lg font-semibold mt-1">
              {bin.weight} kg
            </p>

          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">

            <p className="text-xs text-gray-500">
              Capacity
            </p>

            <p className="text-lg font-semibold mt-1">
              {bin.fillLevel >= 80
                ? "Near Full"
                : bin.fillLevel >= 60
                ? "Moderate"
                : "Available"}
            </p>

          </div>

        </div>

        {/* Control */}
        <div className="mt-5">

          <button
            onClick={() => onEmpty(bin.id)}
            disabled={isEmptying}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-sm
              font-medium
              text-gray-300
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/10
              hover:text-cyan-400
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            <Trash2
              size={16}
              className={
                isEmptying
                  ? "animate-pulse"
                  : ""
              }
            />

            {isEmptying
              ? "Emptying Bin..."
              : "Empty Bin"}

          </button>

        </div>

      </div>
    </div>
  );
}