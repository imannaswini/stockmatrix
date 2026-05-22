import { X } from 'lucide-react';
import { useEffect } from 'react';

export function ConfirmationModal({ isOpen, onClose, onConfirm, title, message }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-md glass-card rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-white/5">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-muted-foreground/90">{message}</p>
        </div>
        
        <div className="flex justify-end gap-3 p-6 pt-0">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-full font-medium text-foreground bg-transparent border border-white/10 hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-5 py-2.5 rounded-full font-medium text-danger-foreground bg-danger hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(239,68,68,0.2)]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
