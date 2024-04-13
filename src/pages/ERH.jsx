import React from 'react';
import './ERH.css';


function Erh() {
    return (
        <>

            <div className="header">

                <div className='nav-div'> 
                        <div className="logo1 ">
                            <img src="/public/images/medical-logo.png" alt="logo" className="logo" loading="lazy"/>
                                <h3>HEALERS</h3>
                        </div>
                    <nav >
                        <div className="logo2">
                            <a href="index.html"><span>Home</span></a>
                            <a href="index.html"><span>About Us</span></a>
                            <a href="contactus.html"><span>Contact Us</span></a>
                        </div>
                    </nav>
                </div>
                <div>
                    <h1>Electronic Health Record Dashboard</h1>
                    
                </div>
                <div id="formdiv">
                    <form className="form">
                        <button>
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <input className="input" placeholder="Search by Id" required="" type="text"/>
                            <button className="reset" type="reset">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                    </form>
                    <button className="button" onClick="search()">
                        <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                        Search
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <main>
                        <div>
                            <table className="mainTable">
                                <thead>
                                    <th>Unique Id</th>
                                    <th>Patient Name</th>
                                    <th>Data</th>
                                </thead>
                                <tbody>
                                    <div className="hl"></div>
                                    <div className="vl"></div>
                                    <div className="vl1"></div>
                                    <tr>
                                        <td className="pId">122451</td>
                                        <td className="pName">Arjun Sharma</td>
                                        <td className="pBtn">
                                            <a href="pt1.html"><button className="button2">View Details</button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pId">122452</td>
                                        <td className="pName">Rajat Jain</td>
                                        <td className="pBtn">
                                            <a href="pt2.html"><button className="button2">View Details</button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pId">122453</td>
                                        <td className="pName">Priya Gupta</td>
                                        <td className="pBtn">
                                            <a href="pt3.html"><button className="button2">View Details</button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pId">122454</td>
                                        <td className="pName">Aishwarya Rai</td>
                                        <td className="pBtn">
                                            <a href="pt4.html"><button className="button2">View Details</button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pId">122455</td>
                                        <td className="pName">Sanya Mirja</td>
                                        <td className="pBtn">
                                            <a href="pt5.html"><button className="button2">View Details</button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pId">122456</td>
                                        <td className="pName">Aryan Kapoor</td>
                                        <td className="pBtn">
                                            <a href="pt6.html"><button className="button2">View Details</button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pId">122457</td>
                                        <td className="pName">Ananya Panday</td>
                                        <td className="pBtn">
                                            <a href="pt7.html"><button className="button2">View Details</button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pId">122458</td>
                                        <td className="pName">Vikram Betaal</td>
                                        <td className="pBtn">
                                            <a href="pt8.html"><button className="button2">View Details</button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pId">122459</td>
                                        <td className="pName">Rohit Sharma</td>
                                        <td className="pBtn">
                                            <a href="pt9.html"><button className="button2">View Details</button></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pId">122460</td>
                                        <td className="pName">Meera Bai</td>
                                        <td className="pBtn">
                                            <a href="pt10.html"><button className="button2">View Details</button></a>
                                        </td>
                                    </tr>
                                </tbody>
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


        </>
    )
}


export default Erh;