import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>اكتشف مجموعتنا الحصرية من النظارات الشمسية</h1>
            <p>أفضل الماركات العالمية بأفضل الأسعار - جودة وأناقة تدوم طويلاً</p>
            <Link to="/products" className="hero-btn">تسوق الآن</Link>
          </div>
        </section>
        <Categories />
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
