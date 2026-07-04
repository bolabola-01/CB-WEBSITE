interface SectionEyebrowProps {
  number?: string;
  label: string;
  className?: string;
}

export default function SectionEyebrow({ number, label, className = "" }: SectionEyebrowProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <p className="eyebrow whitespace-nowrap">
        {number ? `${number} — ${label}` : label}
      </p>
      <span className="hairline flex-1" />
    </div>
  );
}
