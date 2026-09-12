import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  title: string;
  onProductClick: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
}

export default function ProductGrid({ products, title, onProductClick, onToggleFavorite, isFavorite }: ProductGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-500">{products.length} منتج</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-50"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {product.badge}
                </div>
              )}
              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(product);
                }}
                className="absolute top-3 left-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all"
              >
                <svg
                  className={`w-5 h-5 transition-colors ${isFavorite(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
                  viewBox="0 0 24 24"
                  fill={isFavorite(product.id) ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
              {/* Quick Add */}
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onProductClick(product);
                  }}
                  className="w-full py-2 bg-white text-gray-800 text-sm font-semibold rounded-lg hover:bg-amber-50 transition-colors"
                >
                  عرض التفاصيل
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-3" onClick={() => onProductClick(product)}>
              <h4 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-1 cursor-pointer hover:text-amber-600 transition-colors">
                {product.name}
              </h4>
              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-200'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-400">({product.reviews})</span>
              </div>
              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-amber-600">{product.price} ر.س</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice} ر.س</span>
                )}
              </div>
              {/* Colors */}
              <div className="flex items-center gap-1 mt-2">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full border border-gray-200 shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
