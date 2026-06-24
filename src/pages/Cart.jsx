import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {

    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="cart-item"
                        >
                            <h3>{item.name}</h3>

                            <p>
                                PKR {item.price.toLocaleString()}
                            </p>

                            <p>
                                Quantity: {item.quantity}
                            </p>

                            <div>
                                <button
                                    onClick={() =>
                                        decreaseQuantity(item.id)
                                    }
                                >
                                    -
                                </button>

                                <button
                                    onClick={() =>
                                        increaseQuantity(item.id)
                                    }
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={() =>
                                    removeFromCart(index)
                                }
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <h2>
                        Total: PKR{" "}
                        {total.toLocaleString()}
                    </h2>

                    <button
                        className="checkout-btn"
                        onClick={() => navigate("/checkout")}
                    >
                        Checkout
                    </button>
                </>
            )}
        </div>
    );

}

export default Cart;