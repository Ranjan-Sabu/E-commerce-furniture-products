import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {  myContext } from "../Context";


export default function Cart() {
  const { cart, setCart } = useContext(myContext);

  

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const increaseCount = (id) => {
    const updateCount = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updateCount);
  };

  const decreaseCount = (id) => {
    const updateCount = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updateCount);
  };
  
    
      return (
        <section style={{ backgroundColor: "#f9c9aa" }}>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-7 col-xl-5">
                {cart.map((item) => (
                  <div className="row mb-5" key={item.id}>
                    <div className="col-12">
                      <div className="card">
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt={item.name}
                        />
                        <div className="card-body">
                          <div className="card-title d-flex justify-content-between mb-0">
                            <p className="text-muted mb-0">{item.name}</p>
                            <button onClick={() => increaseCount(item.id)}>+</button>
                            <h5>{item.quantity}</h5>
                            <button onClick={() => decreaseCount(item.id)}>-</button>
                            <p className="mb-0">₹{item.price * item.quantity}</p>
                          </div>
                        </div>
                        <button onClick={() => removeItem(item.id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="rounded-bottom" style={{ backgroundColor: "#eee" }}>
                  <div className="card-body">
                    <p className="mb-4">Your payment details</p>
    
                    <div className="form-outline mb-3">
                      <input
                        type="text"
                        id="formControlLgXM8"
                        className="form-control"
                        placeholder="1234 5678 1234 5678"
                      />
                      <label className="form-label" htmlFor="formControlLgXM8">
                        Card Number
                      </label>
                    </div>
    
                    <div className="row mb-3">
                      <div className="col-6">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="formControlLgExpk8"
                            className="form-control"
                            placeholder="MM/YYYY"
                          />
                          <label
                            className="form-label"
                            htmlFor="formControlLgExpk8"
                          >
                            Expire
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="formControlLgcvv8"
                            className="form-control"
                            placeholder="Cvv"
                          />
                          <label
                            className="form-label"
                            htmlFor="formControlLgcvv8"
                          >
                            Cvv
                          </label>
                        </div>
                      </div>
                    </div>
    
                    <button className="btn btn-info btn-block">Order now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    
    
}