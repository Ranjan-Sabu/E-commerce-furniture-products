import React from 'react'
import { useContext,useState } from 'react';
import { myContext } from '../Context';
import {useNavigate } from 'react-router-dom';

function AdminProduct() {
  const { product, setProduct } = useContext(myContext);

  const navigate = useNavigate();
  // const [ids,setIds]=useState()
  const [category,setCategory]=useState()
  const [name,setName]=useState()
  const [price,setPrice]=useState()
  const [image,setImage]=useState()
  const [quantity,setQuantity]=useState(1)



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !price ) {
      alert('Please fill in all required fields.');
      return;
    }

  
    

    setProduct((item)=>(item = [...product,{category:category,name:name,price:price,image:image,id:product.length+1,quantity:parseInt(quantity)}]));

  
    navigate('/AdminHome');
  };

    
  return (
    <div style={{textAlign:"center",backgroundColor:"#EFB5B0"}}>
      <h1 style={{color:"#384B03"}}>Add New Products </h1>
     
    <div style={{backgroundColor:"#FDC9C6"}}>
      
      <input type="text" value={category}   onChange={(e) => setCategory(e.target.value)}  /><br/>
      <label>Category</label><br/>

      
      <input type="text" value={name}   onChange={(e) => setName(e.target.value)}/><br/>
      <label>Name</label><br/>

     
      <input type="number" value={price}    onChange={(e) => setPrice(e.target.value)}/><br/>
      <label>Price</label><br/>

      
      <input type="text" value={image}    onChange={(e) => setImage(e.target.value)}/><br/>
      <label>Image</label><br/>
    </div><br/>
    <button onClick={handleSubmit} style={{backgroundColor:"#879818"}}>Add</button>

</div>
);
}

export default AdminProduct