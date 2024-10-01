import { cn } from "@/lib/utils";

export default function Bagde({ children }) {
  return (
    <span
      className={cn(
        "bg-teal-400 text-emerald-900 border border-teal-900 text-sm inline-block rounded-full px-2 "
      )}
    >
      {children}
    </span>
  );
}
