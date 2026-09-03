import { useState } from "react";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Leaf,
  Recycle,
  AlertTriangle,
  TrendingUp,
  Sparkles,
  Layers,
  Scale,
} from "lucide-react";

const trendData7Days = [
  { day: "Mon", waste: 42, segregated: 40 },
  { day: "Tue", waste: 55, segregated: 53 },
  { day: "Wed", waste: 61, segregated: 58 },
  { day: "Thu", waste: 49, segregated: 47 },
  { day: "Fri", waste: 72, segregated: 69 },
  { day: "Sat", waste: 80, segregated: 78 },
  { day: "Sun", waste: 66, segregated: 64 },
];

const trendData30Days = [
  { day: "Week 1", waste: 310, segregated: 298 },
  { day: "Week 2", waste: 345, segregated: 334 },
  { day: "Week 3", waste: 382, segregated: 371 },
  { day: "Week 4", waste: 425, segregated: 415 },
];

const categoryData = [
  {
    name: "Organic (Wet)",
    value: 35,
    weight: 64.6,
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.4)",
    icon: Leaf,
  },
  {
    name: "Recyclable (Dry)",
    value: 45,
    weight: 83.1,
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.4)",
    icon: Recycle,
  },
  {
    name: "Hazardous / Other",
    value: 20,
    weight: 36.9,
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.4)",
    icon: AlertTriangle,
  },
];

const realisticBins = [
  {
    id: "organic",
    name: "Organic Waste",
    type: "Wet Waste Compartment",
    fill: 62,
    weight: 14.8,
    capacity: "50L Max",
    status: "Attention",
    color: "emerald",
    primaryColor: "#10b981",
    icon: Leaf,
    temp: "24°C",
    fillColorClass: "from-emerald-950 via-emerald-600/90 to-emerald-400",
    shadowColor: "rgba(16, 185, 129, 0.35)",
  },
  {
    id: "recyclable",
    name: "Recyclable Waste",
    type: "Dry Stream Compartment",
    fill: 78,
    weight: 21.4,
    capacity: "50L Max",
    status: "Attention",
    color: "cyan",
    primaryColor: "#06b6d4",
    icon: Recycle,
    temp: "22°C",
    fillColorClass: "from-cyan-950 via-cyan-600/90 to-cyan-400",
    shadowColor: "rgba(6, 182, 212, 0.35)",
  },
  {
    id: "other",
    name: "Hazardous / Other",
    type: "Controlled Storage",
    fill: 34,
    weight: 7.2,
    capacity: "50L Max",
    status: "Normal",
    color: "amber",
    primaryColor: "#f59e0b",
    icon: AlertTriangle,
    temp: "21°C",
    fillColorClass: "from-amber-950 via-amber-600/90 to-orange-400",
    shadowColor: "rgba(245, 158, 11, 0.35)",
  },
];

const CustomAreaTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-cyan-400/30 bg-[#0B132B]/95 p-3.5 shadow-2xl backdrop-blur-md">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {label}
        </p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-xl font-bold text-cyan-400">
            {payload[0].value}
          </span>
          <span className="text-xs text-gray-400">kg collected</span>
        </div>
        {payload[1] && (
          <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {payload[1].value} kg segregated accurately
          </p>
        )}
      </div>
    );
  }
  return null;
};

const CustomPieTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; payload: { weight: number; color: string } }>;
}) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="rounded-xl border border-white/15 bg-[#0B132B]/95 p-3.5 shadow-2xl backdrop-blur-md">
        <p className="text-xs font-semibold text-gray-300">{data.name}</p>
        <p className="text-xl font-bold text-white mt-1">
          {data.value}%
        </p>
        <p className="text-xs text-cyan-300 mt-0.5 font-mono">
          Weight: {data.payload.weight} kg
        </p>
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  const [timeframe, setTimeframe] = useState<"7d" | "30d">("7d");
  const currentTrend = timeframe === "7d" ? trendData7Days : trendData30Days;

  return (
    <div id="analytics" className="mt-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-widest uppercase">
            <Sparkles size={14} />
            <span>3D Telemetry & Visual Analytics</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 tracking-tight">
            Analytics & Insights
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Real-time volumetric waste classification and intelligent container metrics
          </p>
        </div>

        {/* Action Controls & Top Highlight */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-xs text-gray-300">
            <TrendingUp size={14} className="text-cyan-400" />
            <span>Accuracy: <strong className="text-white font-semibold">96.4%</strong></span>
          </div>

          <div className="flex p-1 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setTimeframe("7d")}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                timeframe === "7d"
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setTimeframe("30d")}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                timeframe === "30d"
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              30 Days
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* 1. 3D VOLUMETRIC AREA CHART: Waste Collected Over Time */}
        <div className="relative group rounded-3xl border border-white/10 bg-[#0B132B]/75 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />

          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Waste Collected Over Time
                </h4>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Volumetric mass collected vs. verified segregated
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-semibold text-cyan-300">
                Peak: 80 kg
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400">
                +14.2% This Period
              </span>
            </div>
          </div>

          <div className="h-72 w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  {/* 3D Cyan Gradient */}
                  <linearGradient id="colorWaste3D" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.6} />
                    <stop offset="60%" stopColor="#06b6d4" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                  {/* 3D Emerald Gradient */}
                  <linearGradient id="colorSegregated3D" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="60%" stopColor="#10b981" stopOpacity={0.08} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis
                  dataKey="day"
                  stroke="#94a3b8"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  unit="kg"
                />
                <Tooltip content={<CustomAreaTooltip />} />

                <Area
                  type="monotone"
                  dataKey="waste"
                  name="Gross Waste"
                  stroke="#06b6d4"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorWaste3D)"
                />
                <Area
                  type="monotone"
                  dataKey="segregated"
                  name="Segregated"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  fillOpacity={1}
                  fill="url(#colorSegregated3D)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Metrics Footer */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10 relative z-10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
              <span className="text-gray-400">Gross Intake:</span>
              <strong className="text-white font-mono">425 kg</strong>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-1 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              <span className="text-gray-400">Accurately Sorted:</span>
              <strong className="text-emerald-400 font-mono">415 kg (97.6%)</strong>
            </div>
          </div>
        </div>

        {/* 2. 3D VOLUMETRIC RING: Waste Category Distribution */}
        <div className="relative group rounded-3xl border border-white/10 bg-[#0B132B]/75 backdrop-blur-xl p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700" />

          <div className="flex items-center justify-between mb-4 relative z-10">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Waste Category Distribution
                </h4>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Proportional breakdown by sorting stream
              </p>
            </div>

            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300">
              3 Streams
            </span>
          </div>

          {/* 3D Holographic Donut Visual */}
          <div className="relative h-56 flex items-center justify-center z-10">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip content={<CustomPieTooltip />} />
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={68}
                  outerRadius={95}
                  paddingAngle={5}
                  cornerRadius={6}
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="rgba(0,0,0,0.5)"
                      strokeWidth={2}
                      className="transition-all duration-300 hover:opacity-80"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Central Holographic Core */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-black/60 border border-white/15 backdrop-blur-md flex flex-col items-center justify-center shadow-inner">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Total</span>
                <span className="text-lg font-bold text-white mt-0.5">184.6</span>
                <span className="text-[10px] text-cyan-400 font-mono">KG LOGGED</span>
              </div>
            </div>
          </div>

          {/* 3D Category Capsules */}
          <div className="grid grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/10 relative z-10">
            {categoryData.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className="p-2.5 rounded-xl bg-black/30 border border-white/5 hover:border-white/15 transition-all text-center"
                >
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                    <Icon size={13} style={{ color: cat.color }} />
                    <span className="truncate text-[11px]">{cat.name.split(" ")[0]}</span>
                  </div>
                  <p className="text-lg font-bold text-white mt-1">
                    {cat.value}%
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono">
                    {cat.weight} kg
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. REALISTIC 3D SMART BIN BARS */}
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-[#0B132B]/80 backdrop-blur-xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

          {/* Section Sub-header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 relative z-10">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="text-cyan-400" size={18} />
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Real-Time Bin Fill Levels & Tank Dynamics
                </h4>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Realistic 3D physical telemetry for Organic, Recyclable, and Hazardous storage compartments
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              ULTRASONIC SENSORS ONLINE
            </div>
          </div>

          {/* 3D Smart Bins Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pt-4 pb-2 relative z-10">
            {realisticBins.map((bin) => {
              const Icon = bin.icon;
              return (
                <div
                  key={bin.id}
                  className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Bin Header Info */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center border"
                      style={{
                        backgroundColor: `${bin.primaryColor}15`,
                        borderColor: `${bin.primaryColor}40`,
                      }}
                    >
                      <Icon size={15} style={{ color: bin.primaryColor }} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white tracking-tight">{bin.name}</h5>
                      <span className="text-[10px] text-gray-400 font-medium">{bin.type}</span>
                    </div>
                  </div>

                  {/* 3D Realistic Physical Bin Container */}
                  <div className="relative flex flex-col items-center w-full max-w-[220px]">
                    {/* Metallic 3D Top Cap / Optical Sensor Lid */}
                    <div className="relative z-20 w-44 sm:w-48 h-8 rounded-t-xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-t border-x border-white/20 shadow-md flex items-center justify-between px-3">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full animate-ping"
                          style={{ backgroundColor: bin.primaryColor }}
                        />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-gray-300">
                          Optical
                        </span>
                      </div>

                      {/* Status indicator on cap */}
                      <span
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border"
                        style={{
                          color: bin.primaryColor,
                          backgroundColor: `${bin.primaryColor}15`,
                          borderColor: `${bin.primaryColor}30`,
                        }}
                      >
                        {bin.status}
                      </span>
                    </div>

                    {/* Main Acrylic 3D Chamber with Glass Reflection */}
                    <div className="relative w-44 sm:w-48 h-72 rounded-b-2xl bg-gradient-to-r from-slate-950/95 via-slate-900/60 to-slate-950/95 border-x border-b border-white/15 backdrop-blur-md overflow-hidden shadow-2xl flex flex-col justify-end">
                      {/* Glass Specular Highlights */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.08] via-transparent to-black/50 pointer-events-none z-20" />
                      <div className="absolute top-0 bottom-0 left-2 w-2.5 bg-white/[0.06] blur-[1px] pointer-events-none z-20" />

                      {/* Measurement Gauge Scale Lines on the right */}
                      <div className="absolute right-2 top-3 bottom-3 flex flex-col justify-between text-[9px] font-mono text-gray-400 z-20 pointer-events-none select-none">
                        <span className="flex items-center justify-end gap-1">100% <span className="w-2 h-px bg-gray-600" /></span>
                        <span className="flex items-center justify-end gap-1">75% <span className="w-1.5 h-px bg-gray-600" /></span>
                        <span className="flex items-center justify-end gap-1">50% <span className="w-2 h-px bg-gray-600" /></span>
                        <span className="flex items-center justify-end gap-1">25% <span className="w-1.5 h-px bg-gray-600" /></span>
                        <span className="flex items-center justify-end gap-1">0% <span className="w-2 h-px bg-gray-600" /></span>
                      </div>

                      {/* Volumetric 3D Liquid/Solid Fill Mass */}
                      <div
                        className={`relative w-full transition-all duration-1000 ease-out bg-gradient-to-t ${bin.fillColorClass}`}
                        style={{
                          height: `${bin.fill}%`,
                          boxShadow: `0 0 35px ${bin.shadowColor}`,
                        }}
                      >
                        {/* 3D Glowing Meniscus / Surface Ellipse */}
                        <div className="w-full h-3.5 bg-white/40 rounded-[100%] blur-[0.5px] border-t border-white/70 -mt-1.5" />

                        {/* Internal Volumetric Depth Shading */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-white/10 to-black/30 pointer-events-none" />

                        {/* Center Holographic Digital Readout */}
                        <div className="relative z-10 pt-2 pb-3 text-center">
                          <p className="text-4xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-tight">
                            {bin.fill}%
                          </p>
                          <p className="text-[10px] font-bold text-white/90 uppercase tracking-widest drop-shadow mt-0.5">
                            Capacity
                          </p>
                        </div>
                      </div>

                      {/* Front Glass Glare Reflex */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-20" />
                    </div>

                    {/* 3D Base Pedestal */}
                    <div className="w-48 sm:w-52 h-4 rounded-b-xl bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-t border-white/20 shadow-xl" />

                    {/* Neon Ambient Floor Glow */}
                    <div
                      className="w-36 h-5 -mt-2 rounded-full blur-xl opacity-80 pointer-events-none transition-opacity duration-300 group-hover:opacity-100"
                      style={{ backgroundColor: bin.primaryColor }}
                    />
                  </div>

                  {/* Bin Metrics Panel */}
                  <div className="mt-5 w-full max-w-[220px] p-3.5 rounded-2xl bg-black/40 border border-white/10 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <span className="text-gray-400 flex items-center gap-1.5">
                        <Scale size={13} className="text-gray-400" />
                        Weight:
                      </span>
                      <span className="font-bold font-mono text-white text-sm">{bin.weight} kg</span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-gray-400">Volume Cap:</span>
                      <span className="font-mono text-gray-300">{bin.capacity}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}