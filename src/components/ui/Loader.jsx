import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export function Loader({ className, size = 24 }) {
  return (
    <div className={cn('flex justify-center items-center', className)}>
      <Loader2 size={size} className="animate-spin text-primary" />
    </div>
  );
}
