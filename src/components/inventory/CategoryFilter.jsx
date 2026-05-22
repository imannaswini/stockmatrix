import { Filter } from 'lucide-react';

export function CategoryFilter({ categories, value, onChange }) {
  return (
    <div className="relative w-full sm:w-56 shrink-0">
      <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/70 pointer-events-none" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-10 py-2.5 bg-transparent border-transparent text-sm appearance-none focus:outline-none focus:ring-0 transition-all cursor-pointer text-foreground"
      >
        <option value="" className="bg-card">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category} className="bg-card">
            {category}
          </option>
        ))}
      </select>
      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/70">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
      </div>
    </div>
  );
}
