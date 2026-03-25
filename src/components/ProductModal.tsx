import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "./ui/dialog";
  import { ImageWithFallback } from "./figma/ImageWithFallback";
  import type { Product } from "./ProductCard";
  
  interface ProductModalProps {
    product: Product | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
  
  export function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
    if (!product) return null;
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{product.name}</DialogTitle>
            <DialogDescription>
              {product.condition && `Condition: ${product.condition}`}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 mb-6">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Price</p>
                <p className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact Seller
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }