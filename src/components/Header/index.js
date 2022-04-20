import * as React from 'react';
import { BsCurrencyDollar, BsChevronDown, BsChevronUp, BsCart2, BsCurrencyEuro, BsCurrencyYen } from "react-icons/bs";
import MyBag from '../MyBag';
import './styles.css';
import { Link } from "react-router-dom";
const tabs = [{ label: 'WOMEN' }, { label: 'MEN' }, { label: 'KIDS' }]
const Header = () => {
    const [activeTab, setActiveTab] = React.useState(0)
    const [isOpenCaret, setIsOpenCaret] = React.useState(false);
    const [currencyIcon, setCurrencyIcon] = React.useState(<BsCurrencyDollar size={30} />);
    const [isOpenBag, setIsOpenBag] = React.useState(false);
    const handleShowCurrency = () => {
        setIsOpenCaret(!isOpenCaret)
    }
    const iconArray = {
        'USD': <BsCurrencyDollar size={30} />,
        'EUR': <BsCurrencyEuro size={30} />,
        'JPY': <BsCurrencyYen size={30} />
    }
    const handleIcon = value => {
        setCurrencyIcon(iconArray[value]);
        setIsOpenCaret(false);
    }
    const handleShowCaret = () => {
        setIsOpenBag(!isOpenBag);
    }
    return (
        <>
            <div className="header-container">
                <div className="header-content">
                    <div className="tabs">
                        {tabs.map((tab, index) => {
                            return (
                                <span
                                    onClick={() => {
                                        setActiveTab(index)
                                    }}
                                    className={`tab ${index === activeTab ? 'active-tab' : ''}`}
                                    key={`tab-${index}`}
                                >
                                    <Link to={`/${tab.label.toLowerCase()}`}> {tab.label}</Link>
                                </span>
                            )
                        })}
                    </div>
                    <div className="logo">
                        <img src="/assets/caret.png" alt="caret" />
                    </div>
                    <div className="nav-bar">
                        <div className='currency'>
                            <span onClick={() => handleShowCurrency()}>
                                {currencyIcon}
                                {!isOpenCaret ? <BsChevronDown /> : <BsChevronUp />}
                            </span>
                            {isOpenCaret && (
                                <div className="caret-menu">
                                    <div className="caret-menu-item">
                                        <p className='currencys' onClick={() => { handleIcon('USD') }}><BsCurrencyDollar size={30} /> USD</p>
                                        <p className='currencys' onClick={() => { handleIcon('EUR') }}><BsCurrencyEuro size={30} /> EUR</p>
                                        <p className='currencys' onClick={() => { handleIcon('JPY') }}><BsCurrencyYen size={30} /> JPY</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='cart-container'>
                            <BsCart2 size={30} onClick={() => handleShowCaret()} />
                            <MyBag isVisible={isOpenBag} />
                        </div>
                    </div>
                </div>
            </div>
            {isOpenBag && <div className='overlay' />}
        </>
    )
}

export default Header
