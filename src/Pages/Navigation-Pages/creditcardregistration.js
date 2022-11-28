import React from "react";
import Navbar from "../NavBars/Navbar.js";
import '../../css/LogPage.css';
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
class creditcardregistration extends React.Component {

    render(){



        return ( 
        
        <>
        <Navbar/>
        

        <div className="signBox">
      
            <PayPalScriptProvider/>
        </div>
        </>



    )



    }




}

export default creditcardregistration;