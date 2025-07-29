import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { products, assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { ProductId } = useParams();
  const { addToCart } = useContext(ShopContext); // ✅ get from context

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const foundProduct = products.find((item) => item._id === ProductId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [ProductId]);

  return productData ? (
    <div className='p-4'>
      <div className='flex flex-col sm:flex-row gap-8'>

        {/* Image Gallery */}
        <div className='flex flex-col sm:flex-row gap-4'>
          {/* Thumbnails */}
          <div className='w-44 flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto'>
            {productData.image.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setImage(img)}
                className='w-16 h-16 object-cover cursor-pointer border hover:border-black'
              />
            ))}
          </div>
          {/* Main Image */}
          <img src={image} alt="Main" className='w-full max-w-md object-contain' />
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

          {/* Star Rating */}
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className='w-3.5' />
            ))}
            <img src={assets.star_dull_icon} alt="star" className='w-3.5' />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>${productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          {/* Size Selection */}
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded ${item === size
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'bg-gray-100 text-black'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className='bg-black text-white py-3 px-6 rounded hover:opacity-90'
          >
            ADD TO CART
          </button>

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original products.</p>
            <p>Easy delivery available on this product.</p>
            <p>Easy return and exchange within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : null;
};

export default Product;
