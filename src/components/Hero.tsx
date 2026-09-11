export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-600 font-medium">عروض الصيف - خصم حتى 50%</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              اكتشف <span className="bg-gradient-to-l from-amber-500 to-orange-600 bg-clip-text text-transparent">أناقتك</span>
              <br />
              مع كل شعاع شمس
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto md:mx-0 md:mr-0">
              مجموعة حصرية من أفخم النظارات الشمسية العالمية بأفضل الأسعار
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button className="px-8 py-3.5 bg-gradient-to-l from-amber-500 to-orange-500 text-white font-semibold rounded-full shadow-lg shadow-amber-200/50 hover:shadow-amber-300/60 hover:scale-105 transition-all">
                تسوق الآن
              </button>
              <button className="px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all border border-gray-100">
                المجموعات الجديدة
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"
                alt="نظارات شمسية"
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/50"
              />
              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-lg text-sm font-bold text-amber-600 animate-bounce">
                🔥 عروض حصرية
              </div>
              <div className="absolute bottom-8 left-0 bg-white px-3 py-1.5 rounded-full shadow-lg text-sm font-bold text-green-600">
                ✓ شحن مجاني
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
