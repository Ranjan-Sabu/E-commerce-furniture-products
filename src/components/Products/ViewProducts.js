import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myContext } from "../Context";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ViewProducts() {
  const { id } = useParams();
  const { product, cart, setCart,isLoggedIn } = useContext(myContext);
  const navigate = useNavigate();

  // Filter the product that matches the 'id' parameter
  const viewProduct = product.filter((product) => product.id === parseInt(id));

  if (viewProduct.length === 0) {
    // Handle the product is not found
    return <h1 style={{ textAlign: "center" }}>Product not found</h1>;
  }


  const handleAddToCart = () => {
    // Check if the product is already in the cart
    if (cart.find((item) => item.id === viewProduct[0].id)) {
      alert("Product is already added to the cart");
    } else {
      // Add the selected product to the cart
      setCart([...cart, viewProduct[0]]);
      
      alert("Product successfully added to the cart");
    }
    navigate("/Cart");
  };

  

  return (

  <div class="container py-5"  style={{backgroundcolor: "#eee;"}}>
   {viewProduct.map((item) => (
        <div key={item.id}>
    <div class="row justify-content-center">
   
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card text-black">
          <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img src={item.image}
            class="card-img-top" alt={item.name} />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">{item.name}</h5>
              <p class="text-muted mb-4">{item.category}</p>
            </div>
            <div>
              <div class="d-flex justify-content-center align-items-center">
                <span>Price:₹{item.price}</span>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
             
             {isLoggedIn===true?(
            <button onClick={handleAddToCart} >add to cart</button>)
           : (<button onClick={()=>{navigate('/login')}} >add to cart</button>)
            }
              </div>
          </div>
        </div>
      </div>
    </div>
    
   
  </div>
   ))}
  </div>

  );
}