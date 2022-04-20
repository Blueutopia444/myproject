import * as React from 'react';
import './styles.css';
import OneItem from '../OneItem';
const MyBag = ({ isVisible }) => {
    const [counts, setCounts] = React.useState(1);
    const increase = (id) => {
        const updateValue = counts + 1;
        setCounts(updateValue);
    };

    const decrease = (id) => {
        const updateValue = counts - 1;
        setCounts(updateValue);
    };
    const checkout = () => {
        console.log('checkout');
    };

    const viewBag = () => {
        console.log('viewBag');
    }

    return (
        <>

            <div className={`bag-container ${isVisible ? 'open-bag' : 'close-bag'}`}>
                <p className='mybag-title'>MyBag.<span>2 items</span></p>
                <OneItem increase={increase} decrease={decrease} counts={counts} />
                <div className='total-counts'>
                    <p>Total</p>
                    <p>$100.00</p>
                </div>
                <div className='checkout-buttons'>
                    <button onClick={() => { viewBag() }}>VIEW BAG</button>
                    <button onClick={() => { checkout() }}>CHECK OUT</button>
                </div>
            </div>
        </>
    );
}
export default MyBag