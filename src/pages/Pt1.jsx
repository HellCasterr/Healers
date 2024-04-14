import { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use React Router
import './pt1.css';
import ContactBtn from '../components/Buttons/ContactBtn';

function Pt1() {
    const [activeTab, setActiveTab] = useState('medical'); // State to manage tabs
    const medicalRef = useRef(null); // Refs to target elements for scrolling behavior
    const testRef = useRef(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);

        // Simple scrolling mechanism - Adapt if needed
        if (tab === 'medical') {
            medicalRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (tab === 'test') {
            testRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className='flex justify-between items-center m-8'>
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

                    <a href="/contactUs"><ContactBtn /></a>
                </div>
            </div>

            <h1 className="mainhead">Medical Profile</h1>

            <div className="container mx-20 rounded-lg">
                <div className="profile-container">
                    <div className="profile-photo">
                        <img src="images/profile1.jpeg" alt="Patient Photo" />
                    </div>
                    <div className="profile-details">
                        <h2 style={{ textAlign: 'center' }}>Patient Details</h2>
                        <hr style={{ width: '85%', margin: '20px' }} />
                        <p><strong>Name:</strong> Arjun Sharma</p>
                        <p><strong>Age:</strong> 35</p>
                        <p><strong>Gender:</strong> Male</p>
                        <p><strong>Location:</strong> Chandigarh</p>
                        <hr style={{ width: '85%', margin: '20px' }} />
                        <p><strong>Blood-Group: </strong> A+</p>
                        <p><strong>Height: </strong>170cm</p>
                        <p><strong>Weight: </strong>65kg</p>
                    </div>
                </div>

                <div className="reports" style={{ marginTop: '10px' }}>
                    <div className="medicalreport">
                        <button
                            className={`tab-button ${activeTab === 'medical' ? 'active' : ''}`}
                            id="tab1"
                            onClick={() => handleTabClick('medical')}
                        >
                            <img className="reportimg" src="images/medical_report.png" alt="report" />
                        </button>
                        <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Medical History</h2>
                        <div ref={medicalRef} id="content1" className={`tab-content ${activeTab === 'medical' ? 'active' : ''}`}>
                            {/* Medical History Content Here */}
                        </div>
                    </div>

                    <div className="testreport">
                        <button
                            className={`tab-button1 ${activeTab === 'test' ? 'active' : ''}`}
                            id="tab2"
                            onClick={() => handleTabClick('test')}
                        >
                            <img className="reportimg" src="images/testreport.png" alt="report" />
                        </button>
                        <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Test Reports</h2>
                        <div ref={testRef} id="content2" className={`tab-content ${activeTab === 'test' ? 'active' : ''}`}>
                            {/* Test Reports Content Here */}
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p className="footerA">
                    Copyright &copy; 2023 All rights reserved, Healers.
                </p>
            </footer>
        </div>
    );
}

export default Pt1;
