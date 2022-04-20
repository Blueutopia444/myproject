import * as React from 'react';
import './styles.css';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const OneItem = ({ counts, decrease, increase }) => {

    return (
        <>
            <div className='one-item-container'>
                <div className='item-label'>
                    <p>Product name</p>
                    <p>$50.00</p>
                    <div className='buttons'>
                        <button>S</button>
                        <button disabled>M</button>
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
        </>
    );
}
export default OneItem