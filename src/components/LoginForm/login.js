import "./login.css"


function LoginForm() {
    return (

        <form>
            <div className="content">
                <h3 className="text">User Name</h3>
                <input type="text" className="input" placeholder="User Name" id="name" />
                <h3 className="text">Password</h3>
                <input type="password" className="input" placeholder="Password" id="pass" />
                <button className="btn" onclick="form()">Login</button>
                <p class="actext">Create An Accout? <span>Signup</span></p>
            </div>
        </form>




    )
}


export default LoginForm