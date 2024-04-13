import React from 'react';
import './Homepage.css'; // Assuming your CSS file is named App.css

function Homepage() {
    return (
        <div>
            


            <div>
                






            </div>
            <div>



                
                <div className='flex justify-between items-center'>
                    <div className="logo1">
                        <img src="/images/medical-logo.png" alt="logo" className="logo" loading="lazy" />
                        <h3>HEALERS</h3>
                    </div>
                    <div className="navCon ">
                        <div className='flex gap-10 justify-between items-center text-xl'>
                            <a href="/"><p className='transition duration-2000 hover:scale-110 hover:'>Home</p></a>
                            <a href="#aboutus"><p className='transition duration-2000 hover:scale-110'>About Us</p></a>
                            <a href="/erh"><p className='transition duration-2000 hover:scale-110'>EHR DashBoard</p></a>
                            <a href="/appointment"><p className='transition duration-2000 hover:scale-110'>Appointment DashBoard</p></a>
                            <a href="/inventory"><p className='transition duration-2000 hover:scale-110'>Inventory</p></a>
                        </div>

                    {/* <div className="logo2 ">
                        <a href="/"><span>Home</span></a>
                        <a href="#aboutus"><span>About Us</span></a>
                        <a href="/erh"><span>EHR DashBoard</span></a>
                        <a href="/appointment"><span>Appointment DashBoard</span></a>
                        <a href="/inventory"><span>Inventory</span></a>
                    </div> */}
                    </div>
                    <div>
                        <a href="contactus.html"><button className="logo3">Contact Us</button></a>
                    </div>
                </div>
            </div>
            <div className="bodyA">
                <main>
                    <div className="main1">
                        {/* Your main content here */}
                        <div id="main1A">
                            <div id="mainA">
                                <p>Treatment with Best <span id="doctor1">Doctors</span></p>
                                <p id="mainAA">For a better today & tomorrow stay with us.</p>
                            </div>
                            <div id="mainABB">
                                <input type="date" name="patientName" id="patientName" className="mainB" />
                                <select name="Slot" id="Slot" className="mainB">
                                    <option value="Select a time Slot">Select a time Slot</option>
                                    <option value="9:00 am - 10:00 am">9:00 am - 10:00 am</option>
                                    <option value="10:00 am - 11:00 am">10:00 am - 11:00 am</option>
                                    <option value="11:00 am - 12:00 pm">11:00 am - 12:00 pm</option>
                                    <option value="1:00 pm - 2:00 pm">1:00 pm - 2:00 pm</option>
                                    <option value="2:00 pm - 3:00 pm">2:00 pm - 3:00 pm</option>
                                </select>
                                <button className="mainBA" onClick="alert('Successfully Booked')">Book Appointment</button>
                            </div>
                        </div>
                        <div>
                            <img src="images/bg11.png" alt="logo" id="mainimg" />
                        </div>
                    </div>
                    <div id="mainC">
                        {/* More content here */}
                        <a href="EHR.html">
                            <div className="mainC" id="mainCAA">
                                <p className="mainCA"></p>
                                <hr />
                                <p><h3 className="mainCB">EHR DashBoard</h3></p>
                            </div>
                        </a>
                        <a href="appointment.html">
                            <div className="mainC" id="mainCAB">
                                <p className="mainCA2"></p>
                                <p><h3 className="mainCB2">Appointment DashBoard</h3></p>
                            </div>
                        </a>
                        <a href="inventory.html">
                            <div className="mainC" id="mainCAC">
                                <p className="mainCA"></p>
                                <hr />
                                <p><h3 className="mainCB">Inventory</h3></p>
                            </div>
                        </a>
                    </div>
                    <div id="aboutus">
                        {/* About Us section here */}

                        <div>
                            <h2>About Us</h2>
                            <p>
                                Team Healers is a passionate team working on a digital portal to improve the patient experience in government hospitals. The portal will allow patients to view their electronic health records, book appointments using a mobile app, and check the availability of doctors. The goal is to solve the problem of long queues, overcrowded hospitals, and to make it easier for patients to access the care they need. Team Healers believes that everyone deserves access to quality healthcare, regardless of their socioeconomic status.</p>
                        </div>
                        <div>
                            <img src="images/19767-1.png" alt="aboutus"/>
                        </div>
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
    );
}

export default Homepage;
