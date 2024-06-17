import "./signup.css"
import Navbar from './../../components/Navbar/Navbar';
import { Link } from "react-router-dom"



function SignupForm() {
    return (

        <form>
            <Navbar />
            <div className="content">
                <h3 className="text">User Name</h3>
                <input type="text" className="input" required />
                <h3 className="text">Email</h3>
                <input type="email" className="input"  required/>
                <h3 className="text">Password</h3>
                <input type="password" className="input" required />
                 <h3 className="text">Mobile No</h3>
                <input type="password" className="input" required /> 
                <h3 className="text">Address</h3>
                <input type="password"className="input" required/>
               
                <button className="btn">Signup</button>
                <p class="actext">Already Have An Account?<Link to="../LoginForm/login.js"className="span">Login</Link></p>
            </div>
        </form>






    )
}
export default SignupForm