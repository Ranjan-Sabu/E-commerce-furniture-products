import React, { useEffect } from 'react'
// import "../App.css"
import { Link, useNavigate,useLocation} from 'react-router-dom'
import { useState } from 'react'
import Search from './Search'
import { useContext } from 'react'
import { myContext } from '../Context'
import './Navbar.css'



function Navbar() {
   const { isLoggedIn,setLoggedIn } = useContext(myContext);
  const [userName,setUserName]=useState("")
  const [searchTerm,setSeachTerm]=useState("")
  const navigate=useNavigate();
  const location=useLocation();
  useEffect(()=>{
const loggedIn=localStorage.getItem("loggedIn")==="true"
setLoggedIn(loggedIn);
  },[]);
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("users"));
    if(user && user.length>0){
    setUserName(user[0].username);
    }else{
      setUserName("");
    }
  },[])
  useEffect(() => {
    // When the route changes, re-render the Navbar component to update the UI
    setLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, [location.pathname]); // Listen for changes in the route path


  const handleLogout = () => {
    // Clear the logged-in flag in localStorage and update the state
    localStorage.removeItem("loggedIn");
  
    setLoggedIn(false);
    setUserName("");
  };

  const handleLogIn = () => {
    localStorage.removeItem("loggedIn");
   
     // Remove user data
    navigate("/login");
  };
  const handleLog = () => {
   
   
     // Remove user data
    navigate("/cart");
  };

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
    <div class="container-fluid" style={{backgroundColor:" #BD8E4A"}}>
      <a class="navbar-brand" href="#"><img src='https://i.pinimg.com/280x280_RS/2d/e6/7a/2de67a72acdbbb17cdd4b851c5ff947b.jpg' style={{width:"180px", height:"60px"}}/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><Link to='/' class="home">Home</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><Link to='/products' class="home">Products</Link></a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event)=>
            setSeachTerm(event.target.value)
          }/>
         
        </form>
        {
          isLoggedIn?
        
       <> <button class="btn btn" type="submit" onClick={handleLogout}>Logout</button>
        <button class="btn btn" type="submit" onClick={handleLog}>Cart</button></>
        :<button class="btn btn" type="submit" onClick={handleLogIn}>Login</button>
       
      }
        <li>
          {
            isLoggedIn?
             
          <p>{userName}</p>
          :""}
          </li>
        
      </div>
    </div>
  </nav>
  <Search searchTerm={searchTerm}/>

</>
  )
}

export default Navbar