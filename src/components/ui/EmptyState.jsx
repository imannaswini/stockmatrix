import { PackageX } from 'lucide-react';

export function EmptyState({ title = 'No data found', description = 'There are no items matching your criteria.' }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center glass-card rounded-2xl h-80">
      <div className="bg-white/5 p-5 rounded-full mb-6 border border-white/5">
        <PackageX size={48} className="text-muted-foreground/50" />
      </div>
      <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground/90 max-w-sm">{description}</p>
    </div>
  );
}
