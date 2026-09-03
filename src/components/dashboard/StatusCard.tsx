import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  status?: "normal" | "warning";
}

export default function StatusCard({
  title,
  value,
  subtitle,
  icon: Icon,
  status = "normal",
}: Props) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 transition">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <p className="text-3xl font-bold mt-2">
            {value}
          </p>

          <p className="text-xs text-gray-500 mt-2">
            {subtitle}
          </p>
        </div>

        <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center">
          <Icon className="text-cyan-400" size={22} />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-5">
        <span
          className={`w-2 h-2 rounded-full ${
            status === "normal"
              ? "bg-green-400"
              : "bg-orange-400"
          }`}
        />

        <span
          className={`text-xs ${
            status === "normal"
              ? "text-green-400"
              : "text-orange-400"
          }`}
        >
          {status === "normal" ? "Operational" : "Attention Required"}
        </span>
      </div>
    </div>
  );
}