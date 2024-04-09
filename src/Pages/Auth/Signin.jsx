import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import ImageLazyLoading from "../Components/ImageLazyLoading";
import Logo from '../Components/Logo';
import { FacebookLoginButton, GoogleLoginButton , AmazonLoginButton   } from "react-social-login-buttons";
import { Link } from 'react-router-dom';
const Imagewall =  require("../../Assets/images/box.jpg");

function Signin() { 
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);



  return (
    <div className='authentication'>
        <div className="authentication-area">
             <div className="image-area">
                 <ImageLazyLoading source={Imagewall} />
             </div>
             <div className="form-area">
                 <div className="form-box">
                    <Form>
                        <div className="info">
                            <Logo index={1} />
                            <h1>Hello ! Welcome back.</h1>
                            <p>Sign in with your data and the world is yours.</p> 
                        </div> 
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="ex: kiosso@gmail.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="ex: 123kiosso#" />
                        </Form.Group>
                        <div className="link mb-2"><Link to="/forgot_password" className='text-yellow'>Forgot password ?</Link> </div>
                        <button className="btn col bg-black text-light">Signin</button>
                        <div className="or">
                             <div className="ln"></div>
                              <div className="txt">OR</div>
                             <div className="ln"></div>
                        </div>
                        <div className="blocks mb-2"> 
                            <GoogleLoginButton  onClick={() => alert("Hello")} />
                            <AmazonLoginButton  onClick={() => alert("Hello")} />
                        </div>
                        <div className="d-flex mt-2">Do not have an account ? <Link to="/signup" className='text-yellow'> signup</Link> </div>
                    </Form>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Signin