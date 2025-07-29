import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      const sizes = cartItems[productId];
      for (const size in sizes) {
        const quantity = sizes[size];
        if (quantity > 0) {
          tempData.push({
            id: productId,
            size,
            quantity,
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14 px-4 sm:px-10'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {cartData.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
      ) : (
        <div>
          {cartData.map((item) => {
            const productData = products.find((product) => product._id === item.id);
            if (!productData) return null;

            return (
              <div
                key={`${item.id}-${item.size}`}
                className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
              >
                {/* Product Image + Info */}
                <div className='flex items-start gap-6'>
                  <img
                    className='w-16 sm:w-20 rounded'
                    src={productData?.image?.[0] || '/fallback.jpg'}
                    alt={productData.name}
                  />
                  <div>
                    <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                    <p className='text-sm text-gray-500 mt-1'>
                      Size:{' '}
                      <span className='px-2 py-1 border rounded'>{item.size}</span>
                    </p>
                    <p className='text-sm text-gray-500 mt-1'>
                      Price: {currency}
                      {productData.price}
                    </p>
                    <p className='text-sm text-gray-500 mt-1'>
                      Subtotal: {currency}
                      {(productData.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity Input */}
                <div className='flex justify-center'>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, item.size, Math.max(1, Number(e.target.value)))
                    }
                    className="w-16 sm:w-20 border border-gray-300 rounded px-2 py-1 text-center"
                  />
                </div>

                {/* Remove Button */}
                <div className='flex justify-center'>
                  <img
                    onClick={() => updateQuantity(item.id, item.size, 0)}
                    className='w-4 sm:w-5 cursor-pointer hover:opacity-70 transition'
                    src={assets.bin_icon}
                    alt="Remove"
                    title="Remove item"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Cart Total Section */}
      {cartData.length > 0 && (
        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal />
            <div className='w-full text-end'>
              <button
                onClick={() => navigate('/place-order')}
                className='bg-black text-white text-sm my-8 px-6 py-2 rounded hover:bg-gray-800 transition-all'
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
