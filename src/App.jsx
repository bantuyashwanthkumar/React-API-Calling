import react from "react";

// import Employe from "./Employe";
// const App = () => {

//   const user = {
//     username: "bantu",
//     email: "[EMAIL_ADDRESS]",
//     age: 21,
//     city: "hyderabad"
//   }

//   localStorage.setItem("user", JSON.stringify(user));
//   const user1 = localStorage.getItem("user");
//   console.log(user1);

//   return <div>
//     <h1>{user.username}</h1>
//     <p>{user.email}</p>
//     <p>{user.age}</p>
//     <p>{user.city}</p>
//     <Employe />
//   </div>;
// }

// export default App

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  // Move useState inside the component
  const [udata, setudata] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      // fetch api method
      // const response = await fetch('https://fakestoreapi.com/products')
      // const data = await response.json()
      // console.log(data);

      // ---- axios api method
      const response = await axios.get('https://fakestoreapi.com/products');
      setudata(response.data);
      console.log("Data fetched:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Modern Store</h1>
        <button className="fetch-btn" onClick={getData}>
          {loading ? "Loading..." : "Get Data"}
        </button>
      </header>

      {loading && <div className="loading">Fetching products...</div>}

      <div className="product-grid">
        {udata.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
            <span className="product-category">{product.category}</span>
            <h2 className="product-title" title={product.title}>
              {product.title}
            </h2>
            <div className="product-footer">
              <span className="product-price">${product.price}</span>
              <div className="product-rating">
                <span>⭐</span>
                <span>{product.rating?.rate}</span>
                <span>({product.rating?.count})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default App;
