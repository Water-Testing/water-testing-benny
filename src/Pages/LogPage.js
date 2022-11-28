import React from 'react';
import '../css/uikit.css';
import '../css/uikit.min.css';
import img from '../Images/watertestlog.png';
import img2 from '../Images/form_image.png';
import NavBar from './NavBars/Navbar';
import '../css/LogPage.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';



class logPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { password: 'default', email: 'default' };
        this.getPassword = this.getPassword.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    updateEmail = (event) => {
        this.setState({ email: event.target.value });

    }

    updatePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    updateUser = (event) => {
        this.setState({ email: event.target.value });
        this.setState({ password: event.target.value });
    }

    getPassword = (event) => {
        alert(this.state.value);
    }
    render() {
        const imgs = <img src={img} />;
        const formImage = <img src={img2} />;
        const passwordIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        </svg>;

        const usernameIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </svg>;



        return (
            <>
                <NavBar />
                <div className='box-container uk-card uk-padding-large'>
                    <div className='uk-column-1-2@l uk-column-1-1@s signBox uk-card uk-card-default'>

                        <div className='form-leftSide'>
                            <div className='form-image'>{formImage}</div>
                        </div>

                        <div className='form-rightSide uk-flex uk-flex-center'>
                            <form className='form uk-card uk-card-body uk-card-default uk-height-large uk-height-max-large uk-margin-xlarge-top uk-margin-auto-top@l uk-animation-slide-left'>
                                <div class="uk-margin uk-flex uk-flex-center">
                                    <div class="form-floating mb-3">
                                        <input type="email" onChange={this.updateEmail} class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>


                                </div>

                                <div class="uk-margin uk-flex uk-flex-center">
                                    <div class="form-floating">
                                        <input type="password" onChange={this.updatePassword} class="form-control" id="floatingPassword" placeholder="Password" required/>
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                </div>
                                <div className='uk-margin-top forgot-section'>
                                    <button className='uk-button  uk-button-small uk-light'>forgot password</button>
                                    <button className='uk-button  uk-button-small uk-light'>forgot username</button>
                                </div>

                                <div className='uk-margin-top regLog uk-flex uk-flex-center'>
                                    <button className='uk-button uk-button-default  uk-button-small uk-light' onClick={this.updateUser}>Sign In</button>

                                </div>



                            </form>



                        </div>

                        <div className='uk-flex uk-flex-center uk-text-center uk-animation-slide-left '>
                            <div className='uk-margin-top uk-light'>


                                <p className='uk-text-small'>Don't have an account yet?</p>
                                <Link to="/register"><button className='uk-button'>Create an account</button></Link>
                            </div>


                        </div>






                    </div>

                </div>



            </>


        )

    }



}

export default logPage;