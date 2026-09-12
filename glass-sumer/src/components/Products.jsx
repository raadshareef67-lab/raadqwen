import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../CartContext';

const products = [
  { id: 1, name: 'نظارة شمسية كلاسيك', price: 89.99, category: 'رجال', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop' },
  { id: 2, name: 'نظارة أفيتiator ذهبية', price: 129.99, category: 'رجال', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop' },
  { id: 3, name: 'نظارة شمسية مودرن', price: 99.99, category: 'نساء', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop' },
  { id: 4, name: 'نظارة كاتي اي', price: 119.99, category: 'نساء', image: 'https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?w=400&h=400&fit=crop' },
  { id: 5, name: 'نظارة رياضية', price: 69.99, category: 'أولاد', image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=400&fit=crop' },
  { id: 6, name: 'نظارة ملونة', price: 59.99, category: 'بنات', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop' },
  { id: 7, name: 'نظارة فاخرة', price: 199.99, category: 'رجال', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop' },
  { id: 8, name: 'نظارة أنيقة', price: 149.99, category: 'نساء', image: 'https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?w=400&h=400&fit=crop' },
];

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            <ShoppingCart size={18} />
            أضف للسلة
          </button>
          <button 
            className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
            onClick={() => addToWishlist(product)}
          >
            <Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = ({ categoryFilter }) => {
  const filteredProducts = categoryFilter 
    ? products.filter(p => p.category === categoryFilter)
    : products;

  return (
    <section className="products">
      <h2 className="section-title">
        {categoryFilter ? `نظارات ${categoryFilter}` : 'الأكثر مبيعاً'}
      </h2>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
