import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: boolean;
}

export default function ProductDetail({ product, onBack, onAddToCart, onToggleFavorite, isFavorite }: ProductDetailProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-amber-600 mb-6 transition-colors"
      >
        <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-medium">العودة</span>
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.badge && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              {product.badge}
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
              -{discount}%
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-200'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm">{product.rating} ({product.reviews} تقييم)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-amber-600">{product.price} ر.س</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">{product.originalPrice} ر.س</span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          {/* Colors */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">الألوان المتاحة</h4>
            <div className="flex items-center gap-3">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-sm hover:scale-110 hover:border-amber-400 transition-all"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-600">حماية UV400</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-600">عدسات مستقطبة</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-600">ضمان سنة</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-600">شحن مجاني</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-auto">
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 py-4 bg-gradient-to-l from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-amber-200/50 hover:shadow-amber-300/60 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              أضف إلى السلة
            </button>
            <button
              onClick={() => onToggleFavorite(product)}
              className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all hover:scale-105 ${
                isFavorite
                  ? 'border-red-200 bg-red-50'
                  : 'border-gray-200 bg-white hover:border-amber-200'
              }`}
            >
              <svg
                className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
                viewBox="0 0 24 24"
                fill={isFavorite ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
