import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { categories } from '../../utils/dummyData';

export function ProductForm({ initialData, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    category: categories[0],
    price: '',
    quantity: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity, 10),
      minStock: formData.minStock || 10,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative z-10 w-full max-w-md glass-card rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <h3 className="text-xl font-bold tracking-tight">{initialData ? 'Edit Product' : 'Add New Product'}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-white/5">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground/90">Product Name</label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner"
              placeholder="e.g. Wireless Keyboard"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground/90">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner appearance-none"
            >
              {categories.map(c => (
                <option key={c} value={c} className="bg-card">{c}</option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/90">Price ($)</label>
              <input
                required
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner"
                placeholder="0.00"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground/90">Quantity</label>
              <input
                required
                type="number"
                min="0"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner"
                placeholder="0"
              />
            </div>
          </div>
          
          <div className="pt-6 flex justify-end gap-3 border-t border-white/5 mt-8">
            <button 
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full font-medium text-foreground bg-transparent border border-white/10 hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-5 py-2.5 rounded-full font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              {initialData ? 'Save Changes' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
