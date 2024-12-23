
const Login = () => {
    return (
        <div className="main-login-container">

            <div className="login-container">
                <div className="login-form" id="loginForm">
                    <h1 style={{ color: 'white' }}>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className='bx bxl-google-plus'></i></a>
                        <a href="#" className="icon"><i className='bx bxl-facebook'></i></a>
                        <a href="#" className="icon"><i className='bx bxl-github'></i></a>
                        <a href="#" className="icon"><i className='bx bxl-linkedin'></i></a>
                    </div>

                    <div className="form-message-container">
                        <span>Or use your email and password</span>
                    </div>

                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign In</button>
                        <a href="#">Forgot Your Password?</a>
                    </form>
                </div>
                <div className="signup-form hidden" id="signupForm">
                    <h1>Create An Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className='bx bxl-google-plus'></i></a>
                        <a href="#" className="icon"><i className='bx bxl-facebook'></i></a>
                        <a href="#" className="icon"><i className='bx bxl-github'></i></a>
                        <a href="#" className="icon"><i className='bx bxl-linkedin'></i></a>
                    </div>
                    <div className="form-message-container">
                        <span>Or use your email for registration</span>
                    </div>

                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                    <p>Already have an account? <a href="#" id="showLogin">Sign In</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login