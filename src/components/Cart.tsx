import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onBack: () => void;
}

export default function Cart({ items, onRemove, onUpdateQuantity, onBack }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = total > 200 ? 0 : 25;
  const grandTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">سلتك فارغة</h2>
        <p className="text-gray-500 mb-6">لم تقم بإضافة أي منتجات بعد</p>
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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-gray-900">سلة المشتريات</h2>
          <span className="bg-amber-100 text-amber-700 text-sm font-bold px-3 py-1 rounded-full">
            {items.length} منتج
          </span>
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 flex gap-4"
          >
            <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-800 text-sm mb-1 truncate">{item.product.name}</h4>
              <p className="text-amber-600 font-bold mb-2">{item.product.price} ر.س</p>
              <div className="flex items-center justify-between">
                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-gray-50 rounded-full px-1">
                  <button
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-600"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-600"
                  >
                    +
                  </button>
                </div>
                {/* Remove Button */}
                <button
                  onClick={() => onRemove(item.product.id)}
                  className="text-red-400 hover:text-red-600 transition-colors p-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50">
        <h3 className="font-bold text-gray-800 mb-4 text-lg">ملخص الطلب</h3>
        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-gray-600">
            <span>المجموع الفرعي</span>
            <span>{total} ر.س</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>الشحن</span>
            <span className={shipping === 0 ? 'text-green-500 font-medium' : ''}>
              {shipping === 0 ? 'مجاني' : `${shipping} ر.س`}
            </span>
          </div>
          {shipping > 0 && (
            <p className="text-xs text-amber-600 bg-amber-50 rounded-lg p-2">
              أضف منتجات بقيمة {200 - total} ر.س للحصول على شحن مجاني
            </p>
          )}
          <div className="border-t border-gray-100 pt-3 flex justify-between">
            <span className="font-bold text-gray-900 text-lg">الإجمالي</span>
            <span className="font-bold text-amber-600 text-lg">{grandTotal} ر.س</span>
          </div>
        </div>
        <button className="w-full py-4 bg-gradient-to-l from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-amber-200/50 hover:shadow-amber-300/60 hover:scale-[1.02] transition-all">
          إتمام الشراء
        </button>
      </div>
    </div>
  );
}
