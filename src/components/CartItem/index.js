import * as React from 'react';
import './styles.css';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartItem = ({ counts, decrease, increase, active }) => {

    return (
        <div className='cart-item-container'>
            <div className='item-label'>
                <div>
                    <p>Product name</p>
                    <p>$50.00</p>
                </div>
                <div className='buttons'>
                    <button>S</button>
                    <button className={`${active && 'active'}`}>M</button>
                </div>
            </div>
            <div className='select-item'>
                <div className='control-product'>
                    <button onClick={() => { increase() }}>
                        <AiOutlinePlus color='black' />
                    </button>
                    <p>{counts}</p>
                    <button onClick={() => { decrease() }} disabled={counts < 1}>
                        <AiOutlineMinus />
                    </button>
                </div>
                <div className='product-image'>
                    <img src="assets/product.png" alt="product" />
                </div>
            </div>
        </div>
    );
}
export default CartItem