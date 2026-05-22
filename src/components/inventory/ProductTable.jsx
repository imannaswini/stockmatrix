import { Edit2, Trash2 } from 'lucide-react';
import { LowStockBadge } from '../ui/LowStockBadge';
import { EmptyState } from '../ui/EmptyState';

export function ProductTable({ products, onEdit, onDelete }) {
  if (!products?.length) {
    return <EmptyState />;
  }

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="text-[11px] uppercase tracking-wider text-muted-foreground bg-white/[0.02] border-b border-white/5">
            <tr>
              <th className="px-6 py-4 font-semibold">Product</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Quantity</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4 font-medium text-foreground">
                  {product.name}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-muted-foreground border border-white/10 group-hover:bg-white/10 transition-colors">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-foreground/90">
                  ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className={product.quantity <= product.minStock ? 'font-semibold text-danger' : 'font-medium'}>
                      {product.quantity}
                    </span>
                    <LowStockBadge stock={product.quantity} threshold={product.minStock || 10} />
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onEdit(product)}
                      className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(product)}
                      className="p-2 text-muted-foreground hover:text-danger hover:bg-danger/10 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
