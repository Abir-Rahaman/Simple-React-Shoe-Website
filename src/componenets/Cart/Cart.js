import React from 'react';

const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total=total + product.price;
        shipping = shipping+product.shipping;
    }
    let tax = parseFloat((total * 0.1).toFixed(1));
    const grand = (total + tax + shipping).toFixed(2);
    return (
        <div className='order-section' >
            <h2 className='text-center' > Order Summery </h2>
            <h5> Selected Items : {cart.length} </h5>
            <h6> Total Price : {total} </h6>
            <h6> Shipping Cost : {shipping} </h6>
            <h6> Tax : {tax} </h6>
            <h6> Grand Total : {grand} </h6>
        </div>
    );
};

export default Cart;