import React from "react";
import '../css/EmployeeLogin.css';


const empLogin = () => {



    return (
            <div className='uk-flex uk-flex-center uk-background-cover ELogin'>

            
            <form className='form uk-card uk-card-body uk-card-default uk-height-large uk-height-max-large uk-margin-xlarge-top uk-margin-auto-top@l uk-animation-slide-center uk-text-center uk-width-1-3@l'>
                                <h4 className='uk-text-bold text-uppercase pb-2'>Spartan-X</h4>
                                <div class="uk-margin uk-flex uk-flex-center">
                                    <div class="form-floating mb-3">
                                        <input type="email"  class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Username</label>
                                    </div>


                                </div>

                                <div class="uk-margin uk-flex uk-flex-center">
                                    <div class="form-floating">
                                        <input type="password"  class="form-control" id="floatingPassword" placeholder="Password" required/>
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                </div>
                                <div className='uk-margin-top forgot-section'>
                                    <button className='uk-button  uk-button-small uk-light'>forgot password</button>
                                    <button className='uk-button  uk-button-small uk-light'>forgot username</button>
                                </div>

                                <div className='uk-margin-top regLog uk-flex uk-flex-center'>
                                    <button className='uk-button uk-button-default  uk-button-large'>Sign In</button>

                                </div>



                            </form>
                            </div>
        

    )



}

export default empLogin;