function OrderSuccess() {
  const orderNumber = Math.floor(
    100000 + Math.random() * 900000
  );

  return (
    <div className="success-page">
      <h1>🎉 Order Placed Successfully</h1>

      <p>
        Thank you for shopping with
        AlahmarShop.
      </p>

      <h2>
        Order #: {orderNumber}
      </h2>

      <p>
        Our team will contact you soon.
      </p>
    </div>
  );
}

export default OrderSuccess;