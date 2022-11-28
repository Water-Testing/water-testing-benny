import React from "react";
import '../../css/IT.css';



export class IT extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            password: 'default',
            email: 'default',
            firstname: 'default',
            lastname: 'default',
            id: 'default',
            specialty: 'default',
            lab: 'default'
        };

        this.updatePassword = this.updatePassword.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateId = this.updateId.bind(this);
        this.updateLab = this.updateLab.bind(this);
        this.updateSpecialty = this.updateSpecialty.bind(this);
        this.createEmployee = this.createEmployee.bind(this);

    }


    updatePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    updateEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    updateFirstName = (event) => {
        this.setState({ firstname: event.target.value });
    }

    updateLastName = (event) => {
        this.setState({ lastname: event.target.value });
    }

    updateId = (event) => {
        this.setState({ id: event.target.value });
    }

    updateSpecialty = (event) => {
        this.setState({ specialty: event.target.value });
    }

    updateLab = (event) => {
        this.setState({ lab: event.target.value });
    }



    createEmployee = (event) => {
        this.setState({ firstname: event.target.value });
        this.setState({ lastname: event.target.value });
        this.setState({ password: event.target.value });
        this.setState({ id: event.target.value });

    }

     addEmployee = <div className="uk-text-small uk-padding-large uk-card uk-card-default optionsCard">
        <form className="uk-form ">
            <label>Employee's first name: </label>
            <input className="uk-input uk-width-1-3 " placeholder='First Name' />
            <br /><br />
            <label>Employee's last name: </label>
            <input className="uk-input uk-width-1-3 " placeholder='Last Name' />
            <br /><br />
            <label>Employee's ID </label>
            <input className="uk-input uk-width-1-3 " placeholder='ID'  />
            <br /><br />
            <label> Employee's password: </label>
            <input className="uk-input uk-width-1-3 " placeholder='password' type='password'  />
            <br />
            <div class="uk-margin uk-padding-large">
                <label class="uk-form-label" for="form-horizontal-select">Employee Specialty</label>
                <div class="uk-form-controls">
                    <select class="uk-select" id="form-horizontal-select">
                        <option>Biological</option>
                        <option>Bacterial</option>
                    </select>
                </div>
            </div>
            <button className="uk-button uk-button-default" >Submit</button>
        </form>
    </div>



    removeEmployee = <div className="uk-text-small uk-padding-large uk-card uk-card-default optionsCard">
        <form className="uk-form">
            <label>Employee ID</label>
            <br />
            <input className="uk-input uk-width-1-3" placeholder="ID"  />
            <br /> <br />
            <label>Enter your reason for removing Employee</label>
            <br /><br />
            <textarea className="uk-textarea uk-width-1-3" rows="5" type="text" placeholder="Reason" />
            <br /> <br />
            <button className="uk-button uk-button-default">Submit</button>
        </form>

    </div>

    changeSpecialty = <div class="uk-margin uk-padding-large uk-text-small uk-card uk-card-default optionsCard">
        <form>
            <label>Employee's ID </label>
            <input className="uk-input uk-width-1-3 " placeholder='ID'  />
            <br /> <br />
            <label class="uk-form-label" for="form-horizontal-select">Employee Specialty</label>
            <div class="uk-form-controls">
                <select class="uk-select" id="form-horizontal-select">
                    <option>Biological</option>
                    <option>Bacterial</option>
                </select>
            </div>

            <br /> <br />
            <button className="uk-button uk-button-default">Submit</button>
        </form>

    </div>

    updateEmployee = <div className="uk-text-small uk-padding-large uk-card uk-card-default optionsCard">
        <form className="uk-form ">
            <label>Employee's first name: </label>
            <input className="uk-input uk-width-1-3 " placeholder='First Name'  />
            <br /><br />
            <label>Employee's last name: </label>
            <input className="uk-input uk-width-1-3 " placeholder='Last Name' />
            <br /><br />
            <label>Employee's ID </label>
            <input className="uk-input uk-width-1-3 " placeholder='ID' />
            <br /><br />
            <label> Employee's password: </label>
            <input className="uk-input uk-width-1-3 " placeholder='password' type='password' />
            <br /> <br />
            <button className="uk-button uk-button-default">Update</button>
        </form>
    </div>;

    changeLabs = <div className="uk-text-small uk-padding-large uk-card uk-card-default optionsCard">
        <form className="uk-form">
            <label>Employee's ID </label>
            <input className="uk-input uk-width-1-3 " placeholder='ID' />
            <br />
            <div class="uk-margin uk-padding-large">
                <label class="uk-form-label" for="form-horizontal-select">Lab</label>
                <div class="uk-form-controls">
                    <select class="uk-select" id="form-horizontal-select">
                        <option>Lab 1</option>
                        <option>Lab 2</option>
                    </select>
                </div>
            </div>

            <br /> <br />
            <button className="uk-button uk-button-default">Submit</button>
        </form>

    </div>



    render() {





        const addlogo = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
        </svg>;


        const removeLogo = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-dash" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
        </svg>;


        const updateLogo = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
        </svg>;





        return (

            <body className="body">


                <table class="uk-table">

                    <thead className="uk-divider-small">
                        <tr>

                            <th className=" uk-width-large firstCol">
                                <div className="uk-flex uk-flex-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                    <h3 className="uk-text-bold uk-margin-medium-bottom uk-margin-medium-left"> IT <br /> Department </h3>
                                </div>

                            </th>


                            <th className="uk-padding-small secondCol">
                                <div className="uk-width-2-3 uk-flex uk-flex-right uk-flex-middle" >

                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-motherboard-fill" viewBox="0 0 16 16">
                                        <path d="M5 7h3V4H5v3Z" />
                                        <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1Zm7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Z" />
                                    </svg>
                                    <h2 className="uk-text-bold uk-margin-medium-bottom uk-margin-medium-left"> Dashboard</h2>


                                </div></th>


                        </tr>
                    </thead>
                    <tfoot>
                        <tr className="">
                            <td className="uk-text-bold uk-text-center"><div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                            </svg><button className="uk-button">Exit</button></div></td>
                            <div></div>


                        </tr>
                    </tfoot>

                    <tbody className="uk-text-center uk-text-bolder uk-text-large">

                        <tr>

                            <td> <div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg><button className="uk-button" type="button" uk-toggle="target: #add; animation: uk-animation-fade; ">Add Employee</button></div></td>

                            <p></p>
                            <div id="add" hidden>{this.addEmployee}</div>
                        </tr>

                        <tr>

                            <td><div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg><button className="uk-button" type="button" uk-toggle="target: #remove; animation: uk-animation-fade; ">Remove Employee</button></div></td>
                            <p></p>
                            <div id="remove" hidden>{this.removeEmployee}</div>


                        </tr>
                        <tr>
                            <td><div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clipboard2-data-fill" viewBox="0 0 16 16">
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
                            </svg><button className="uk-button" type="button" uk-toggle="target: #update; animation: uk-animation-fade; ">Update Employee</button></div></td>
                            <p></p>
                            <div id="update" hidden>{this.updateEmployee}</div>

                        </tr>

                        <tr>
                            <td><div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
                                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                            </svg><button className="uk-button" type="button" uk-toggle="target: #change; animation: uk-animation-fade; ">Change Specialty</button></div></td>
                            <p></p>
                            <div id="change" hidden>{this.changeSpecialty}</div>

                        </tr>
                        <tr>

                            <td><div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                            </svg><button className="uk-button" type="button" uk-toggle="target: #labs; animation: uk-animation-fade; ">Change Labs</button></div></td>

                            <p></p>
                            <div id="labs" hidden>{this.changeLabs}</div>
                        </tr>

                    </tbody>
                </table>






            </body>




        )

    }



}

export default IT;