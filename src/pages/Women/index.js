import * as React from 'react';
import './styles.css';
import OneProduct from '../../components/OneProduct';
import { useNavigate } from 'react-router-dom';
const Women = () => {
    const navigate = useNavigate();

    const showDetails = () => {
        navigate("/product");

    }
    return (
        <div className='products-container'>
            <h1>Category name</h1>
            <div className='product-contents'>
                <OneProduct productDetail={showDetails} />
                <OneProduct productDetail={showDetails} />
                <OneProduct productDetail={showDetails} />
                <OneProduct productDetail={showDetails} />
                <OneProduct productDetail={showDetails} />
                <OneProduct productDetail={showDetails} />
            </div>
        </div>
    )
}
export default Women;