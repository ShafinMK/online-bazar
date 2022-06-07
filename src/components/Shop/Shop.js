import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect( ()=> {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data) ;
            setDisplayProducts(data);
        })
    }, []);

    const handleAddtoCart = (product)=> {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(cart);
    }
   
    const handleSearch = event =>{
        let searchText = event.target.value;
        let matchedText = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedText);
        console.log(matchedText.length);
    };
    return (
        <div className='container border'>
            <input onChange={handleSearch} type="text" className='form-control my-5' placeholder='Search Products' name="" id="" />
            <div className="row">
                <div className="col-lg-8 items-container overflow-auto">
                    {
                       displayProducts.map(product => <Product key = {product.id} handleAddtoCart ={handleAddtoCart} product = {product}></Product>)
                       
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