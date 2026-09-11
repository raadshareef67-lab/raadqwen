import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import BottomNav from './components/BottomNav';
import { Product, CartItem } from './types';
import { products } from './data/products';

export type Page = 'home' | 'cart' | 'favorites' | 'detail' | 'category';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleFavorite = (product: Product) => {
    setFavorites(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isFavorite = (productId: number) => {
    return favorites.some(p => p.id === productId);
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
  };

  const openCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('category');
  };

  const filteredProducts = products.filter(p =>
    selectedCategory === 'all' ? true : p.category === selectedCategory
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      <Header
        cartCount={cartCount}
        onCartClick={() => setCurrentPage('cart')}
        onLogoClick={() => setCurrentPage('home')}
      />

      {currentPage === 'home' && (
        <>
          <Hero />
          <Categories onCategoryClick={openCategory} />
          <ProductGrid
            products={products}
            title="الأكثر مبيعاً"
            onProductClick={openProductDetail}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        </>
      )}

      {currentPage === 'category' && (
        <ProductGrid
          products={filteredProducts}
          title={
            selectedCategory === 'men' ? 'نظارات رجالية' :
            selectedCategory === 'women' ? 'نظارات نسائية' :
            selectedCategory === 'boys' ? 'نظارات أولاد' :
            'نظارات بنات'
          }
          onProductClick={openProductDetail}
          onToggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      )}

      {currentPage === 'detail' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setCurrentPage('home')}
          onAddToCart={addToCart}
          onToggleFavorite={toggleFavorite}
          isFavorite={isFavorite(selectedProduct.id)}
        />
      )}

      {currentPage === 'cart' && (
        <Cart
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onBack={() => setCurrentPage('home')}
        />
      )}

      {currentPage === 'favorites' && (
        <Favorites
          products={favorites}
          onProductClick={openProductDetail}
          onToggleFavorite={toggleFavorite}
          onBack={() => setCurrentPage('home')}
        />
      )}

      <BottomNav
        currentPage={currentPage}
        cartCount={cartCount}
        favoritesCount={favorites.length}
        onNavigate={setCurrentPage}
      />
    </div>
  );
}

export default App;
