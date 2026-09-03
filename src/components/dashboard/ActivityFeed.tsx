import { useEffect, useState } from "react";

interface Bin {
  id: string;
  name: string;
  fillLevel: number;
  weight: number;
  status: string;
}

interface DetectionResult {
  category: string;
  confidence: number;
  bin: string;
  decision: string;
}

export interface SortingRecord {
  id: string | number;
  time: string;
  waste: string;
  category: "Dry" | "Wet" | "Hazardous";
  confidence: number;
  destination: string;
  quality: "Clean" | "Good" | "Verified" | "Safe" | "Contaminated";
  status: "Sorted" | "Sensor Check";
  isNew?: boolean;
}

interface Props {
  bins?: Bin[];
  updateCount?: number;
  latestDetection?: DetectionResult | null;
}

const initialRecords: SortingRecord[] = [
  {
    id: "1",
    time: "10:42 AM",
    waste: "Plastic Bottle",
    category: "Dry",
    confidence: 96,
    destination: "Dry Bin",
    quality: "Clean",
    status: "Sorted",
  },
  {
    id: "2",
    time: "10:39 AM",
    waste: "Food Waste",
    category: "Wet",
    confidence: 94,
    destination: "Wet Bin",
    quality: "Good",
    status: "Sorted",
  },
  {
    id: "3",
    time: "10:35 AM",
    waste: "Unknown Wrapper",
    category: "Dry",
    confidence: 72,
    destination: "Dry Bin",
    quality: "Verified",
    status: "Sensor Check",
  },
  {
    id: "4",
    time: "10:31 AM",
    waste: "Battery",
    category: "Hazardous",
    confidence: 98,
    destination: "Hazardous Bin",
    quality: "Safe",
    status: "Sorted",
  },
  {
    id: "5",
    time: "10:24 AM",
    waste: "Banana Peel",
    category: "Wet",
    confidence: 97,
    destination: "Wet Bin",
    quality: "Clean",
    status: "Sorted",
  },
  {
    id: "6",
    time: "10:18 AM",
    waste: "Cardboard Box",
    category: "Dry",
    confidence: 93,
    destination: "Dry Bin",
    quality: "Clean",
    status: "Sorted",
  },
  {
    id: "7",
    time: "10:09 AM",
    waste: "Medicine Strip",
    category: "Hazardous",
    confidence: 89,
    destination: "Hazardous Bin",
    quality: "Safe",
    status: "Sorted",
  },
  {
    id: "8",
    time: "10:02 AM",
    waste: "Soiled Wrapper",
    category: "Dry",
    confidence: 68,
    destination: "Wet Bin",
    quality: "Contaminated",
    status: "Sensor Check",
  },
];

const sortingCatalog: Array<{
  waste: string;
  category: "Dry" | "Wet" | "Hazardous";
  destination: string;
  minConf: number;
  maxConf: number;
  qualities: Array<"Clean" | "Good" | "Verified" | "Safe" | "Contaminated">;
}> = [
  { waste: "Plastic Bottle", category: "Dry", destination: "Dry Bin", minConf: 92, maxConf: 98, qualities: ["Clean", "Verified"] },
  { waste: "Food Waste", category: "Wet", destination: "Wet Bin", minConf: 90, maxConf: 96, qualities: ["Good", "Clean"] },
  { waste: "Cardboard Box", category: "Dry", destination: "Dry Bin", minConf: 89, maxConf: 96, qualities: ["Clean"] },
  { waste: "Lithium Battery", category: "Hazardous", destination: "Hazardous Bin", minConf: 94, maxConf: 99, qualities: ["Safe"] },
  { waste: "Banana Peel", category: "Wet", destination: "Wet Bin", minConf: 93, maxConf: 98, qualities: ["Clean", "Good"] },
  { waste: "Medicine Strip", category: "Hazardous", destination: "Hazardous Bin", minConf: 88, maxConf: 95, qualities: ["Safe"] },
  { waste: "Aluminium Can", category: "Dry", destination: "Dry Bin", minConf: 91, maxConf: 97, qualities: ["Clean", "Verified"] },
  { waste: "Apple Core", category: "Wet", destination: "Wet Bin", minConf: 92, maxConf: 96, qualities: ["Good", "Clean"] },
  { waste: "Unknown Wrapper", category: "Dry", destination: "Dry Bin", minConf: 68, maxConf: 74, qualities: ["Verified", "Contaminated"] },
  { waste: "Aerosol Spray", category: "Hazardous", destination: "Hazardous Bin", minConf: 91, maxConf: 97, qualities: ["Safe"] },
  { waste: "Glass Bottle", category: "Dry", destination: "Dry Bin", minConf: 92, maxConf: 98, qualities: ["Clean"] },
  { waste: "Leftover Meal", category: "Wet", destination: "Wet Bin", minConf: 89, maxConf: 95, qualities: ["Good"] },
  { waste: "Paper Cup", category: "Dry", destination: "Dry Bin", minConf: 86, maxConf: 93, qualities: ["Verified", "Clean"] },
  { waste: "Soiled Foil", category: "Dry", destination: "Wet Bin", minConf: 66, maxConf: 73, qualities: ["Contaminated"] },
];

function generateRandomSortingRecord(): SortingRecord {
  const item = sortingCatalog[Math.floor(Math.random() * sortingCatalog.length)];
  const confidence = Math.floor(Math.random() * (item.maxConf - item.minConf + 1)) + item.minConf;
  const quality = item.qualities[Math.floor(Math.random() * item.qualities.length)];
  const status = confidence >= 76 ? "Sorted" : "Sensor Check";

  return {
    id: Date.now() + Math.random(),
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    waste: item.waste,
    category: item.category,
    confidence,
    destination: item.destination,
    quality,
    status,
    isNew: true,
  };
}

export default function ActivityFeed({ latestDetection, updateCount }: Props) {
  const [records, setRecords] = useState<SortingRecord[]>(initialRecords);
  const [newestId, setNewestId] = useState<string | number | null>(null);

  // Frequently add simulated live sorting records every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const newRecord = generateRandomSortingRecord();
      setNewestId(newRecord.id);
      setRecords((prev) => [newRecord, ...prev.slice(0, 7)]);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Also sync when updateCount from dashboard background cycle ticks
  useEffect(() => {
    if (!updateCount || updateCount <= 1) return;
    const newRecord = generateRandomSortingRecord();
    setNewestId(newRecord.id);
    setRecords((prev) => [newRecord, ...prev.slice(0, 7)]);
  }, [updateCount]);

  // Sync real-time AI detection events when user triggers a detection
  useEffect(() => {
    if (!latestDetection) return;

    const catLower = latestDetection.category.toLowerCase();
    const binLower = latestDetection.bin.toLowerCase();

    let category: "Dry" | "Wet" | "Hazardous" = "Dry";
    if (
      catLower.includes("wet") ||
      binLower.includes("wet") ||
      catLower.includes("food") ||
      catLower.includes("organic")
    ) {
      category = "Wet";
    } else if (
      catLower.includes("hazard") ||
      binLower.includes("hazard") ||
      catLower.includes("battery") ||
      catLower.includes("e-waste")
    ) {
      category = "Hazardous";
    }

    const newRecord: SortingRecord = {
      id: Date.now() + Math.random(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      waste: latestDetection.category,
      category,
      confidence: latestDetection.confidence,
      destination: latestDetection.bin.endsWith("Bin")
        ? latestDetection.bin
        : `${latestDetection.bin} Bin`,
      quality:
        latestDetection.confidence >= 90
          ? "Clean"
          : latestDetection.confidence >= 75
          ? "Verified"
          : "Contaminated",
      status:
        latestDetection.confidence >= 75 ? "Sorted" : "Sensor Check",
      isNew: true,
    };

    setNewestId(newRecord.id);
    setRecords((prev) => [newRecord, ...prev.slice(0, 7)]);
  }, [latestDetection]);

  const handleScrollToAnalytics = () => {
    const el =
      document.getElementById("analytics") ||
      document.querySelector("section#dashboard");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B132B]/80 backdrop-blur-xl p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Recent Sorting Activity
            </h3>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE STREAM
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Real-time multi-sensor telemetry · Updating automatically
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleScrollToAnalytics}
            className="px-4 py-1.5 rounded-full text-xs font-medium border border-white/15 bg-white/5 text-gray-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 shadow-sm"
          >
            Analytics
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[680px]">
          <thead>
            <tr className="border-b border-white/10 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              <th className="pb-3.5 pr-4 pl-2">TIME</th>
              <th className="pb-3.5 px-4">WASTE</th>
              <th className="pb-3.5 px-4">CATEGORY</th>
              <th className="pb-3.5 px-4">CONFIDENCE</th>
              <th className="pb-3.5 px-4">DESTINATION</th>
              <th className="pb-3.5 px-4">QUALITY</th>
              <th className="pb-3.5 pl-4 pr-2">STATUS</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5 text-sm">
            {records.map((item) => (
              <tr
                key={item.id}
                className={`transition-all duration-500 ${
                  item.id === newestId
                    ? "bg-cyan-500/10 border-l-2 border-cyan-400"
                    : "hover:bg-white/[0.03]"
                }`}
              >
                {/* TIME */}
                <td className="py-4 pr-4 pl-2 text-xs font-mono text-gray-400 whitespace-nowrap">
                  {item.time}
                </td>

                {/* WASTE */}
                <td className="py-4 px-4 font-bold text-white whitespace-nowrap">
                  {item.waste}
                </td>

                {/* CATEGORY */}
                <td className="py-4 px-4 whitespace-nowrap font-medium">
                  {item.category === "Dry" && (
                    <span className="text-sky-400">Dry</span>
                  )}
                  {item.category === "Wet" && (
                    <span className="text-emerald-400">Wet</span>
                  )}
                  {item.category === "Hazardous" && (
                    <span className="text-orange-400">Hazardous</span>
                  )}
                </td>

                {/* CONFIDENCE */}
                <td className="py-4 px-4 text-gray-200 whitespace-nowrap font-medium">
                  {item.confidence}%
                </td>

                {/* DESTINATION */}
                <td className="py-4 px-4 text-gray-300 whitespace-nowrap">
                  {item.destination}
                </td>

                {/* QUALITY */}
                <td className="py-4 px-4 text-gray-300 whitespace-nowrap">
                  {item.quality}
                </td>

                {/* STATUS */}
                <td className="py-4 pl-4 pr-2 whitespace-nowrap">
                  {item.status === "Sorted" ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-500/20">
                      Sorted
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-950/60 text-orange-400 border border-orange-500/20">
                      Sensor Check
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}