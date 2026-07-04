import type { FeatureCardItem } from "@/types";
import * as Icons from "lucide-react";

interface FeatureCardProps extends FeatureCardItem {
  icon?: keyof typeof Icons;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = icon && (Icons[icon] as Icons.LucideIcon);

  return (
    <div className="card-bordered">
      {Icon ? <Icon className="h-5 w-5 text-terracotta-500 mb-4" strokeWidth={1.5} /> : null}
      <h3 className="font-sans font-semibold text-navy-700 text-base">{title}</h3>
      <span className="terracotta-tick mt-3 mb-4" />
      <p className="text-sm text-ink-soft leading-relaxed">{description}</p>
    </div>
  );
}
