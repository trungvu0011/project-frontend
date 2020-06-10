import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './app/components/user/common_element/navbar';
import Footer from './app/components/user/common_element/footer';
import Dashboard from './app/components/admin/dashboard';
import PersonnelManagement from './app/components/admin/personnel_management';
import OrderApproving from './app/components/admin/order_approving';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Footer/>
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
//                 <Route path="/admin/dashboard" >
//                   <Dashboard/>
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