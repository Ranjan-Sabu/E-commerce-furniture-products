import React, { useState } from 'react';
import { myContext } from '../Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const SofasSeating = () => {
  const {product}=useContext(myContext)

  const SofasSeatingItem=product.filter((item)=>item.category==='Sofas & Seating')
  const navigate=useNavigate()

  const handleSubmit=(item)=>{

    navigate(`/viewproducts/${item}`)
  }

  return (
    <div className="container">
       <div><img src='https://www.harpersfurniture.co.uk/uploads/images_front_page_banners_2019/XL2-Summer-Ends.jpg' style={{width:'100%',height:'auto'}}></img></div>
      <h1 className=" text-white text-center"style={{background:"#724935"}}>Products</h1>
     
        {SofasSeatingItem.map((item) => (
             <div className="d-inline-flex">
          <div className="col-md-4 p-2" key={item.id} style={{width:"275px"}}>
            <div className="card mb-4 p-4">
              <img
                className="card-img-top"
                src={item.image} style={{width:"200px"}}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: ₹{item.price}</li>
              </ul>
              <div className="card-body text-center">
              <button className="btn btn-primary" onClick={()=>handleSubmit(item.id)}>
                 View Product
                 </button>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
   
  );
};

export default SofasSeating;