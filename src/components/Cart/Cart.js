import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const{ cart } = props;
    
    // const reducer = (previous, current) => previous+ (current.price * current.quantity);
    // const cost =  cart.reduce(reducer, 0);
    let cost = 0;
    let totalQuantity = 0;
    for(let product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        cost = cost+ (product.price * product.quantity);
        totalQuantity = totalQuantity+ product.quantity;
    }
    const shipping = (cost*0.05);
    const subTotal = (cost+shipping);
    const tax = (subTotal*.10);
    const total = (subTotal+tax);
   
    return (
        <div>
            <div className='cart-container p-3'>
                <h1>Total items = {totalQuantity}</h1>
                <div className="row mb-3 border-bottom">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6>Cost:</h6>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6>${cost}</h6>
                    </div>
                </div>
                <div className="row mb-3 border-bottom">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6>Shipping Cost:</h6>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6>${shipping.toFixed(2)}</h6>
                    </div>
                </div>
                <div className="row mb-3 border-bottom">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6>Sub Total:</h6>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6>${subTotal.toFixed(2)}</h6>
                    </div>
                </div>
                <div className="row mb-3 border-bottom">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6>Tax :</h6>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6>${tax.toFixed(2)}</h6>
                    </div>
                </div>
                <div className="row mb-3 border-bottom">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6>Total:</h6>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6>${total.toFixed(2)}</h6>
                    </div>
                </div>






            </div>


        </div>
    );
};

export default Cart;