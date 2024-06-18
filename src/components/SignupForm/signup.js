import "./signup.css"
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer'
import { Link } from "react-router-dom"



function SignupForm() {
    return (
        <>
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
                <Link to={"/"}>
                <button className="btn">Signup</button></Link>
                <p class="actext">Already Have An Account?<Link to={"/login"} className='navbar-items' >Log in</Link>
                </p>
            </div>
        </form>
     <Footer />
     </>
    )
}
export default SignupForm