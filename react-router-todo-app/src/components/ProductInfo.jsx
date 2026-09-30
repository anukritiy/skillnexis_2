import { useState } from 'react';
import styles from './ProductInfo.module.css';

// Props: name, price, description, stock, colors
// State: selected color, quantity, items added to cart
function ProductInfo({ name, price, description, stock, colors }) {
  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(0);

  const total = (price * quantity).toLocaleString('en-IN');
  const remaining = stock - inCart;

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => Math.min(remaining, q + 1));

  const addToCart = () => {
    setInCart((n) => n + quantity);
    setQuantity(1);
  };

  return (
    <article className={styles.product}>
      <div className={styles.swatch} style={{ background: color.hex }} aria-hidden="true" />

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.row}>
          <span className={styles.label}>Colour: {color.name}</span>
          <div className={styles.colors}>
            {colors.map((c) => (
              <button
                key={c.name}
                type="button"
                className={`${styles.colorButton} ${c.name === color.name ? styles.selected : ''}`}
                style={{ background: c.hex }}
                aria-label={c.name}
                aria-pressed={c.name === color.name}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Quantity</span>
          <div className={styles.stepper}>
            <button type="button" onClick={decrease} disabled={quantity <= 1} aria-label="Decrease quantity">
              −
            </button>
            <output aria-live="polite">{quantity}</output>
            <button type="button" onClick={increase} disabled={quantity >= remaining} aria-label="Increase quantity">
              +
            </button>
          </div>
          <span className={styles.stock}>
            {remaining === 0 ? 'Sold out' : `${remaining} left`}
          </span>
        </div>

        <div className={styles.footer}>
          <span className={styles.price}>₹{total}</span>
          <button type="button" className={styles.add} onClick={addToCart} disabled={remaining === 0}>
            Add to cart
          </button>
        </div>

        {inCart > 0 && <p className={styles.cart}>In your cart: {inCart}</p>}
      </div>
    </article>
  );
}

export default ProductInfo;
