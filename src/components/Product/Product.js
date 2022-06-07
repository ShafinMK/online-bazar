import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCartArrowDown, faUser } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
    const { stock, seller, ratingsCount, ratings, price, img, category, name } = props.product;
    const element = <FontAwesomeIcon icon={faCartArrowDown} />

    return (
        <div>

            <div className="row mt-5 shadow rounded">
                <div className="col-lg-4 p-0">
                    <img src={img} className='img-fluid' alt="" />
                </div>
                <div className="col-lg-8">
                    <h1 className=''>{name}</h1>
                    <h6>by: {seller}</h6>
                    <h4>${price}</h4>
                    <p className='mt-5'><small>Only {stock} items left</small></p>
                    <div className="row">
                        <div className="col-6"><Rating emptySymbol="fa fa-regular fa-star" fullSymbol="fa fa-solid fa-star" initialRating={ratings} readonly></Rating></div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faUser} />{ratingsCount}
                        </div>
                    </div>
                    <br />
                    <button onClick={() => props.handleAddtoCart(props.product)} className='btn cart-btn btn-light' type="button">{element}Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;