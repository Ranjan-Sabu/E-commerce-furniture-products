import React, { useContext } from 'react'
import { furnitures } from './Productdata';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../Context';


function Search({searchTerm}) {
  const navigate=useNavigate()
  const {product}=useContext(myContext)




  return (
   
    <div className="container">
      {
      searchTerm
        ? product
            .filter((val) =>
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        .map((val) => (
             <div className="d-inline-flex"  >
            <div className="col-md-4 p-2" key={val.id} style={{width:"275px"}}>
            <div className="card mb-4 p-4" >
              <img
                className="card-img-top"
                src={val.image} style={{width:"200px"}}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{val.category}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: ₹{val.price}</li>
              </ul>
              <div className="card-body text-center">
              <button className="btn btn-primary" onClick={()=>navigate(`/viewproducts/${val.id}`)}>
                 View Product
                 </button>
              </div>
            </div>
          </div>
          </div>
        ))
        :" "}
      </div>
        
  );
  
        
 }
  




export default Search