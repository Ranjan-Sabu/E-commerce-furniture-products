import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'



function Login() {
  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Login with username: ${username} and passward: ${password}`)

  
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }
   
    // Check if the user exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find((u) => u.username === username && u.password === password);
   
    if (user) {
      // Set a flag in local storage to indicate the user is logged in
      localStorage.setItem('loggedIn', 'true');
      alert('Login successful!');

      navigate('/');
    }
    else if(username==='admin'&&password==='123'){

        alert('Welcome Admin');
  
        navigate('/AdminHome');
      
     }
     else {
      alert('Invalid username or password.');
    }

    //Clear the form fields
    setUsername('');

    setPassword('');


    

  }

 
  return (
    <section class=" gradient-custom" style={{backgroundColor:"#E8E3DD"}}>
    <div class="container py-1 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100" >
        <div class="col-12 col-md-8 col-lg- col-xl-5">
          <div class="card  text-white"style={{backgroundColor:" #492D25",height:"600px"}} >
            <div class="card-body p-5 text-center">
  
              <div class="mb-md-5 mt-md-4 pb-3 ">
  
                <h2 class="fw-bold mb-0 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">Please enter your login and password!</p>
  
                <div class="form-outline form-white mb-4">
                  <input type="text" id="typeTextX" class="form-control form-control-lg" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} required/>
                  <label class="form-label" for="typeTextX">Username</label>
                  
                </div>
  
                <div class="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX"  class="form-control form-control-lg" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                  <label class="form-label" for="typePasswordX">Password</label>
              
                </div>
  
                <p class="small mb-2 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
  
                <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleLogin}>Login</button>
  
                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                </div>
                <div>
                <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold"><Link to='/Register'>Sign Up</Link></a>
                </p>
              </div>
              </div>
  
             
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login