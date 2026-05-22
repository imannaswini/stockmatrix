import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Package } from 'lucide-react';

import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      <header className="sticky top-0 z-40 w-full glass border-b border-white/5 px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <Package size={18} className="text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg tracking-tight">StockMatrix</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-muted-foreground/30 to-muted flex items-center justify-center border border-white/10 shadow-inner cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-xs font-medium">AD</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Dashboard />
        </div>
      </main>
      
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="glass-card text-foreground border-white/10 shadow-2xl rounded-xl !bg-background/80"
      />
    </div>
  );
}

export default App;
