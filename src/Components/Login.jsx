import React from 'react';
import '../Login.css'
import SignUp from '../Singnup'
function Login(object){
  return <div id='Form'>
           <h2>Please sign to your Account</h2>
           <div id='container'>
             <div>
               <input type='text' placeholder='Email Address'/>
              </div>
             <div>
                <input type='Password' placeholder='Password' />
             </div>
             <div>
                <button>Login</button>
             </div>   
             <div>
               <p>Don't have an account</p>
               <p style={{color:"blue"}} onClick={<SignUp/>}>{object.content}</p>

            </div>
          </div>
        </div>
}

export default Login;