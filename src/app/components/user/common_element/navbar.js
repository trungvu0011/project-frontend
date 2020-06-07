import React from 'react';
import Popup from "reactjs-popup";

import Home from '../../../components/user/home'
import DoctorBooking from '../../../components/user/doctor_booking';
import Services from '../../../components/user/services';
import Pediatrics from '../../../components/user/service_detail/pediatrics'
import Periodic from '../../../components/user/service_detail/periodic'
import Nursing from '../../../components/user/service_detail/nursing'
import Generality from '../../../components/user/service_detail/generality'
import CancerScreening from '../../../components/user/service_detail/cancer_screening'
import Doctors from '../../../components/user/doctors';
import Dashboard from '../../../components/admin/dashboard';
import PersonnelManagement from '../../../components/admin/personnel_management';
import OrderApproving from '../../../components/admin/order_approving';

import '../../../../css/form-style.css';
import '../../../../css/home-style.css';
import logo from '../../../../assets/logo/small-logo.png';
import menuIcon from '../../../../assets/png/experience-icon.png';
import careService from '../../../../assets/svg/care-service.svg';
import medicine from '../../../../assets/png/medicine-thumb.png';
import scope from '../../../../assets/png/stethoscope-thumb.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <div>
       <Router>
            
                {/* <Redirect from="/" to="/maps"/> */}
      <section id="nav-bar">
        <nav id="collapsibleNav" className="navbar-expand-lg fixed-top">
          <nav className="container-fluid navbar navbar-expand navbar-light bg-white">
            {/*logo*/}
            <div className="navbar-brand">
              <Link title="We Care You" to="/home">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            {/*toggle button*/}
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNav" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            {/*navbar items*/}
            <div className="collapse navbar-collapse narbar">
              <ul className="pl-5 navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" title="Trang Chủ" to="/home">
                    <span className="menu-icon">
                      <img src={menuIcon} alt="hinh anh" />
                    </span>
                    <span>Trang chủ</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" title="Dịch Vụ"  to="/services">
                    <span className="menu-icon">
                      <img src={careService} alt="hinh anh" />
                    </span>
                    <span>Dịch vụ</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" title="Thông Tin Phòng Khám" to="/doctor-booking">
                    <span className="menu-icon">
                      <img src={medicine} alt="hinh anh" />
                
                    </span>
                    <span>Thông Tin Phòng Khám</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" title="Đội Ngũ Bác Sĩ" to="/doctors">
                    <span className="menu-icon">
                      <img src={scope} alt="hinh anh" />
                    </span>
                    <span>Đội Ngũ Bác Sĩ</span>
                  </Link>
                </li>
              </ul>
              <div className="btn-toolbar mb-1">
                <div className="btn-group mr-2">
                  <Popup modal trigger={<button className="btn btn-success">Đặt Hẹn Khám Ngay</button>}>
                    <div>
                      <div className="modal-content form-elegant">
                        <div className="text-center">
                          <h3 className="modal-title w-100 dark-grey-text my-3" id="myModalLabel">
                            <strong>Đăng Nhập</strong>
                          </h3>
                          <div className="modal-body mx-4">
                            {/*Body*/}
                            
                             <div className="md-form mb-5">
                              <h4> Đăng nhập bằng tài khoản</h4>
                              <input type="email" id="Form-email1" className="form-control validate" />
                            </div>

                            <div className="md-form pb-3">
                              <h4> Mật khẩu</h4>
                              <input type="password" id="Form-pass1" className="form-control validate" />
                            </div>
                            <div className="text-center mb-3">
                              <button id="main-button" type="button" className="btn btn-block btn-rounded z-depth-1a">Đăng Nhập</button>
                            </div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                              hoặc đăng nhập bằng:</p>
                            <div className="row my-3 d-flex justify-content-center">
                              <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a">
                                <i className="fab fa-facebook-f text-center" />
                              </button>
                              <button type="button" className="btn btn-white btn-rounded z-depth-1a">
                                <i className="fab fa-google-plus-g" />
                              </button>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
              </div>
            </div>
          </nav>

          <div id="signin-out-gr-button" className="container-fluid btn-group d-flex justify-content-end">
            {/* Đăng nhập button */}
            <div className="btn-toolbar mb-1">
              <div className="btn-group mr-2">
                <Popup modal trigger={<button className="btn btn-light btn-sm rounded-bottom"><b>Đăng Nhập</b></button>}>
                  <div>
                    <div className="modal-content form-elegant">
                      <div className="text-center">
                        <h3 className="modal-title w-100 dark-grey-text my-3" id="myModalLabel">
                          <strong>Đăng Nhập</strong>
                        </h3>
                        <div className="modal-body mx-4">
                          {/*Body*/}
                          <div className="md-form mb-5">
                            <h4> Đăng nhập bằng tài khoản</h4>
                            <input type="email" id="Form-email1" className="form-control validate" />
                          </div>

                          <div className="md-form pb-3">
                            <h4> Mật khẩu</h4>
                            <input type="password" id="Form-pass1" className="form-control validate" />
                          </div>
                          <div className="text-center mb-3">
                            <button id="main-button" type="button" className="btn btn-block btn-rounded z-depth-1a">Đăng Nhập</button>
                          </div>
                          <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                            hoặc đăng nhập bằng:</p>
                          <div className="row my-3 d-flex justify-content-center">
                            <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a">
                              <i className="fab fa-facebook-f text-center" />
                            </button>
                            <button type="button" className="btn btn-white btn-rounded z-depth-1a">
                              <i className="fab fa-google-plus-g" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              </div>
              
              <div className="btn-group">
                <Popup modal trigger={<button className="btn btn-light btn-sm rounded-bottom" ><b>Đăng Ký</b></button>}>
                  {/*Content*/}
                  <div className="modal-content form-elegant">
                    {/*Header*/}
                    <div className="modal-header text-center">
                      <h3 className="modal-title w-100 dark-grey-text my-3" id="myModalLabel"><strong>Đăng Ký Tài Khoản</strong></h3>
                    </div>
                    {/*Body*/}
                    <div className="modal-body mx-4">
                      {/*Body*/}
                      <div className="md-form mb-5">
                        <input type="email" id="Form-email1" className="form-control validate" />
                        <label data-error="wrong" data-success="right" htmlFor="Form-email1">Họ &amp; tên đầy đủ</label>
                      </div>
                      <div className="md-form pd-1">
                        <input type="password" id="Form-pass1" className="form-control validate" />
                        <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Số điện thoại</label>
                      </div>
                      <div className="md-form pd-1">
                        <input type="password" id="Form-pass1" className="form-control validate" />
                        <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Tạo một mật khẩu</label>
                      </div>
                      <div className="md-form pd-1">
                        <input type="password" id="Form-pass1" className="form-control validate" />
                        <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Nhập lại mật khẩu</label>
                      </div>
                      <form>
                        <label><input type="checkbox" name="personality" defaultChecked /> Nhận thông tin &amp; khuyến mãi của chúng tôi qua email</label><br />
                      </form>
                      <div className="text-center mb-3">
                        <button id="main-button" type="button" className="btn btn-block  btn-rounded z-depth-1a">Đăng Ký</button>
                      </div>
                    </div>
                    {/*Footer*/}
                  </div>
                  {/*/.Content*/}
                </Popup>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <Switch>
                <Route path="/home" >
                  <Home/>
                </Route>
                <Route path="/services" >
                  <Services/>
                </Route>
                <Route path="/doctor-booking" >
                  <DoctorBooking/>
                </Route>
                <Route path="/doctors" >
                  <Doctors/>
                </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
