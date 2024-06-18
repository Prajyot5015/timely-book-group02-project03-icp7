import React,{useState} from 'react';
import './OrderNow.css'

function App() {
  return (
    <div className="App">
      <OrderNow />
    </div>
  );
}

function OrderNow() {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    Movie_Theater: '',
    item: '',
    quantity: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="order-now-container">
      <h1>Order Now..🍟</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={orderDetails.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Movie_Theater:
              <input
                type="text"
                name="address"
                value={orderDetails.address}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Item:
              <input
                type="text"
                name="item"
                value={orderDetails.item}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={orderDetails.quantity}
                onChange={handleChange}
                required
                min="1"
              />
            </label>
          </div>
          <button type="submit">Submit Order</button>
        </form>
      ) : (
        <div className="order-confirmation">
          <h2>Order Confirmation</h2>
          <p><strong>Name:</strong> {orderDetails.name}</p>
          <p><strong>Movie_Theater:</strong> {orderDetails.address}</p>
          <p><strong>Item:</strong> {orderDetails.item}</p>
          <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
          <button onClick={() => setSubmitted(false)}>Edit Order</button>
        </div>
      )}
    </div>
  );
}

export default App;