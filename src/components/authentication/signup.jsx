import  { useState } from "react";
import Logo from "../logo/logo.js";
import "./signup.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function SignUp(){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return(
        <div className="signup-container">

            <div className="logo">
                <Logo size={120} />
            </div>

            <div className="signup-box">
                <h1>Sign Up</h1>

                <form >
                    <input type="text" placeholder="First Name" className="signup-input" />
                    <input type="text" placeholder="Last Name" className="signup-input" />
                    <input type="text" placeholder="Email" className="signup-input" />

                    <div className="password-wrapper">
                        <input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="signup-input" />
                        <span  
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword?  <VisibilityIcon style={{ fontSize: 18 }} />  
                        :  
                        <VisibilityOffIcon style={{ fontSize: 18 }} /> }
                        </span>
                    </div>

                    <div className="password-wrapper">
                        <input 
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="signup-input" />
                        <span  
                        className="eye-icon"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword?  <VisibilityIcon style={{ fontSize: 18 }} />  
                        :  
                        <VisibilityOffIcon style={{ fontSize: 18 }} /> }
                        </span>
                    </div>

                    <button className="signup-button">Sign Up</button>
                    
                </form>
            </div>
        </div>
    );
}