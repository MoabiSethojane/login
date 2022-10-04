import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Homepage from './components/Homepage';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className='app'>
    <Router>
     
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/homepage" element={<Homepage/>}/>
      {/* <Route path="/addProduct" element={<AddProduct/>}/> */}
        </Routes>
    </Router>
    <AddProduct/>
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './component/Navbar';
// import Sidebar from './component/Sidebar';
// import Inventory from './pages/Inventory';
// import Pending from './pages/Pending';
// import OrderHistory from './pages/OrderHistory';
// const App = () => {
//   return (
//     <BrowserRouter>
//     <Navbar/>
//       <Sidebar>
//         <Routes>
//           <Route path="/" element={<Inventory/>} />
//           <Route path="/pending" element={<Pending />} />
//           <Route path="/order" element={<OrderHistory />} />
//         </Routes>
//       </Sidebar>
//     </BrowserRouter>
//   );
// };
// export default App;
