import "./signup.css"


function SignupForm() {
    return (

        <form>
            <div className="content">
                <h3 className="text">User Name</h3>
                <input type="text" className="input" />
                <h3 className="text">Email</h3>
                <input type="email" className="input" />
                <h3 className="text">Password</h3>
                <input type="password" className="input" />
                 <h3 className="text">Mobile No</h3>
                <input type="password" className="input" /> 
                <h3 className="text">Address</h3>
                <input type="password"className="input"/>
               
                <button className="btn">Signup</button>
                <p class="actext">Already Have An Account? <span>Login</span></p>
            </div>
        </form>





    )
}
export default SignupForm