import { BrowserRouter, Routes, Route } from "react-router-dom";



import Appointment from "./pages/Appointment";
import Homepage from "./pages/Homepage";
import Erh from "./pages/ERH";
import Inventory from "./pages/Inventory";
import MedicalHistory from "./pages/Medical";
import Pt1 from "./pages/Pt1";



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
      <Route path="*" element={<div>404 Not Found</div>} />



    </Routes>




  </BrowserRouter>

}


export default App;