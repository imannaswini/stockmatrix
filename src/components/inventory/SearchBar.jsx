import { Search } from 'lucide-react';

export function SearchBar({ value, onChange, placeholder = "Search products..." }) {
  return (
    <div className="relative w-full sm:flex-1">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/70" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 bg-transparent border-transparent text-sm focus:outline-none focus:ring-0 placeholder:text-muted-foreground/50 transition-all text-foreground"
      />
    </div>
  );
}
