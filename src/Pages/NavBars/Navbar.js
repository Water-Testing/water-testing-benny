import React from "react";
import '../../css/LandingPage.css';
import '../../css/uikit.min.css';
import '../../css/uikit.css';
import {Link, Outlet} from 'react-router-dom';
import LandingPage from "../LandingPage";

import ReactDOM from "react";
import Logo from '../../Images/SpartanLogo.png';

class navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {cart : 0};
        this.updateState = this.updateState.bind(this);
    }

    updateState (){
        const totalkit = this.state.cart;
        this.setState({cart : totalkit + 1});
    }
    

    render() {
        let logo = <img className='Logo uk-margin-small-left' src={Logo} />
        return (<>
        <div className='uk-card uk-card-default'
         uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav className="uk-navbar-container" uk-navbar="mode: click; dropbar: true;">
                <div className="uk-navbar-left">

                    <ul className="uk-navbar-nav leftSide">
                        <li>{logo}</li>
                        <li className="uk-align-center "><button className="uk-button" type="button" ><a className="uk-text-capitalize" href="#"><Link to="/">Home</Link></a></button></li>
                        <li className="uk-align-center"><button className="uk-button" type="button" ><a className="uk-text-capitalize" href="#"><Link to="/">About</Link></a></button></li>
                        <li className="uk-align-center"><button className="uk-button" type="button" ><a className="uk-text-capitalize" href="#"><Link to="/">Testing Kits</Link></a></button> </li>                      
                        <li className="uk-align-center"><button className="uk-button" type="button" ><a className="uk-text-capitalize" href="#"><Link to="/">Contact Us</Link></a></button></li>
                    </ul>

                </div >

                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                <div><Link to="/cart"><div className='uk-button Cart-Icon' uk-icon="cart"><span>{this.state.cart}</span></div></Link></div>
                            </li>
                            
                            <li>
                                <button className="uk-button " type="button" ><a className="uk-text-capitalize" href="#"><Link to="/login">Log In</Link></a></button>
                            </li>

                        </ul>


                    </div>

            </nav>
            </div>
            <Outlet/>
            </>
        );

    }

}


export default navbar;