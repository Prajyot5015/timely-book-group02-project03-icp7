import "./login.css"
import Navbar from './../../components/Navbar/Navbar';
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
                <button className="btn" onclick="form()">Login</button>
                <p class="actext">Create An Accout?<Link to={"/signup"}className="span">SignUp</Link></p>
            </div>
        </form>
        </>

    )
}
export default LoginForm