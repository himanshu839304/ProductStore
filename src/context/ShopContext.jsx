import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // ✅ You missed this import
import { products } from "../assets/assets";
import { toast } from "react-toastify";

// Create context with default values
export const ShopContext = createContext({
    products: [],
    currency: "$",
    delivery_fee: 0,
    search: "",
    setSearch: () => { },
    showSearch: false,
    setShowSearch: () => { },
    cartItems: {},
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
    getCartCount: () => { },
    updateQuantity: () => { },
    getCartAmount: () => { },
    navigate: () => { },
});

const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const delivery_fee = 10;
    const navigate = useNavigate(); // ✅ Moved to top for clarity

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Clone cart data safely
    const cloneCart = (data) => {
        return typeof structuredClone === "function"
            ? structuredClone(data)
            : JSON.parse(JSON.stringify(data));
    };

    // Add to cart logic
    const addToCart = useCallback((itemId, size) => {
        if (!size) {
            toast.error("Select product size");
            return;
        }

        const cartData = cloneCart(cartItems);
        if (cartData[itemId]) {
            cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        setCartItems(cartData);
        toast.success("Item added to cart");
    }, [cartItems]);

    // Remove from cart logic
    const removeFromCart = useCallback((itemId, size) => {
        const cartData = cloneCart(cartItems);
        if (cartData[itemId]?.[size]) {
            cartData[itemId][size] -= 1;
            if (cartData[itemId][size] <= 0) delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) delete cartData[itemId];
            setCartItems(cartData);
        }
    }, [cartItems]);

    // Clear entire cart
    const clearCart = () => {
        setCartItems({});
        localStorage.removeItem("cartItems");
    };

    // Get total count of items in cart
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                totalCount += cartItems[itemId][size];
            }
        }
        return totalCount;
    };

    // Update item quantity
    const updateQuantity = useCallback((itemId, size, quantity) => {
        const cartData = cloneCart(cartItems);
        if (quantity <= 0) {
            if (cartData[itemId]) {
                delete cartData[itemId][size];
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        } else {
            if (!cartData[itemId]) cartData[itemId] = {};
            cartData[itemId][size] = quantity;
        }
        setCartItems(cartData);
    }, [cartItems]);

    // Calculate total amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const product = products.find(p => p._id === itemId);
            if (!product) continue;
            for (const size in cartItems[itemId]) {
                totalAmount += product.price * cartItems[itemId][size];
            }
        }
        return totalAmount;
    };

    // Context value
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
