import React, { useEffect, useState } from 'react';
import Popup from "reactjs-popup";
import axios from 'axios'

import Home from '../../../components/user/home'
import DoctorBooking from '../../../components/user/doctor_booking';
import Services from '../../../components/user/services';
import Pediatrics from '../../../components/user/service_detail/pediatrics'
import Periodic from '../../../components/user/service_detail/periodic'
import Nursing from '../service_detail/nursing'
import Generality from '../../../components/user/service_detail/generality'
import CancerScreening from '../../../components/user/service_detail/cancer_screening'
import Doctors from '../../../components/user/doctors';

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
  Link,
  Redirect,

} from "react-router-dom";

function Navbar() {
  const [signInInfo, setSignInInfo] = useState(null);

  const signInHandler = () => {
    if (signInInfo != null) {
      let welcome;
      if (signInInfo.signInType === 'users') {
        welcome = "Chào bạn " + signInInfo.name;
      }
      else {
        welcome = "Chào bác sĩ " + signInInfo.name;
      }
      return (
        <div className="btn-group mr-2">
          <Popup modal trigger={<button className="btn btn-light btn-sm rounded-bottom xinchao" id="xinchao" ><b>{welcome}</b></button>}>
            <div className="modal-content form-elegant">
              {/*Header*/}
              <div className="modal-header text-center">
                <h3 className="modal-title w-100 dark-grey-text my-3" id="myModalLabel"><strong>Chào {signInInfo.role} {signInInfo.name}, đây là thông tin của bạn</strong></h3>
              </div>
              <div className="form-control validate formProfile">Họ tên:  <b className="textInfo">{signInInfo.name}</b>
                <Popup modal trigger={<i className="fa fa-edit btnEdit"></i>}>
                  <div className="md-form mb-5">
                    <h4> Nhập tên mới</h4>
                    <input type="text" id="change-name" className="form-control validate" />
                    <button id="main-button" type="button" className="btn btn-block  btn-rounded z-depth-1a" onClick={changeName}>Đổi tên mới</button>
                  </div>
                </Popup>
              </div>
              <div className="form-control validate formProfile">Số điện thoại: <b className="textInfo">{signInInfo.phone}</b>
                <Popup modal trigger={<i className="fa fa-edit btnEdit"></i>}>
                  <div className="md-form mb-5">
                    <h4> Nhập số điện thoại mới</h4>
                    <input type="text" id="change-phone" className="form-control validate" />
                    <button id="main-button" type="button" className="btn btn-block  btn-rounded z-depth-1a" onClick={changePhone}>Đổi số điện thoại</button>
                  </div>
                </Popup>
              </div>
              <div className="form-control validate formProfile">Email: <b className="textInfo">{signInInfo.email}</b></div>
              <div className="text-center mb-3">
                <Popup modal trigger={<button id="main-button" type="button" className="btn btn-block  btn-rounded z-depth-1a" >Đổi mật khẩu</button>}>
                  <div className="md-form mb-5">
                    <h4> Nhập mật khẩu mới</h4>
                    <input type="password" id="change-password1" className="form-control validate" />
                    <h4> Nhập mật lại khẩu mới</h4>
                    <input type="password" id="change-password2" className="form-control validate" />
                  </div>
                  <button id="main-button" type="button" className="btn btn-block  btn-rounded z-depth-1a" onClick={changePassword}>Đổi mật khẩu</button>
                </Popup>
              </div>
            </div>
          </Popup>
          <button className="btn btn-light btn-sm rounded-bottom logout" id="logout" onClick={handleLogout} ><b>Log out</b>
          </button>
        </div>
      );
    }
    else {
      return (
        <div className="btn-group mr-2">
          <Popup modal trigger={<button className="btn btn-light btn-sm rounded-bottom" id="banlabacsi"><b>Bạn là bác sĩ ?</b></button>}>

            <div>
              <div className="modal-content form-elegant">
                <div className="text-center">
                  <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="xinchao"><strong>Chào bác sĩ</strong></h3>
                  <div className="modal-body mx-4">
                    {/*Body*/}
                    <div className="md-form mb-5">

                      <h4> Đăng nhập</h4>
                      <input type="email" id="Form-email-doctor" className="form-control validate" />

                    </div>

                    <div className="md-form pb-3">
                      <h4> Mật khẩu</h4>
                      <input type="password" id="Form-pass-doctor" className="form-control validate" />
                    </div>
                    <div className="text-center mb-3">
                      <button onClick={handleDoctorSignIn} id="main-button" type="button" className="btn btn-block btn-rounded z-depth-1a">Đăng Nhập</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popup>

          <div className="btn-group">
            <Popup modal trigger={<button className="btn btn-light btn-sm rounded-bottom signup-btn" id='dangky' ><b>Đăng Ký</b></button>}>

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

                    <input type="email" id="Form-signup-email" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="Form-email1">Email</label>
                  </div>
                  <div className="md-form pd-1">
                    <input type="text" id="Form-signup-name" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Họ &amp; tên đầy đủ</label>
                  </div>
                  <div className="md-form pd-1">
                    <input type="text" id="Form-signup-phone" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Số điện thoại</label>
                  </div>
                  <div className="md-form pd-1">
                    <input type="password" id="Form-pass1" className="form-control validate" />
                    <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Tạo một mật khẩu</label>
                  </div>
                  <div className="md-form pd-1">
                    <input type="password" id="Form-pass2" className="form-control validate" />

                    <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Nhập lại mật khẩu</label>
                  </div>
                  <form>
                    <label><input type="checkbox" name="personality" defaultChecked /> Nhận thông tin &amp; khuyến mãi của chúng tôi qua email</label><br />
                  </form>
                  <div className="text-center mb-3">

                    <button id="main-button" type="button" className="btn btn-block  btn-rounded z-depth-1a" onClick={handleSignUp}>Đăng Ký</button>

                  </div>
                </div>
                {/*Footer*/}
              </div>
              {/*/.Content*/}
            </Popup>
          </div>
        </div>
      );
    }
  }

  useEffect(() => {
    const dathenkham = document.getElementById("dathenkham");
    if (signInInfo != null) {
      dathenkham.style.display = "none";
      return;
    }
    if (window.sessionStorage.accessToken) {
      axios.post('https://final-wcy-backend.herokuapp.com/authentication/' + window.sessionStorage.getItem('loginType'), {
        accessToken: window.sessionStorage.accessToken,
        strategy: "jwt"
      })
        .then(function (response) {
          if (window.sessionStorage.getItem('loginType') === 'users') {
            setSignInInfo({
              name: response.data.user.name,
              email: response.data.user.email,
              phone: response.data.user.phone,
              signInType: 'users'
            });
          }
          else {
            setSignInInfo({
              name: response.data.doctor.name,
              email: response.data.doctor.email,
              phone: response.data.doctor.phone,
              signInType: 'doctors'
            });
          }
        })
        .catch(function (error) {
          console.log(error);
          window.sessionStorage.accessToken = null;
        })
    }
  }, null)
  const changePassword = () => {
    const pass1 = document.getElementById("change-password1").value;
    const pass2 = document.getElementById("change-password2").value;

    if (pass1 !== pass2) {
      alert("Nhập 2 mật khẩu phải khớp nhau");
      return;
    }

    axios.patch('https://final-wcy-backend.herokuapp.com/' + window.sessionStorage.getItem('loginType') + "/" + window.sessionStorage.getItem('userId'), {
      password: pass2
    }, {
      headers: {
        jwt: window.sessionStorage.accessToken
      }
    }).then(function (response) {
      alert("Thay đổi password thành công, mời đăng nhập lại")
      handleLogout();
    })
      .catch(function (error) {
        console.log(error);
        alert("Đổi mật khẩu thất bại")
      });
  }

  const changePhone = () => {
    const phone = document.getElementById("change-phone").value;

    if (phone === '') {
      alert("Vui lòng nhập số điện thoại mới");
      return;
    }

    axios.patch('https://final-wcy-backend.herokuapp.com/' + window.sessionStorage.getItem('loginType') + "/" + window.sessionStorage.getItem('userId'), {
      phone: phone
    }, {
      headers: {
        jwt: window.sessionStorage.accessToken
      }
    }).then(function (response) {
      alert("Thay đổi số điện thoại thành công");
      window.location.reload();
    })
      .catch(function (error) {
        console.log(error);
        alert("Đổi số điện thoại thất bại")
      });
  }

  const changeName = () => {
    const name = document.getElementById("change-name").value;

    if (name === '') {
      alert("Vui lòng nhập tên mới");
      return;
    }

    axios.patch('https://final-wcy-backend.herokuapp.com/' + window.sessionStorage.getItem('loginType') + "/" + window.sessionStorage.getItem('userId'), {
      name: name
    }, {
      headers: {
        jwt: window.sessionStorage.accessToken
      }
    }).then(function (response) {
      alert("Thay đổi tên thành công");
      window.location.reload();
    })
      .catch(function (error) {
        console.log(error);
        alert("Đổi tên thất bại")
      });
  }

  const handleSignUp = () => {
    const name = document.getElementById("Form-signup-name").value;
    const email = document.getElementById("Form-signup-email").value;
    const phone = document.getElementById("Form-signup-phone").value;
    const pass1 = document.getElementById("Form-pass1").value;
    const pass2 = document.getElementById("Form-pass2").value;
    if (name == null || email == null || phone == null || pass1 == null || pass2 == null) {
      alert("Xin hãy nhập đầy đủ thông tin")
      return
    }

    if (pass1 !== pass2) {
      alert("Nhập lại mật khẩu")
      return
    }

    axios.post('https://final-wcy-backend.herokuapp.com/users', {
      name: name,
      email: email,
      password: pass1,
      phone: phone,
    })
      .then(function (response) {
        alert("Đăng kí thành công")
      })
      .catch(function (error) {
        console.log(error);
        alert("Đăng kí thất bại")
      });
  }

  const handleSignIn = () => {
    const email = document.getElementById("Form-signin-email").value;
    const pass = document.getElementById("Form-signin-pass").value;

    if (email === null || pass === null) {
      alert("Nhập email & password")
      return
    }
    axios.post('https://final-wcy-backend.herokuapp.com/authentication/users', {
      email: email,
      password: pass,
      strategy: "local",
    })
      .then(function (response) {
        alert("Đăng nhập thành công")
        setSignInInfo({
          name: response.data.user.name,
          email: response.data.user.email,
          phone: response.data.user.phone,
          role: "bạn",
          signInType: 'users',
          id: response.data.user.id,
          showModal: false
        });
        window.sessionStorage.accessToken = response.data.accessToken;
        window.sessionStorage.setItem('loginType', 'users');
        window.sessionStorage.setItem('userId', response.data.user.id);
      })
      .catch(function (error) {
        console.log(error);
        alert("Đăng nhập thất bại")
      })
  }

  const handleDoctorSignIn = () => {
    const email = document.getElementById("Form-email-doctor").value;
    const pass = document.getElementById("Form-pass-doctor").value;

    if (email === null || pass === null) {
      alert("Nhập email & password")
      return
    }
    axios.post('https://final-wcy-backend.herokuapp.com/authentication/doctors', {
      email: email,
      password: pass,
      strategy: "local",
    })
      .then(function (response) {
        alert("Đăng nhập thành công")
        setSignInInfo({
          name: response.data.doctor.name,
          email: response.data.doctor.email,
          id: response.data.doctor.id,
          phone: response.data.doctor.phone,
          role: "bác sĩ",
          signInType: 'doctors'
        });

        window.sessionStorage.accessToken = response.data.accessToken;
        window.sessionStorage.setItem('loginType', 'doctors');
        window.sessionStorage.setItem('userId', response.data.doctor.id);
      })
      .catch(function (error) {
        console.log(error);
        alert("Đăng nhập thất bại")
      })
  }

  const handleLogout = () => {
    setSignInInfo(null);
    window.sessionStorage.accessToken = null;
    const dathenkham = document.getElementById("dathenkham");
    dathenkham.style.display = "display"
    alert("Đăng xuất thành công!!!  ")
    window.location.reload();
  }

  return (
    <div>
      <Router>
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
                    <Link className="nav-link" title="Trang Chủ" to="/home" >
                      <span className="menu-icon">
                        <img src={menuIcon} alt="hinh anh" />
                      </span>
                      <span>Trang chủ</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" title="Dịch Vụ" to="/services" >
                      <span className="menu-icon">
                        <img src={careService} alt="hinh anh" />
                      </span>
                      <span>Dịch vụ</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" title="Thông Tin Phòng Khám" to="/doctor-booking"  >
                      <span className="menu-icon">
                        <img src={medicine} alt="hinh anh" />
                      </span>
                      <span>Thông Tin Phòng Khám</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" title="Đội Ngũ Bác Sĩ" to="/doctors" >
                      <span className="menu-icon">
                        <img src={scope} alt="hinh anh" />
                      </span>
                      <span>Đội Ngũ Bác Sĩ</span>
                    </Link>
                  </li>
                </ul>
                <div className="btn-toolbar mb-1">
                  <div className="btn-group mr-2">
                    <Popup modal trigger={<button className="btn btn-success" id="dathenkham">Đặt Hẹn Khám Ngay</button>}>
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
                                <input type="email" id="Form-signin-email" className="form-control validate" />
                              </div>
                              <div className="md-form pb-3">
                                <h4> Mật khẩu</h4>
                                <input type="password" id="Form-signin-pass" className="form-control validate" />
                              </div>
                              <div className="text-center mb-3">
                                <button id="dangnhap" type="button" className="btn btn-block btn-rounded z-depth-1a" onClick={handleSignIn}>Đăng Nhập</button>
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
                {signInHandler()}
              </div>
            </div>
          </nav>
        </section>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services" >
            <Services />
          </Route>
          <Route path="/doctors" >
            <Doctors />
          </Route>
          <Route path="/doctor-booking" >
            <DoctorBooking />
          </Route>
          <Route path="/services/pediatrics" >
            <Pediatrics />
          </Route>
          <Route path="/services/periodic" >
            <Periodic />
          </Route>
          <Route path="/services/nursing" >
            <Nursing />
          </Route>
          <Route path="/services/generality" >
            <Generality />
          </Route>
          <Route path="/services/cancerscreening" >
            <CancerScreening />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
