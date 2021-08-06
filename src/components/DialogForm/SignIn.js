import React, { useEffect, useState } from 'react'
import './SignIn.css'
 

function SignIn({signIn, setSignIn,click,setClick}) {
    
   
    const [create,setCreate] = useState(true);
    const [e,setE] = useState("");
    const [p,setP] = useState("");
    const email = "sid@gmail.com";
    const pass = "1234";

    useEffect(()=>{
        
        if(create)
        {
            const a = document.querySelectorAll(".signup");
            a.forEach(element => {
                element.classList.remove("fade");
            });

            const b = document.querySelectorAll(".signin");
            b.forEach(element => {
                element.classList.add("fade");
            });
        }
        else{
            const a = document.querySelectorAll(".signup");
            a.forEach(element => {
                element.classList.add("fade");
            });


            const b = document.querySelectorAll(".signin");
            b.forEach(element => {
                element.classList.remove("fade");
            });
        }

    },[create])

 
    
    const setEmail = (event)=>{
       let x = event.target.value;
        setE(x);
 
    }
    const setPass = (event)=>{
       let y = event.target.value;
        setP(y);
        
    }

    
    const check = ()=>{
        

      

        if(e === email && p=== pass)
        {
            document.querySelector(".left").classList.add("fade");
            document.querySelector(".right").classList.add("fade");
            document.querySelector(".signedin").classList.remove("fade");
            document.querySelector(".desc").classList.add("fade");
            setSignIn(!signIn);
        }
        else{
            alert("Email or Password is Incorrect");
        }


    }
    
  
    
    return (
        <>
        <div className="overlay" style={{display: `${click? '': 'none'}`}}></div>
        <div className="signinCont" style={{display: `${click? '': 'none'}`}}>
            <div className="close" onClick={()=>setClick(!click)}>
            <i class="fa fa-close"></i>
            </div>
            <div className="signHeader">
                <p>
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </p>
            </div>

            <div className="signinContainer">
                <div className="left">
                    <div className="signup ">
                    <h2>Create Account</h2>
                    <div className="createAcc">
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password"/>
                        <button>Create Account</button> <p className="signup phone" onClick={()=>setCreate(!create)}> or, Sign IN</p>
                        <div className="facebook">
                            <img src={require("../../images/facebook.png").default} alt="" />
                            <span>Sign Up with Facebook</span>
                        </div>
                        <div className="google">
                        <img src={require("../../images/google.png").default} alt="" />
                            <span>Sign Up with Google</span>
                        </div>
                    </div>
                    </div>

                    <div className="signin ">
                    <h2>Sign In</h2>
                    <div className="sign">
                        
                        <input id="email" type="email" placeholder="Email" onChange={setEmail}/>
                        <input id="pass" type="password" placeholder="Password" onChange={setPass}/>
                        
                        <button onClick={()=>check()}>Sign In</button>
                        <p className="signin phone" onClick={()=>setCreate(!create)}> or, Create Account</p>

                        
                        <div className="facebook">
                            <img src={require("../../images/facebook.png").default} alt="" />
                            <span>Sign In with Facebook</span>
                        </div>
                        <div className="google">
                        <img src={require("../../images/google.png").default} alt="" />
                            <span>Sign In with Google</span>
                        </div>
                    </div>
                    </div>


                </div>
                <div className="right">
                    <h4 className="signup ">Already have an account? <span style={{color: 'blue', cursor: 'pointer'}} onClick={()=>setCreate(!create)}>Sign In</span></h4>
                    <h4 className="signin ">Don’t have an account yet? <span style={{color: 'blue',cursor: 'pointer', fontSize: '10px'}} onClick={()=>setCreate(!create)}>Create new for free!</span></h4>
                    <img src={require("../../images/Group 3.png").default} alt="" />
                    <p className="signup">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
                
                <div className="desc">
                <p className="signup">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                <p className="signin">Forgot Password?</p>
                </div>

                
                

                <div className="signedin fade">
                    <h1>Sign In Successful</h1>
                </div>

                
               
               

            </div>
            
        </div>
        </>
    )
}

export default SignIn
