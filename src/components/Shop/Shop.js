import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect( ()=> {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddtoCart = (product)=> {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(cart);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8 items-container overflow-auto">
                    {
                        products.map(product => <Product key = {product.id} handleAddtoCart ={handleAddtoCart} product = {product}></Product>)
                    }
                </div>
                <div className="col-lg-4">
                    <Cart cart = {cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;