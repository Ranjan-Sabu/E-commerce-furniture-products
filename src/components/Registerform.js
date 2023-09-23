import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';



function Registerform() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

const navigate = useNavigate();

const handleSignup = (e) => {
  e.preventDefault();


  // Validation

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/


  if (!username || !email || !password ||!repassword) {
    alert('Please fill in all fields!');
    return;
  }
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  if (password != repassword ){
    alert(`Password Doesn't match`);
    return;
  }

  console.log(`Signup with username: ${username}, email: ${email}, and password: ${password}`);


  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const isUserExists = existingUsers.some((user) => user.username === username);


  if (isUserExists) {
    alert('Username already exists. Please choose a different one.');
    return;
  }



  // Create a new user object and add it to local storage
  
  const newUser = { username, email, password };
  existingUsers.push(newUser);
  localStorage.setItem('users', JSON.stringify(existingUsers));

  setUsername('');
  setEmail('');
  setPassword('');
  setRePassword('');

  navigate('/Login');
};


  return (
    <div style={{width:"100%",height:"900px", backgroundColor:"#E8E3DD"}}>
<section class="vh-100 bg-image"
>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100" >
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card "  style={{backgroundColor:"#492D25"}}>
            <div class="card-body p-5 text-white">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" value={username}onChange={(e) => setUsername(e.target.value)}/>
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" value={email}onChange={(e) => setEmail(e.target.value)}/>
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" value={password}onChange={(e) => setPassword(e.target.value)}/>
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" value={repassword}onChange={(e) => setRePassword(e.target.value)}/>
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-blue"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button
                    class="btn btn-outline-light btn-lg px-5" onClick={handleSignup} type='submit'>Register</button>
                </div>

                <p class="text-center text-white mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u><Link to='/login'>Login here</Link></u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Registerform