import { Page } from '../App';

interface BottomNavProps {
  currentPage: Page;
  cartCount: number;
  favoritesCount: number;
  onNavigate: (page: Page) => void;
}

export default function BottomNav({ currentPage, cartCount, favoritesCount, onNavigate }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 shadow-lg z-50 md:hidden">
      <div className="flex items-center justify-around py-2 px-4">
        {/* Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all ${
            currentPage === 'home' ? 'text-amber-600' : 'text-gray-400'
          }`}
        >
          <svg className="w-6 h-6" fill={currentPage === 'home' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" strokeWidth={currentPage === 'home' ? 0 : 2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs font-medium">الرئيسية</span>
        </button>

        {/* Categories */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all ${
            currentPage === 'category' ? 'text-amber-600' : 'text-gray-400'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="text-xs font-medium">الأقسام</span>
        </button>

        {/* Favorites */}
        <button
          onClick={() => onNavigate('favorites')}
          className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all relative ${
            currentPage === 'favorites' ? 'text-amber-600' : 'text-gray-400'
          }`}
        >
          <div className="relative">
            <svg className="w-6 h-6" fill={currentPage === 'favorites' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </div>
          <span className="text-xs font-medium">المفضلة</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => onNavigate('cart')}
          className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all relative ${
            currentPage === 'cart' ? 'text-amber-600' : 'text-gray-400'
          }`}
        >
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-xs font-medium">السلة</span>
        </button>

        {/* Profile */}
        <button
          className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all text-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs font-medium">حسابي</span>
        </button>
      </div>
    </nav>
  );
}
