import * as React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
const ProductDetail = () => {
    const navigate = useNavigate();
    const handleCaret = () => {
        navigate('/cart')
    }
    return (
        <div className='product-details'>
            <div className='product-images'>
                <div className='product-sub-images'>
                    <img src="assets/product.png" alt='product' className='prduct-image' />
                    <img src="assets/product.png" alt='product' className='prduct-image' />
                    <img src="assets/product.png" alt='product' className='prduct-image' />
                </div>
                <div className='product-main-image'>
                    <img src="assets/product.png" alt='product' className='prduct-image' />
                </div>
            </div>
            <div className='product-description'>
                <div className='description-container'>
                    <div className='product-name'>
                        <p>Apollo</p>
                        <p>Running Shot</p>
                    </div>
                    <div className='product-size'>
                        <p>Size:</p>
                        <div className='size-button'>
                            <button disabled>XS</button>
                            <button className='active'>S</button>
                            <button>M</button>
                            <button>L</button>
                        </div>
                    </div>
                    <div className='product-price'>
                        <p>PRICE:</p>
                        <p>$50.00</p>
                    </div>
                    <div className='add-cart'>
                        <button onClick={() => { handleCaret() }}>ADD TO CART</button>
                    </div>
                    <div className='description-content'>
                        Find Stunning women's cocktail dresses and party dresses. Stand out in lace and metalic cocktail dresses and party dresses from all your favorite brands.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;