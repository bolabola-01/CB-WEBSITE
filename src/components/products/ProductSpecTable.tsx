import type { ProductSpec } from "@/types";

export default function ProductSpecTable({ specs }: { specs: ProductSpec[] }) {
  if (!specs || specs.length === 0) return null;

  return (
    <div className="border border-line">
      <p className="eyebrow px-5 pt-4 pb-2">Specifications</p>
      <table className="w-full text-sm">
        <tbody>
          {specs.map((spec, i) => (
            <tr key={spec.label} className={i !== specs.length - 1 ? "border-b border-line" : ""}>
              <td className="px-5 py-3 text-ink-soft w-1/2">{spec.label}</td>
              <td className="px-5 py-3 text-navy-700 font-medium">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
