import * as React from 'react';
import './styles.css';
import CartItem from '../../components/CartItem';
const Cart = () => {
    const [counts, setCounts] = React.useState(0);
    const increase = (id) => {
        const updateValue = counts + 1;
        setCounts(updateValue);
    };

    const decrease = (id) => {
        const updateValue = counts - 1;
        setCounts(updateValue);
    };
    const isActive = true;
    return (
        <div className='cart-container'>
            <h1>CART</h1>
            <div className='cart-items'>
                <CartItem increase={increase} decrease={decrease} counts={counts} active={isActive} />
                <CartItem increase={increase} decrease={decrease} counts={counts} active={isActive} />
            </div>
        </div>
    )
}
export default Cart;