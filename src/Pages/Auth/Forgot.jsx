import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import ImageLazyLoading from "../Components/ImageLazyLoading";
import Logo from '../Components/Logo';
import { FacebookLoginButton, GoogleLoginButton , AmazonLoginButton   } from "react-social-login-buttons";
import { Link } from 'react-router-dom';
const Imagewall =  require("../../Assets/images/box.jpg");


function Forgot() {
  const [Fullname, setFullname] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);



  return (
    <div className='authentication'>
        <div className="authentication-area"> 
             <div className="form-area">
                 <div className="form-box">
                    <Form>
                        <div className="info">
                            <Logo index={1} />
                            <h1>Reset !with no wories.</h1>
                            <p>After insert your email, we will send a reset password link to your inbox.</p> 
                        </div> 
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="ex: kiosso@gmail.com" />
                        </Form.Group>  
                        <button className="btn col bg-black text-light">Submit now</button>
                        <div className="d-flex mt-2">No need to reset password ? <Link to="/signin" className='text-yellow'> signin</Link> </div>
                    </Form>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Forgot