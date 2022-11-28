import React from "react";
import '../../css/uikit.min.css';
import '../../css/uikit.css';
// import '../../css/technicians.css';
import ReactDOM from "react";
import Logo from '../../Images/SpartanLogo.png';

class ITnavbar extends React.Component {

    render() {
        let logo = <img className='Logo' src={Logo} />
        return (
            <nav className="uk-navbar-container itContainer" uk-navbar="mode: click">
                <div className="uk-navbar-left">
                    <li>{logo}</li>

                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav uk-flex">

                            <div className="uk-light IT-Nav-Right" >

                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                                    <path d="M7.5 1v7h1V1h-1z" />
                                    <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                                </svg>
                                <button className="uk-button" type="button" ><a className="uk-text-capitalize" href="#">Log Out</a></button>
                            </div>


                        </ul>


                    </div>
                </div >
            </nav>
        );

    }

}


export default ITnavbar;