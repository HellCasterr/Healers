import { BrowserRouter, Routes, Route } from "react-router-dom";



import Appointment from "./pages/Appointment";
import Homepage from "./pages/Homepage";
import Erh from "./pages/ERH";
import Inventory from "./pages/Inventory";
import MedicalHistory from "./pages/Medical";
import Pt1 from "./pages/Pt1";
import Pt2 from "./pages/Pt2";
import Pt3 from "./pages/Pt3";
import Pt4 from "./pages/Pt4";
import Pt5 from "./pages/Pt5";
import Pt6 from "./pages/Pt6";
import Pt7 from "./pages/Pt7";
import Pt8 from "./pages/Pt8";
import Pt9 from "./pages/Pt9";
import Pt10 from "./pages/Pt10";



function App() {
  return <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<Homepage/>} />
      <Route path="/appointment" element={<Appointment/>} />
      <Route path="/erh" element={<Erh/>} />
      <Route path="/inventory" element={<Inventory/>} />
      {/* <Route path="/signup" element={<SignupPage/>} /> */}
      <Route path="/medical" element={<MedicalHistory/>} />
      <Route path="/Pt1" element={<Pt1/>} />
      <Route path="/Pt2" element={<Pt2/>} />
      <Route path="/Pt3" element={<Pt3/>} />
      <Route path="/Pt4" element={<Pt4/>} />
      <Route path="/Pt5" element={<Pt5/>} />
      <Route path="/Pt6" element={<Pt6/>} />
      <Route path="/Pt7" element={<Pt7/>} />
      <Route path="/Pt8" element={<Pt8/>} />
      <Route path="/Pt9" element={<Pt9/>} />
      <Route path="/Pt10" element={<Pt10/>} />
      <Route path="*" element={<div>404 Not Found</div>} />



    </Routes>




  </BrowserRouter>

}


export default App;