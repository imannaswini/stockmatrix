import { useState, useEffect, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { toast } from 'react-toastify';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/api';
import { categories } from '../utils/dummyData';

import { ProductTable } from '../components/inventory/ProductTable';
import { ProductForm } from '../components/inventory/ProductForm';
import { SearchBar } from '../components/inventory/SearchBar';
import { CategoryFilter } from '../components/inventory/CategoryFilter';
import { Loader } from '../components/ui/Loader';
import { ConfirmationModal } from '../components/ui/ConfirmationModal';

export function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filtering state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      const mappedProducts = res.data.map(p => ({ ...p, id: p._id || p.id }));
      setProducts(mappedProducts);
    } catch (error) {
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProduct = async (productData) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, productData);
        toast.success('Product updated successfully');
      } else {
        await addProduct(productData);
        toast.success('Product added successfully');
      }
      fetchProducts();
      setIsFormOpen(false);
      setEditingProduct(null);
    } catch (error) {
      toast.error('Failed to save product');
    }
  };

  const handleDeleteProduct = async () => {
    if (!productToDelete) return;
    try {
      await deleteProduct(productToDelete.id);
      toast.success('Product deleted successfully');
      fetchProducts();
    } catch (error) {
      toast.error('Failed to delete product');
    } finally {
      setProductToDelete(null);
    }
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = (p.name || '').toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-white/5 pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Inventory</h1>
          <p className="text-muted-foreground text-sm">Overview of your product catalog and current stock levels.</p>
        </div>
        <button
          onClick={() => { setEditingProduct(null); setIsFormOpen(true); }}
          className="group relative flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all font-medium text-sm overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <Plus size={18} className="relative z-10" />
          <span className="relative z-10">Add Product</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 glass-card p-2 rounded-2xl">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <div className="w-px bg-white/5 hidden sm:block mx-1" />
        <CategoryFilter categories={categories} value={selectedCategory} onChange={setSelectedCategory} />
      </div>

      {loading ? (
        <div className="py-20">
          <Loader size={32} />
        </div>
      ) : (
        <ProductTable 
          products={filteredProducts} 
          onEdit={openEditModal}
          onDelete={setProductToDelete}
        />
      )}

      {isFormOpen && (
        <ProductForm
          initialData={editingProduct}
          onSubmit={handleSaveProduct}
          onClose={() => { setIsFormOpen(false); setEditingProduct(null); }}
        />
      )}

      <ConfirmationModal
        isOpen={!!productToDelete}
        onClose={() => setProductToDelete(null)}
        onConfirm={handleDeleteProduct}
        title="Delete Product"
        message={`Are you sure you want to delete "${productToDelete?.name}"? This action cannot be undone.`}
      />
    </div>
  );
}
