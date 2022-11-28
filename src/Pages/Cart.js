import React from 'react';
import NavBar from "./NavBars/Navbar";
import { Outlet } from 'react-router-dom';
import '../css/uikit.min.css';
import '../css/uikit.css';
import '../css/cart.css';
import basickit from '../Images/basickit.png';
import advancedkit from '../Images/advancedkit.png';

class cart extends React.Component {

    render() {

        const basic = <img width={200} height={200} src={basickit} />
        const advanced = <img src={advancedkit} />
        return (<>
            <NavBar />
            <body>
                <div className='uk-flex uk-flex-center uk-height-large mt-5'>
                    <div className='uk-column-1-1@l uk-column-1-1@s uk-card uk-card-default main-cart p-3'>
                        <div className='uk-flex uk-flex-between'>
                            <h2>Shopping Cart</h2>
                            <p>Price</p>
                        </div>
                        <form className='uk-column-1-4@l uk-column-1-1@m p-5 uk-flex uk-flex-between'>
                            {/* Body of the cart */}
                            <div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label class="form-check-label" for="gridCheck1">
                                    </label>
                                    {basic}
                                </div>
                            </div>
                            <div className='Third-Cart-Row'>
                                <h3>Spartan Water Testing - Basic Kit</h3>

                                <h5 className='uk-text-success mt-3'> In Stock</h5>
                                <select class="form-select quantity" aria-label="Default select example">
                                    <option selected>Qty: 1</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>                          
                            <div className='uk-flex uk-flex-right ms-5'> <h4> $229.99 </h4></div>
                        </form>

                        <div className='uk-flex uk-flex-right mb-3'>
                            <h3>Subtotal:$229.99</h3>
                        </div>
                    </div>
                </div>
            </body>



        <Outlet/>

        </>
        )




    }



}

export default cart;