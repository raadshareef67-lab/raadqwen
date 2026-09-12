import Header from '../components/Header';
import Products from '../components/Products';
import Footer from '../components/Footer';

const CategoryPage = ({ categoryName }) => {
  return (
    <div className="app">
      <Header />
      <main>
        <Products categoryFilter={categoryName} />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
