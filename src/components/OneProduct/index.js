import * as React from 'react'
import './styles.css'
const OneProduct = ({ productDetail }) => {
    return (
        <div className='one-product' onClick={() => productDetail()}>
            <img src="assets/product.png" alt='product' className='prduct-image' />
            <p className='product-name'>Apollo Running Short</p>
            <p className='product-price'>$50.00</p>
        </div>
    )
}

export default OneProduct
