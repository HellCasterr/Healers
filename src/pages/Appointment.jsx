import React from 'react';
import './Appointment.css';



function Appointment(){
    return (
        <>
        
        
        <div className="header">
        <div>
            <nav>
                <div className="logo1">
                    <img src="/images/medical-logo.png" alt="logo" className="logo" loading="lazy"/>
                    <h3 className='text-3xl'>HEALERS</h3>
                </div>
                <div className="logo2 flex items-center justify-center gap-20">
                    <a href="/homepage"><span>Home</span></a>
                    <a href="/homepage"><span>About Us</span></a>
                    <a href="/dashboard"><span>EH-Dashboard</span></a>
                </div>
                <div>
                    <a href="contactus.html"><button className="logo3">Contact Us</button></a>
                </div>
            </nav>
        </div>
        <div className="searchBarA">
            <div className="input-group mb-3 flex w-full">
                <input id="SearchBar" type="text" className="form-control " placeholder="Search Record"
                    aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <select className="custom-select" id="CategorySelected">
                    <option value="1" selected>By Name</option>
                    <option value="2">By Age</option>
                    <option value="3">By Doctor Name</option>
                </select>
                <div className="input-group-append">
                    <button id="SearchBtn" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">Search</button>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div className="bodyA">
            <main>
                <div className="mainA">
                    <h2>
                        Appointment List
                    </h2>
                </div>
                <div>
                    <table className="mainB container mx-auto">
                        <thead>
                            <tr>
                                <th>Serial No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Doctor Name</th>
                            </tr>
                        </thead>
                        <tbody id="tbody1"></tbody>
                    </table>
                </div>
            </main>
        </div>
        <div>
            <footer>
                <p className="footerA">
                    Copyright &copy; 2023 All rights reserved, Healers.
                </p>
            </footer>
        </div>
    </div>
    {/* <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Details of Patient</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <label className="labs">Patient Name:</label>
                    <input type="text" id="NamePt" disabled/><br></br>
                    <label className="labs">Patient Age:</label>
                    <input type="text" id="AgePt" disabled/><br></br>
                    <label className="labs">Patient&apos;s Doctor Name:</label>
                    <input type="text" id="DnamePt" disabled/><br></br>
                    <label className="labs">Hospital Name:</label>
                    <input type="text" id="HnamePt" disabled/><br></br>
                    <label className="labs">Symptoms:</label>
                    <input type="text" id="SymPt" disabled/><br></br>
                    <label className="labs">Time Slot:</label>
                    <input type="text" id="TimePt" disabled/>
                    <br></br>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button id="DelPtBtn" type="button" className="btn btn-danger" data-dismiss="modal"
                        onClick="DelPt()">Delete</button>
                </div>
            </div>
        </div>
    </div> */}
        
        
        </>
    )
}



export default Appointment;