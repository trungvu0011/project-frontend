import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './app/components/user/common_element/navbar';
import Footer from './app/components/user/common_element/footer';
import AdminNavbar from './app/components/admin/admin-navbar';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>      
        <Route path='/home' exact>
          <Navbar/>
          <Footer/>
        </Route>
        <Route path="/admin/order-approving" exact>
          <AdminNavbar/>
        </Route>
        <Redirect from='/admin' to="/admin/order-approving" />
        <Redirect from='/' to="/home" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
// <Router>
//             <Navbar />
//             <Switch>
//                 <Route path="/" exact>
//                   <Home/>
//                 </Route> 
//                 <Route path="/services" >
//                   <Services/>
//                 </Route>
//                 <Route path="/doctors" >
//                   <Doctors/>
//                 </Route>
//                 <Route path="/doctor-booking" >
//                   <DoctorBooking/>
//                 </Route>
//                 <Route path="/services/pediatrics" >
//                   <Pediatrics/>
//                 </Route>
//                 <Route path="/services/periodic" >
//                   <Periodic/>
//                 </Route>
//                 <Route path="/services/nursing" >
//                   <Nursing/>
//                 </Route>
//                 <Route path="/services/generality" >
//                   <Generality/>
//                 </Route>
//                 <Route path="/services/cancerscreening" >
//                   <CancerScreening/>
//                 </Route>
//                 </Route>
//                 <Route path="/admin/order-approving" >
//                   <OrderApproving/>
//                 </Route>
//                 <Route path="/admin/personnel-management" >
//                   <PersonnelManagement/>
//                 </Route>
                
//                 {/* <Redirect from="/" to="/maps"/> */}
//             </Switch>
//             <Footer/>
//         </Router>