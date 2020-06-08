import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './app/components/user/common_element/navbar';
import Home from './app/components/user/home';
import DoctorBooking from './app/components/user/doctor_booking';
import Services from './app/components/user/services';
import Pediatrics from './app/components/user/service_detail/pediatrics'
import Periodic from './app/components/user/service_detail/periodic'
import Nursing from './app/components/user/service_detail/nursing'
import Generality from './app/components/user/service_detail/generality'
import CancerScreening from './app/components/user/service_detail/cancer_screening'
import Doctors from './app/components/user/doctors';
import Footer from './app/components/user/common_element/footer';
import Dashboard from './app/components/admin/dashboard';
import PersonnelManagement from './app/components/admin/personnel_management';
import OrderApproving from './app/components/admin/order_approving';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
            <Navbar />

            <Switch>
                <Route path="/" exact>
                  <Home/>
                </Route> 
                <Route path="/services" exact>
                  <Services/>
                </Route>
                <Route path="/doctors" exact>
                  <Doctors/>
                </Route>
                <Route path="/doctor-booking" exact>
                  <DoctorBooking/>
                </Route>
                <Route path="/services/pediatrics" exact>
                  <Pediatrics/>
                </Route>
                <Route path="/services/periodic" exact>
                  <Periodic/>
                </Route>
                <Route path="/services/nursing" exact>
                  <Nursing/>
                </Route>
                <Route path="/services/generality" exact>
                  <Generality/>
                </Route>
                <Route path="/services/cancerscreening" exact>
                  <CancerScreening/>
                </Route>
                <Route path="/admin/dashboard" exact>
                  <Dashboard/>
                </Route>
                <Route path="/admin/order-approving" exact>
                  <OrderApproving/>
                </Route>
                <Route path="/admin/personnel-management" exact>
                  <PersonnelManagement/>
                </Route>
                
                {/* <Redirect from="/" to="/maps"/> */}
            </Switch>

            <Footer/>
        </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
