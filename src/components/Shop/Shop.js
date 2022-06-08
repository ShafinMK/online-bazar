import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, []);

    const handleAddtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
        // console.log(cart);
    }
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            // console.log(savedCart);
            const addedCart = [];
            for (let key in savedCart) {
                console.log(key, savedCart[key]);
                const addedProduct = products.find(product => key === product.id);
                console.log(addedProduct);
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                addedCart.push(addedProduct);
                console.log(addedCart);
            }
            setCart(addedCart);
        }

        
    }, [products])

    const handleSearch = event => {
        let searchText = event.target.value;
        let matchedText = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedText);
        console.log(matchedText.length);
    };
    return (
        <div className='container border'>
            <input onChange={handleSearch} type="text" className='form-control my-5' placeholder='Search Products' name="" id="" />
            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-12 items-container overflow-auto">
                    {
                        displayProducts.map(product => <Product key={product.id} handleAddtoCart={handleAddtoCart} product={product}></Product>)

                    }
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;