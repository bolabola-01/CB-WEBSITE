import type { Stat } from "@/types";

interface StatBandProps {
  stats: Stat[];
  orientation?: "vertical" | "horizontal";
}

export default function StatBand({ stats, orientation = "vertical" }: StatBandProps) {
  if (orientation === "horizontal") {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-navy-500/40 bg-navy-700 text-paper">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-10 text-center">
            <p className="font-display italic text-4xl md:text-5xl text-terracotta-400">{stat.value}</p>
            <p className="mt-2 text-xs md:text-sm text-paper/80">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-navy-700 text-paper px-10 py-12 h-full flex flex-col justify-center">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`py-5 ${i !== stats.length - 1 ? "border-b border-paper/15" : ""}`}
        >
          <p className="font-display italic text-4xl md:text-5xl text-terracotta-400">{stat.value}</p>
          <p className="mt-1 text-sm text-paper/80">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
