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
    return(
      <section class="h-100" style={{backgroundColor:" #eee;"}}>
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
        </div>

        <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
        {cart.map((item) => (
            <div class="row d-flex justify-content-between align-items-center" key={item.id}>
              
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src={item.image}
                  class="img-fluid rounded-3" alt={item.name}/>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">{item.category}</p>
                <p>{item.name}</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
  <div class="btn-group">
    <button
      class="btn btn-outline-primary"
      onClick={() => increaseCount(item.id)}
    >
      <i class="fas fa-plus">+</i>
    </button>
    <h5 class="mx-2">{item.quantity}</h5>
    <button
      class="btn btn-outline-primary"
      onClick={() => decreaseCount(item.id)}
    >
      <i class="fas fa-minus">-</i>
    </button>
  </div>
</div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">₹{item.price * item.quantity}</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <img src="https://thumbs.dreamstime.com/z/rounded-151782555.jpg?w=768" onClick={() => removeItem(item.id)} style={{width:"50px",height:"50px"}}/>
              </div>
            </div>
                 ))}
          </div>
   
        </div>
        
      
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
                  </div>
                  </div>
        <div class="card mb-4">
          <div class="card-body p-4 d-flex flex-row">
            <div class="form-outline flex-fill">
              <input type="text" id="form1" class="form-control form-control-lg" />
              <label class="form-label" for="form1">Discount code</label>
            </div>
            <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

        
   ) }
    
    
