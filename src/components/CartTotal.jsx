import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    const subtotal = getCartAmount();
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

    return (
        <div className='w-full bg-white p-6 rounded-2xl shadow-lg'>
            <div className='text-2xl text-center mb-4'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className='flex flex-col gap-4 text-[16px]'>
                <div className='flex justify-between text-gray-600'>
                    <p>Subtotal</p>
                    <p className='font-semibold text-black'>{currency}{subtotal.toFixed(2)}</p>
                </div>
                <hr className='border-gray-300' />
                <div className='flex justify-between text-gray-600'>
                    <p>Shipping Fee</p>
                    <p className='font-semibold text-black'>{currency}{delivery_fee.toFixed(2)}.00</p>
                </div>
                <hr className='border-gray-300' />
                <div className='flex justify-between text-lg font-bold text-blue-700'>
                    <p>Total</p>
                    <p>{currency}{total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
