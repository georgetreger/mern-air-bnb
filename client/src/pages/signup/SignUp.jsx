import './SignUp.css'
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="signup">
      <h1>  Sign Up</h1>
      <form>
        <input type="text" id="username" placeholder="Username" />
        <input type="text" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
         <button className='btn'>Sign Up</button>
      </form>
       <div className="account">
         <p>Have an account?</p>
          <Link to={'/sign-in'}>
          <span className='spa'>Sign In</span>
          </Link>
       </div>
    </div>
  );
}
