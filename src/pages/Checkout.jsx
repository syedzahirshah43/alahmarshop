import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

function Checkout() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");


  const { cart, clearCart } = useCart();

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <form
        className="checkout-form"
        onSubmit={async (e) => {
          e.preventDefault();

          if (!name || !phone || !city || !address) {
            alert("Please fill all required fields");
            return;
          }

          const orderData = {
            name,
            phone,
            city,
            address,
            paymentMethod,
            orderDate: new Date(),
          };

          try {
            const response = await axios.post(
              "http://localhost:5000/api/orders",
              orderData
            );

            console.log(response.data);

            const productsText = cart
              .map(
                (item) =>
                  `• ${item.name} x ${item.quantity} - PKR ${item.price * item.quantity
                  }`
              )
              .join("\n");

            const totalAmount = cart.reduce(
              (total, item) => total + item.price,
              0
            );

            const whatsappMessage = `
🛒 New Order - AlahmarShop

👤 Name: ${name}
📞 Phone: ${phone}
🏙 City: ${city}

📍 Address:
${address}

📦 Products:
${productsText}

💰 Total Amount:
PKR ${totalAmount}

💳 Payment Method:
${paymentMethod}
`;

            const whatsappUrl =
              `https://wa.me/923349184409?text=${encodeURIComponent(
                whatsappMessage
              )}`;

            clearCart();

            window.open(whatsappUrl, "_blank");

            navigate("/order-success");
          } catch (error) {
            console.error(error);
            alert("Order failed");
          }
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <textarea
          placeholder="Complete Address"
          rows="4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="COD">Cash On Delivery</option>
          <option value="EasyPaisa">EasyPaisa</option>
          <option value="JazzCash">JazzCash</option>
        </select>
        {paymentMethod === "EasyPaisa" && (
          <div className="payment-info">
            <h3>EasyPaisa Payment</h3>

            <p>
              Send Payment To:
              <strong> 03349184409</strong>
            </p>

            <p>
              After payment, send screenshot on WhatsApp.
            </p>
          </div>
        )}

        {paymentMethod === "JazzCash" && (
          <div className="payment-info">
            <h3>JazzCash Payment</h3>

            <p>
              Send Payment To:
              <strong> 03349184409</strong>
            </p>

            <p>
              After payment, send screenshot on WhatsApp.
            </p>
          </div>
        )}

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;