import ProductInfo from '../components/ProductInfo.jsx';
import products from '../data/products.js';
import styles from './Page.module.css';

function Products() {
  return (
    <section>
      <h1 className={styles.heading}>Products</h1>
      <p className={styles.sub}>Choose a colour and quantity for each item.</p>
      <div className={styles.stack}>
        {products.map((p) => (
          <ProductInfo
            key={p.id}
            name={p.name}
            price={p.price}
            description={p.description}
            stock={p.stock}
            colors={p.colors}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
