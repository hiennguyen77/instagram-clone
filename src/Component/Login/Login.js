import './Login.css';
import loginImage from '../../img/instagram-on-iphone-12-free-mockup-2.png';
import loginLogo from '../../img/Instagram_logo.svg.png';
import logoFb from '../../img/facebook-icon.png';


function Login() {
    
// ========================== Return ===================================
    return(

        <div className='form_login'>
            <div className='form_login_container'>
                <div className='img_container'>
                    <img className='item-img' src={loginImage} alt='loginImage'/>
                </div>
                <div className='login_container'>
                    <div className='login_logo'>
                        <img className='logo_item' src ={loginLogo} alt ='logo login'/>
                    </div>
                    <form className='login_acc'>
                        <div className='login_form_email'>
                            <input className='form_email' placeholder='Phone number, user name or email'/>
                        </div>
                        <div className='login_form_password'>
                            <input className='form_password' placeholder='Phone number, user name or email'/>
                        </div>
                        <div className='login_form_btn'>
                            <button className='form_btn'>
                                <a className='login_link_btn' href='/home'>Log In</a>
                            </button>
                        </div>
                        <div className='login_others'>
                            <h4 className='text_or'>OR</h4>
                            <div className='login_fb'>
                                <img className='logo_fb' src ={logoFb} alt='logo facebook'/>
                                <a className='login_link' href='/home'>Login with facebook</a>
                            </div>
                            <span className='login_forgot'>Forgot password ?</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       

    );
}

export default Login;