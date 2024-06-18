import "./login.css"
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer'
import { Link } from 'react-router-dom';
function LoginForm() {
    return (
        <>
        <Navbar />
        <form>
            <div className="content ">
                <h3 className="text">User Name</h3>
                <input type="text" className="input" placeholder="User Name" required/>
                <h3 className="text">Password</h3>
                <input type="password" className="input" placeholder="Password"  required/>
                <Link to={"/"}><button className="btn" onclick="form()">Login</button></Link>
                <p class="actext">Create An Accout?<Link to={"/signup"}className="span">SignUp</Link></p>
            </div>
        </form>
        <Footer />
        </>
    )
}
export default LoginForm