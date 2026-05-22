import { AlertTriangle } from 'lucide-react';
import { cn } from '../../utils/cn';

export function LowStockBadge({ stock, threshold = 10 }) {
  if (stock > threshold) return null;

  return (
    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-medium bg-red-500/10 text-red-500 border border-red-500/20">
      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_rgba(239,68,68,0.8)]" />
      <span>Low Stock</span>
    </div>
  );
}
