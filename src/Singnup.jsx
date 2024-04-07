import Login from './Components/Login';
import './Login.css'
function SignUp(){
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
                <input type='Password' placeholder='Verify Password' />
             </div>
             <div>
                <button>SignIn</button>
             </div>   
             <div>
               <p>Already have an account</p>
               <button style={{color:"blue"}} onClick={Login}>Login</button>
            </div>
          </div>
        </div>
}

export default SignUp;
