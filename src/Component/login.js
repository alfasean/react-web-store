const Login = () => {
    return (
        <div className="wrapper">
         <div className="title">
            Login Form
         </div>
         <form id="form_login" role="form" onsubmit="signIn(event);" autocomplete="off">
            <div className="field">
               <input type="email" name="email" id="login_email" required></input>
               <label>Email Address</label>
            </div>
            <div className="field">
               <input type="password" name="pwd" id="login_password" required> </input>
               <label>Password</label>
            </div>
            <div className="field">
               <input type="submit" value="Login"></input>
            </div>
            <div className="signup-link">
               Not a member? <a href="signup.html">Signup now</a>
            </div>
         </form>
      </div>
    )
} 

export default Login;