import { Product } from '../types';

interface FavoritesProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  onBack: () => void;
}

export default function Favorites({ products, onProductClick, onToggleFavorite, onBack }: FavoritesProps) {
  if (products.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">قائمة المفضلة فارغة</h2>
        <p className="text-gray-500 mb-6">لم تقم بإضافة أي منتجات للمفضلة بعد</p>
        <button
          onClick={onBack}
          className="px-8 py-3 bg-gradient-to-l from-amber-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all"
        >
          تصفح المنتجات
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 group-hover:border-amber-300 group-hover:shadow-md transition-all">
            <svg className="w-5 h-5 text-gray-600 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="font-medium text-gray-600 group-hover:text-amber-600 transition-colors hidden sm:inline">العودة للرئيسية</span>
        </button>
        <h2 className="text-2xl font-bold text-gray-900">المفضلة</h2>
        <span className="bg-red-100 text-red-600 text-sm font-bold px-3 py-1 rounded-full">
          {products.length} منتج
        </span>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-50"
          >
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                onClick={() => onProductClick(product)}
              />
              <button
                onClick={() => onToggleFavorite(product)}
                className="absolute top-3 left-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all"
              >
                <svg className="w-5 h-5 text-red-500 fill-red-500" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={2}>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>
            <div className="p-3 cursor-pointer" onClick={() => onProductClick(product)}>
              <h4 className="font-semibold text-gray-800 text-sm mb-1 truncate">{product.name}</h4>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-amber-600">{product.price} ر.س</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
