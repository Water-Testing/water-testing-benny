import React from 'react';
import '../css/uikit.css';
import '../css/uikit.min.css';
import img from '../Images/watertestlog.png';
import img2 from '../Images/form_image.png';
import NavBar from './NavBars/Navbar';
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';


class Registerpage extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            password: 'default',
            email: 'default',
            firstName: 'default',
            lastName: 'default',
            streetaddress1: 'default',
            streetaddress2: 'default',
            city: 'default',
            state: 'default',
            zipcode: 10000,
            phone: 1234567890

        };
        this.getPassword = this.getPassword.bind(this);
        this.createPassword = this.createPassword.bind(this);
        this.createFirstName = this.createFirstName.bind(this);
        this.createLastName = this.createFirstName.bind(this);
        this.createEmail = this.createEmail.bind(this);
        this.createUser = this.createUser.bind(this);
    }


    createFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }

    createLastName = (event) => {
        this.setState({ lastName: event.target.value });
    }

    createEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    createPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    createUser = (event) => {
        this.setState({ email: event.target.value });
        this.setState({ firstName: event.target.value });
        this.setState({ lastName: event.target.value });
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

        return <>
            <NavBar />
            <div className='box-container uk-card uk-padding-large'>
                <div className='uk-column-1-1@l uk-column-1-1@s signBox uk-card uk-card-default'>
                    <div className='form-rightSide uk-flex uk-flex-center'>
                        <form onSubmit={this.createUser} className='form uk-form-stacked uk-card uk-card-body uk-card-default uk-padding-large uk-height-1-1 uk-margin-xlarge-top uk-margin-auto-top@l uk-animation-slide-left '>

                            <h2 className='uk-text-center uk-text-bold uk-margin-bottom-large'>Customer Registration</h2>
                            <div className='uk-column-1-2@l uk-column-1-1@s'>
                            <div class="uk-margin uk-flex uk-flex-center">
                                <div class="form-floating">
                                    <input type="text" onChange={this.createFirstName} class="form-control" id="floatingInput" placeholder="First Name" required />
                                    <label for="floatingInput">First Name</label>
                                </div>
                            </div>
                            <div class="uk-margin uk-flex uk-flex-center">
                                <div class="form-floating">
                                    <input type="text" onChange={this.createLastName} class="form-control" id="floatingInput" placeholder="Last Name" required />
                                    <label for="floatingInput">Last Name</label>
                                </div>
                            </div>

                            </div>
                            <h3>Address</h3>
                            <div class="uk-margin ">
                                <div class="form-floating">
                                    <input type="text" onChange={this.createPassword} class="form-control" id="floatingPassword" placeholder="Street Address" required />
                                    <label for="floatingPassword">Street Address</label>
                                </div>
                            </div>

                            <div class="uk-margin">
                                <div class="form-floating">
                                    <input type="text" onChange={this.createPassword} class="form-control" id="floatingPassword" placeholder="Street Address Line 2" required />
                                    <label for="floatingPassword">Street Address Line 2</label>
                                </div>
                            </div>
                            <div className='uk-column-1-2@l uk-column-1-1@s'>
                            <div class="uk-margin uk-flex uk-flex-center">
                                <div class="form-floating">
                                    <input type="text" onChange={this.createPassword} class="form-control" id="floatingPassword" placeholder="City" required />
                                    <label for="floatingPassword">City</label>
                                </div>
                            </div>

                            <div class="uk-margin uk-flex uk-flex-center">
                                <div class="form-floating">
                                    <input type="text" onChange={this.createPassword} class="form-control" id="floatingPassword" placeholder="State" required />
                                    <label for="floatingPassword">State</label>
                                </div>
                            </div>


                            </div>

                            <div class="uk-margin">
                                <div class="form-floating">
                                    <input type="text" onChange={this.createPassword} class="form-control" id="floatingPassword" placeholder="ZipCode" required />
                                    <label for="floatingPassword">Postal / ZipCode</label>
                                </div>
                            </div>
                            <h3>Email</h3>
                            <div class="uk-margin">
                                <div class="form-floating mb-3">
                                    <input type="email" onChange={this.createEmail} class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                            </div>

                            <div className='uk-column-1-2@l uk-column-1-1@s'>
                            <h3>Password</h3>
                            <div class="uk-margin">
                                <div class="form-floating">
                                    <input type="password" onChange={this.createPassword} class="form-control" id="floatingPassword" placeholder="Password" required />
                                    <label for="floatingPassword">Password</label>
                                </div>
                            </div>
                            <h3>Phone</h3>
                            <div class="uk-margin">
                                <div class="form-floating">
                                    <input type="tel" onChange={this.createPassword} class="form-control" id="floatingPassword" placeholder="Phone Number" required />
                                    <label for="floatingPassword">Phone Number</label>
                                </div>
                            </div>

                            </div>

                            <div className='uk-margin-top regLog uk-flex uk-flex-center'>
                            <Link to="finaccreg"><button type="submit" className='uk-button uk-button-default  uk-button-large uk-light' onClick={this.createUser}>Next</button></Link>    
                            </div>
                        </form>
                    </div>
                    <div className='uk-flex uk-flex-center uk-text-center uk-animation-slide-left '>
                        <div className='uk-margin-top uk-light'>
                            <p className='uk-text-small'>Have an account?</p>
                            <Link to="/login"><button className='uk-button'>Log In Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>



        </>














    }









}



export default Registerpage;