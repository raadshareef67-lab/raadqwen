import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Menu } from 'lucide-react';
import { useCart } from '../CartContext';

const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">GLASS SUMMER</Link>
        
        <nav>
          <ul className="nav-menu">
            <li><Link to="/men" className="nav-link">رجال</Link></li>
            <li><Link to="/women" className="nav-link">نساء</Link></li>
            <li><Link to="/boys" className="nav-link">أولاد</Link></li>
            <li><Link to="/girls" className="nav-link">بنات</Link></li>
          </ul>
        </nav>

        <div className="header-icons">
          <button className="icon-btn">
            <Heart size={24} />
          </button>
          <button className="icon-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          <button className="icon-btn mobile-menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
