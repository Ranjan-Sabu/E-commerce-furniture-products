import React, { useState } from 'react';
import { useContext } from 'react';
import { myContext } from '../Context';
import { useNavigate } from 'react-router-dom';


export default function AdminHome() {
  const { product, setProduct } = useContext(myContext);
  const removeItem = (itemId) => {
    const updateCart = product.filter((item) => item.id !== itemId);
    setProduct(updateCart);
  };
  const navigate=useNavigate()
  const handleSubmit=(item)=>{

    navigate(`/viewadmin/${item}`)
    
 }

 
  const handleClick = () => {
    navigate('/addproduct');
 
  }
  const handleClicked=()=>{
    navigate('/admininfo')
  }

  return ( 
  <>
  <button onClick={handleClick}  class="btn btn-primary float-start" style={{backgroundColor: "cyan",color:"black"}}>Add Product</button>
  <button onClick={handleClicked}  class="btn btn-primary float-end" style={{backgroundColor: "cyan",color:"black"}}>Users</button>
  
     
    <div class="container">
        <table class="table table-responsive">
            <thead class="col">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">image</th>
                    <th scope="col">name</th>
                    <th scope="col">category</th>
                    <th scope="col">price</th>
                    <th scope="col">modify</th>
                </tr>
            </thead>
      
     <tbody>
      {product.map((item)=>(
        <tr>
          <td>{item.id}</td>
          <td><img style={{width:'40px',height:'40px'}} src={item.image}/></td>
          <td>{item.name}</td>
          <td>{item.category}</td>
          <td>{item.price}</td>
          <img  onClick={()=>removeItem(item.id)} style={{width:'50px',height:'50px'}} src='data:image/png;base64,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'/>
          <img onClick={()=>handleSubmit(item.id)}  style={{width:'50px',height:'50px',color:"green"}} src='https://cdn-icons-png.flaticon.com/512/84/84380.png'/>
         </tr>
        ))}
        </tbody>
      </table>
    </div>
    </>
  );
}