import React, { useDebugValue, useState } from 'react';
import { myContext } from '../Context';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function ViewAdmin() {
  const { product,setProduct } = useContext(myContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const edit = product.find((product) => product.id === parseInt(id)) || {
   id: '',
   category: '',
   name: '',
   price: '',
   image: '',
  };


  const [ids,setIds]=useState(edit.id.toString())
  const [category,setCategory]=useState(edit.category)
  const [name,setName]=useState(edit.name)
  const [price,setPrice]=useState(edit.price.toString())
  const [image,setImage]=useState(edit.image)


  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProducts = {
      id: parseInt(ids),
      category,
      name,
      price: parseFloat(price),
      image,
    };

    const updatedProductList = product.map((item) =>
      item.id === updatedProducts.id ? updatedProducts : item
    );

    setProduct(updatedProductList);

    navigate('/AdminHome/');
  };

  return (
    <div style={{textAlign:"center",backgroundColor:"#879818"}}>
      <h1 style={{color:"green"}}>Edit Products </h1>
        <div>
         
          <input type="text" value={ids}   onChange={(e) => setIds(e.target.value)}  /><br/>
          <label>ID</label><br/>
          
          <input type="text" value={category}   onChange={(e) => setCategory(e.target.value)}/><br/>
          <label>Category</label><br/>

          
          <input type="text" value={name}   onChange={(e) => setName(e.target.value)}/><br/>
          <label>Name</label><br/>

         
          <input type="text" value={price}    onChange={(e) => setPrice(e.target.value)}/><br/>
          <label>Price</label><br/>

          
          <input type="text" value={image}    onChange={(e) => setImage(e.target.value)}/><br/>
          <label>Image</label><br/>
        </div><br/>
        <button onClick={handleSubmit} style={{backgroundColor:"#384B03",color:'white'}}>Edit</button>
    </div>
  );
}

export default ViewAdmin;