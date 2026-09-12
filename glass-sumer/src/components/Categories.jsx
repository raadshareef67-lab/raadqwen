import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'رجال', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=600&fit=crop', link: '/men' },
  { id: 2, name: 'نساء', image: 'https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?w=500&h=600&fit=crop', link: '/women' },
  { id: 3, name: 'أولاد', image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=500&h=600&fit=crop', link: '/boys' },
  { id: 4, name: 'بنات', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&h=600&fit=crop', link: '/girls' },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="section-title">تسوق حسب الفئة</h2>
      <div className="category-grid">
        {categories.map(category => (
          <Link to={category.link} key={category.id} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-overlay">
              <h3 className="category-name">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
