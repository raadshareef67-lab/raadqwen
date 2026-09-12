interface CategoriesProps {
  onCategoryClick: (category: string) => void;
}

const categories = [
  {
    id: 'men',
    name: 'رجال',
    icon: '🕶️',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    count: 156
  },
  {
    id: 'women',
    name: 'نساء',
    icon: '👓',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    count: 234
  },
  {
    id: 'boys',
    name: 'أولاد',
    icon: '🧒',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    count: 89
  },
  {
    id: 'girls',
    name: 'بنات',
    icon: '👧',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    count: 112
  }
];

export default function Categories({ onCategoryClick }: CategoriesProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">تسوق حسب القسم</h3>
        <button className="text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors">
          عرض الكل ←
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryClick(cat.id)}
            className={`${cat.bgColor} rounded-2xl p-5 text-center group hover:scale-105 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100`}
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-1">{cat.name}</h4>
            <p className="text-xs text-gray-500">{cat.count} منتج</p>
            <div className={`mt-3 h-1 w-12 mx-auto bg-gradient-to-r ${cat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
          </button>
        ))}
      </div>
    </section>
  );
}
