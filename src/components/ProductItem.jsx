// ProductItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    return (
        <Link to={`/product/${id}`} className='block group'>
            <div className='overflow-hidden rounded-md'>
                <img
                    src={image[0]} // show first image
                    alt={name}
                    className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
            </div>
            <div className='mt-2 text-sm text-gray-800'>{name}</div>
            <div className='text-sm text-gray-500'>${price}</div>
        </Link>
    );
};

export default ProductItem;
