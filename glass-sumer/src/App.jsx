import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import { CartSidebar } from './CartSidebar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <CartSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<CategoryPage categoryName="رجال" />} />
          <Route path="/women" element={<CategoryPage categoryName="نساء" />} />
          <Route path="/boys" element={<CategoryPage categoryName="أولاد" />} />
          <Route path="/girls" element={<CategoryPage categoryName="بنات" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
