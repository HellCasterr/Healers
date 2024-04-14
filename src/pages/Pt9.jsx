import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use React Router
import './pt1.css';

function Pt9() {
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
      <div className="header">
        <nav>
          <div className="logo1">
            <img src="medical-logo.png" alt="logo" className="logo" loading="lazy" />
            <h3>HEALERS</h3>
          </div>
          <div className="logo2">
            <Link to="/"><span>Home</span></Link> 
            <Link to="/about"><span>About Us</span></Link>
          </div>
          <div>
            <Link to="/contact"> <button className="logo3">Contact Us</button></Link>
          </div>
        </nav>
      </div>

      <h1 className="mainhead">Medical Profile</h1>

      <div className="container">
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

export default Pt9;
