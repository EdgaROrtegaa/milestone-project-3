function Login  (){
    return(
        <div class="form-container">
        <h2>Login</h2>
        <form action="/login" method="post">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input   type="text" id="name" name="username" placeholder="Enter your name" required autocomplete="off"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">password:</label>
            <input type="password" id="password" name="password" placeholder="password" required/>
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <p>Don't have an account? <a className="link" href="/signup">SignUp</a></p>
      </div>
    )
}  
export default Login