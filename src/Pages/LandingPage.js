import React from "react";
import '../css/uikit.min.css';
import '../css/uikit.css';
import { Outlet } from "react-router-dom";
import Logo from '../Images/SpartanLogo.png';
import '../css/LandingPage.css';
import NavBar from './NavBars/Navbar.js'
import watertestingheader from '../Images/Water Testing Header-1.png';
import logo2 from '../Images/Water Testing Header-5.png';
import logo3 from '../Images/Water Testing Header-6.png';
import logo4 from '../Images/Water Testing Header-7.png';
import logo5 from '../Images/Water Testing Header-8.png';
import logo6 from '../Images/Water Testing Header-9.png';
import logo7 from '../Images/Water Testing Header-10.png';
import testLog from '../Images/watertestlog-2.png';
import org1 from '../Images/epa.svg.png';
import org2 from '../Images/Atsdr.svg.png';
import org3 from '../Images/cdc.jpg';
import basickit from '../Images/basickit-8.png';
import advancedkit from '../Images/basickit-9.png';
import cart from "./Cart";



export class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cart1: 1}
    }

    render() {

        let advancedkitLogo = <img className='basicKitLogo' src={advancedkit} />
        let basicKitLogo = <img className='basicKitLogo' src={basickit} />
        let logo = <img className='Logo' src={Logo} />
        let Technician = <img className='secondSectionLogo' src={logo2} />
        let Analysts = <img className='secondSectionLogo' src={logo3} />
        let Shipping = <img className='secondSectionLogo' src={logo4} />
        let Customer = <img className='secondSectionLogo' src={logo5} />
        let Quality = <img className='secondSectionLogo' src={logo6} />
        let Accuracy = <img className='secondSectionLogo' src={logo7} />
        let waterTest = <img className='mid-section uk-padding-large  uk-visible@l uk-visible@m ' src={testLog} />
        let cdc = <img className='orgs CDC' src={org3} />
        let epa = <img className='orgs EPA' src={org1} />
        let atsdr = <img className='orgs ATS' src={org2} />
        let header = <img className="WaterTestingHeader" src={watertestingheader} />
        return (
            
            <div>
                
                <NavBar/>
                <div className="Main-Header  uk-background-cover uk-background-fixed uk-text-left-center">
                    <div className="uk-padding-large">
                        <div className="uk-padding-large uk-light">
                            <h4 className="uk-margin-large-top uk-light Tiny-Text-Two"> Find out what contaminants we test --- <button className="uk-button uk-light">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg></button></h4>
                            <h1 className="uk-text-bolder uk-margin-large-top Header-Text">Good Quality Testing.<br />Great Quality Speed.</h1>
                            {/* <h1 className="uk-text-bold"></h1> */}
                            <p className="uk-text-lead uk-text-lighter uk-margin-medium-top">Order a water kit and have your sources <br /> analyzed by high end engineers and analysts. Find out more.</p>
                            <div className=" uk-margin-large-top"><button className="uk-button uk-button-default uk-light">Buy A Kit</button>     </div>
                        </div>



                    </div>

                </div>

                <body className="bodyBackground">

                    <div className="uk-text-meta uk-text-center ">
                        <h4 className="uk-margin-large-top  uk-text-uppercase uk-text-muted Tiny-Text"> Testing based on research from organizations including</h4>



                    </div>
                    <div className="uk-column-1-3@l uk-column-1-1@s uk-text-center" >


                        <div>{epa}</div>
                        <div>{cdc}</div>
                        <div>{atsdr}</div>

                    </div>
                    <div className="fourthSection uk-padding-large">

                        <div className="uk-column-1-2@l uk-column-1-1@s uk-flex uk-flex-center  uk-text-middle uk-card uk-card-default middle ">

                            <div className="uk-light uk-text-center-left uk-padding-large">
                                <h4 className="uk-text-small uk-text-meta uk-text-uppercase uk-text-light"> Nov. 28 - Dec. 2, 2022</h4>
                                <h2 className="uk-text-bold" >Our Testing Kits</h2>
                                <p className="uk-text-meta uk-text-default Testing-Kit-Text">Our basic and advanced testing kits provide a variety of services. <br />
                                    We include contaminants testing and online reports for varying authorities. Our technicians <br />
                                    We analyze chemicals, lead, chlorine, minerals and more.
                                </p>


                            </div>


                            <div>
                                {waterTest}
                            </div>

                        </div>











                    </div>



                    <div className="Kits uk-padding-large uk-background-cover ">
                        <div className="uk-column-1-2@l uk-column-1-1@s uk-flex uk-flex-center">
                            <div className="x">
                                <div className="uk-card uk-card-default uk-text-center uk-height-large  BuyKits">

                                    <ul className="uk-list ">
                                        <li className="kitLogoBackground">
                                            {basicKitLogo}
                                            <h2 className="uk-text-bold uk-text-large uk-padding-small">Basic Kit</h2>

                                        </li>


                                        <li className="uk-padding-large uk-text-left uk-text-medium">
                                            <p>This kit is for testing chemicals, lead and chlorine. You also get an online report. <h2 className="uk-margin-small-top uk-text-bold">
                                                <h3 className="cross-price uk-text-left uk-text-medium uk-inline">$199.99</h3>$149.00</h2></p>
                                        </li>

                                        <li>
                                            <button className="uk-button uk-button-default uk-margin-small-top" onClick={this.props.updateState}><a>Add To Cart</a></button>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                            <div className="y">
                                <div className="uk-card uk-card-default uk-text-center uk-height-large  BuyKits">
                                    <ul className="uk-list">
                                        <li className="kitLogoBackground">
                                            {advancedkitLogo}
                                            <h2 className="uk-text-bold uk-text-large uk-padding-small">Advanced Kit</h2>

                                        </li>


                                        <li>
                                            <p className="uk-padding-large uk-text-left uk-text-medium">This kit is recommended for those who want an in-depth report with more contaminants testing.
                                                <h2 className="uk-margin-small-top uk-text-bold">
                                                    <h3 className="cross-price uk-text-left uk-text-medium uk-inline">$299.99</h3>$229.99</h2>
                                            </p>

                                        </li>

                                        <li >
                                            <button className="uk-button uk-button-default uk-margin-small-top" onClick={this.props.updateState}><a>Add To Cart</a></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>





                    <div className="Section-Background">

                        <div className="uk-text-center">
                            <h1 className="uk-text-lead uk-text-lighter  Values">We value our customers.</h1>
                            <p className="uk-text-meta Values-Sub">We believe that your satisfaction is number one. <br />That's why we focus on these three principles.</p>
                        </div>


                        <div class="uk-grid-collapse uk-column-1-1@s uk-column-1-3@l uk-text-center secondSection uk-padding-large" uk-grid>
                            <div className="LogoSpacing uk-padding-large">

                                <div class="uk-text-light uk-text-large secondSectionText">Technicians</div>
                                <div>{Technician}</div>
                                <p className="uk-text-lighter uk-text-emphasis secondSectionText-2"> The href attribute requires a valid value to be accessible.
                                    Provide a valid, navigable address as the href value.
                                    If you cannot provide a valid href, but still need the element to resemble a link,
                                    use a button and change it with appropriate styles.
                                </p>
                            </div>
                            <div className="LogoSpacing uk-padding-large">
                                <div class="uk-text-light uk-text-large secondSectionText">Accuracy</div>
                                <div>{Accuracy}</div>
                                <p className="uk-text-lighter uk-text-emphasis secondSectionText-2"> The href attribute requires a valid value to be accessible.
                                    Provide a valid, navigable address as the href value.
                                    If you cannot provide a valid href, but still need the element to resemble a link,
                                    use a button and change it with appropriate styles.
                                </p>
                            </div>
                            <div className="LogoSpacing uk-padding-large">
                                <div class=" uk-text-light uk-text-large secondSectionText">Customer Service</div>
                                <div>{Customer}</div>
                                <p className="uk-text-lighter uk-text-emphasis uk-text-default"> The href attribute requires a valid value to be accessible.
                                    Provide a valid, navigable address as the href value.
                                    If you cannot provide a valid href, but still need the element to resemble a link,
                                    use a button and change it with appropriate styles.
                                </p>
                            </div>
                        </div>


                        <div className="fourthSection uk-text-center">
                            <div className="">
                                <div>
                                    <h1 className="uk-text-lead Values">Test Your Water. <br /> Here's Why.</h1>
                                    <p className="uk-text-meta Values-Sub">We'd like to think that scientific research is significant. <br />How about you?</p>
                                </div>

                                <div className="uk-column-1-2@l uk-column-1-1@s Reason-Row uk-padding-large">
                                    <div className="uk-card uk-card-default uk-padding-large What-We-Do uk-height-large">
                                        <h4 className="uk-text-small uk-text-meta uk-text-uppercase uk-text-light"> Nov. 7 - Dec. 2, 2023</h4>
                                        <h2 className="uk-text-bold" >There are over 20 metals found in water. <br /> That's why we test 31 of them. </h2>
                                        <p >We test for 31 Metals, 12 Physical Properties, 7 In-organics, <br />
                                            Pesticides, Herbicides and many more. Some of these are luminum, Antimony, Arsenic, Barium, Beryllium, Boron,
                                            Cadmium, Calcium, Chromium, Cobalt, Copper, Hexavalent-Chrome, Iron, Lead, Lithium, Magnesium, Manganese and Molybdenum.
                                        </p>
                                        <button className="uk-button uk-button-default">Learn More</button>

                                    </div>

                                    <div className="uk-card uk-card-default uk-background-cover Research-Side uk-padding-large uk-text-left uk-height-large">
                                        <h1 className="uk-text-bold">Research</h1>
                                        <br />
                                        <ul className="uk-list">
                                            <li><a href="https://www.google.com/">Effects of Lead in Fetal Development</a></li>
                                            <li><a href="https://www.google.com/">Lead and Chlorine Deposits in Westchester County</a></li>
                                            <li><a href="https://www.google.com/">Concentration of In-Organics in 16 Cities Across America</a></li>
                                            <li><a href="https://www.google.com/">Effects of Hexachlorobenzene on Adolescence with Autism</a></li>
                                            <li><a href="https://www.google.com/">Alkalinity of Kensico Dam's Water Supply</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>



                <footer className="uk-height-large uk-flex uk-flex-middle uk-flex-center uk-text-center">
                    <div className="uk-column-1-4@l uk-column-1-2@s  ">
                        <div className="">
                            <ul className="uk-list ">
                                <li>
                                    {logo}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list uk-margin-large-top">
                                <li className="uk-text-bolder uk-text-large">About</li>
                                <li className="uk-text-small">Careers</li>
                                <li className="uk-text-small">Legal Notices</li>
                                <li className="uk-text-small">Privacy Notices</li>
                                <li className="uk-text-small">Security Information</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                <a><li className="uk-text-bolder uk-text-large">Support</li></a>
                                <a><li className="uk-text-small">Contact Us</li></a>
                                <a><li className="uk-text-small">Customer Portal</li></a>
                                <a><li className="uk-text-small"> Paid Support</li></a>
                                <a><li className="uk-text-small">Security Information</li></a>
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                <a><li className="uk-text-bolder uk-text-large">Social</li></a>
                                <a><li className="uk-text-small">Youtube</li></a>
                                <a><li className="uk-text-small">LinkedIn</li></a>
                                <a><li className="uk-text-small">Facebook</li></a>
                                <a><li className="uk-text-small">Instagram</li></a>
                            </ul>
                        </div>
                    </div>

                </footer>
  
            </div>
 
        )



    }







    

}

export default LandingPage;