import { useState } from "react";
import { ProductCard, type Product } from "./components/ProductCard";
import { ProductModal } from "./components/ProductModal";

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Garmin GPS Navigator Pro",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1754821305530-8e3c7b8deda2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHUFMlMjBuYXZpZ2F0aW9uJTIwZGV2aWNlfGVufDF8fHx8MTc3NDM2MDU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Excellent",
  },
  {
    id: "2",
    name: "Vintage Motorola Walkie Talkie Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1771581133326-4b32949d8e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd2Fsa2llJTIwdGFsa2llfGVufDF8fHx8MTc3NDM2MDU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Good",
  },
  {
    id: "3",
    name: "HAM Radio Transceiver",
    price: 425.00,
    image: "https://images.unsplash.com/photo-1758910071619-5bb4bdc5de68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpbyUyMGNvbW11bmljYXRpb24lMjBkZXZpY2V8ZW58MXx8fHwxNzc0MzE2NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Excellent",
  },
  {
    id: "4",
    name: "Marine Radar System",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1769655990753-8e8957bc2435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjByYWRhciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzQzNjA1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Very Good",
  },
  {
    id: "5",
    name: "CB Radio Communication Device",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1771581133326-4b32949d8e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQiUyMHJhZGlvfGVufDF8fHx8MTc3NDM2MDU5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Good",
  },
  {
    id: "6",
    name: "Satellite Phone - Global Coverage",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1613934898711-c27b605a0fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBwaG9uZXxlbnwxfHx8fDE3NzQzNjA1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Excellent",
  },
  {
    id: "7",
    name: "Handheld GPS Tracker",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1650304003871-2bdb8aa62dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kaGVsZCUyMEdQU3xlbnwxfHx8fDE3NzQzNjA1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Very Good",
  },
  {
    id: "8",
    name: "Aviation Pilot Headset",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1764547168017-5ad7741ebdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmlhdGlvbiUyMGhlYWRzZXR8ZW58MXx8fHwxNzc0MzYwNTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Excellent",
  },
  {
    id: "9",
    name: "Marine VHF Radio",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1562072299-8ecc43a8c709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpbmUlMjBWSEYlMjByYWRpb3xlbnwxfHx8fDE3NzQzNjA1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Good",
  },
  {
    id: "10",
    name: "Professional Two-Way Radio",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1705265270259-9b947925d581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjB3YXklMjByYWRpb3xlbnwxfHx8fDE3NzQzNjA1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Very Good",
  },
  {
    id: "11",
    name: "Nautical Compass Navigator",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1668864840122-8bdaf2a87e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYXNzJTIwbmF2aWdhdGlvbnxlbnwxfHx8fDE3NzQzNjA1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Good",
  },
  {
    id: "12",
    name: "Aviation Instrument Panel",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1761813409441-5c157440ab98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmlhdGlvbiUyMGluc3RydW1lbnQlMjBwYW5lbHxlbnwxfHx8fDE3NzQzNjA1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    condition: "Excellent",
  },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center">
            Used Communication and Navigation Devices
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Quality pre-owned equipment for professionals and enthusiasts
          </p>
        </div>
      </header>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </main>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}
