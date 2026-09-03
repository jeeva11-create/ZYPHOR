import { Activity } from "lucide-react";

interface Props {
  label?: string;
  status?: "online" | "processing" | "warning" | "offline";
}

export default function LiveStatus({
  label = "System Online",
  status = "online",
}: Props) {
  const statusConfig = {
    online: {
      text: "text-green-400",
      dot: "bg-green-400",
      ring: "bg-green-400/20",
      label: "ONLINE",
    },

    processing: {
      text: "text-cyan-400",
      dot: "bg-cyan-400",
      ring: "bg-cyan-400/20",
      label: "PROCESSING",
    },

    warning: {
      text: "text-yellow-400",
      dot: "bg-yellow-400",
      ring: "bg-yellow-400/20",
      label: "WARNING",
    },

    offline: {
      text: "text-red-400",
      dot: "bg-red-400",
      ring: "bg-red-400/20",
      label: "OFFLINE",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${config.ring}`}
        />

        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${config.dot}`}
        />
      </span>

      <Activity size={14} className={config.text} />

      <span className={`text-xs font-medium ${config.text}`}>
        {label}
      </span>

      <span className="text-[10px] text-gray-500">
        {config.label}
      </span>
    </div>
  );
}