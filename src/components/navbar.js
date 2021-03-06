import React from 'react';
import Popup from "reactjs-popup";

import '../style/form-style.css';
import '../style/home-style.css';
import logo from '../style/img/logo/small-logo.png';
import menuIcon from '../style/img/png/experience-icon.png';
import careService from '../style/img/svg/care-service.svg';
import medicine from '../style/img/png/medicine-thumb.png';
import scope from '../style/img/png/stethoscope-thumb.png'
import SignInModal from './sign-in-modal'
function Navbar() {
  return (
   <div>
       <section id="nav-bar">
  <nav id="collapsibleNav" className="navbar-expand-lg fixed-top">
    <nav className="container-fluid navbar navbar-expand navbar-light bg-white">
      {/*logo*/}
      <div className="navbar-brand">
        <a title="We Care You" href="home.html">
          <img src={logo} alt="hinh anh"/></a>
      </div>
      {/*toggle button*/}
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNav" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      {/*navbar items*/} 
      <div className="collapse navbar-collapse narbar">
        <ul className="pl-5 navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" title="Trang Chủ" href="home.html">
              <span className="menu-icon">
                <img src={menuIcon} alt="hinh anh" />
              </span> Trang Chủ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Dịch Vụ" href="dichvu.html">
              <span className="menu-icon">
                <img src={careService} alt="hinh anh" />
              </span>Dịch Vụ </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Thông Tin Phòng Khám" href="office-info.html">
              <span className="menu-icon">
                <img src={medicine} alt="hinh anh" />
              </span>Thông Tin Phòng Khám</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Đội Ngũ Bác Sĩ" href="doctor.html">
              <span className="menu-icon">
                <img src={scope} alt="hinh anh"/>
              </span>Đội Ngũ Bác Sĩ </a>
          </li>
        </ul>
        <div className="btn-toolbar mb-1">
          <div className="btn-group mr-2">
          <Popup modal trigger={<button className="btn btn-success">Đặt Hẹn Khám Ngay</button>}>
              <div>
              <div className="modal-content form-elegant">
              <div className="text-center">
              <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Đăng Nhập</strong></h3>
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
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> hoặc đăng nhập
                bằng:</p>
              <div className="row my-3 d-flex justify-content-center">
                {/*Facebook*/}
                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-facebook-f text-center" /></button>
                {/*Google +*/}
                <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fab fa-google-plus-g" /></button>
              </div>
            </div>
            </div>
      </div>
              </div>
          </Popup>
            </div>
        </div>        
      </div></nav>
    <div id="signin-out-gr-button" className="container-fluid btn-group d-flex justify-content-end">

      {/* Đăng nhập button */}
      <div className="btn-toolbar mb-1">
      <div className="btn-group mr-2">
      <Popup modal trigger={<button className="btn btn-light btn-sm rounded-bottom"><b>Đăng Nhập</b></button>}>
              <div>
              <div className="modal-content form-elegant">
              <div className="text-center">
              <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Đăng Nhập</strong></h3>
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
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> hoặc đăng nhập
                bằng:</p>
              <div className="row my-3 d-flex justify-content-center">
                {/*Facebook*/}
                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-facebook-f text-center" /></button>
                {/*Google +*/}
                <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fab fa-google-plus-g" /></button>
              </div>
            </div>
            </div>
      </div>
              </div>
      </Popup>
          </div>
        </div> 
      <div className="btn-group mr-2">
      <Popup modal trigger={<button className="btn btn-light btn-sm rounded-bottom" ><b>Đăng Ký</b></button>}>
    {/*Content*/}
    <div className="modal-content form-elegant">
      {/*Header*/}
      <div className="modal-header text-center">
        <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Đăng Ký Tài Khoản</strong></h3>
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
  </nav>
</section>

   </div>
  );
}

export default Navbar;
