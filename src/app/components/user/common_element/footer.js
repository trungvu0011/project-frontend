import React from 'react';

import '../../../../css/form-style.css';
import '../../../../css/home-style.css';
import fbIcon from '../../../../assets/png/fb.png';
import igIcon from '../../../../assets/png/ig.png';
import logo from '../../../../assets/logo/logo.png';
function Footer() {
    return (
        <div>
            <footer>
                <div className="container-fluid">
                    <div className="row p-6 flex justify-content-center">
                        <div className="col-lg-4 d-none d-lg-block">
                            <div aria-controls="footerInfo" aria-expanded="false"
                                className="d-md-none footer-list-heading collapsed" data-toggle="collapse" href="#footerInfo">
                                <span className="font-bold">Thông Tin Công Ty</span>
                                <i className="fas fa-plus"></i>
                                <i className="fas fa-minus"></i>
                            </div>

                            <ul className="footer-list collapse-item collapse" id="footerInfo">
                                <div><span className="font-bold">Điện thoại </span><a>0123456789</a></div>
                                <div><span className="font-bold">Hotline</span><a >0912345678</a></div>
                                <div><span className="font-bold">Hỗ trợ </span><a >support.wecareyou@gmail.com</a></div>
                                <div className="company_name font-bold">Hãy theo WeCareYou tại</div>
                                <div className="social-link company_paper-proof">
                                    <a><img src={fbIcon}></img></a>
                                    <a><img src={igIcon}></img></a>
                                </div>
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-2">
                            <div aria-controls="footerService" aria-expanded="false"
                                className="d-md-none footer-list-heading collapsed" data-toggle="collapse"
                                href="#footerService">
                                <span className="font-bold">Dịch vụ</span>
                                <i className="fas fa-plus"></i>
                                <i className="fas fa-minus"></i>
                            </div>

                            <ul className="footer-list collapse-item collapse" id="footerService">
                                <div className="d-none d-md-block">
                                    <span className="font-bold">Dịch vụ</span>
                                </div>
                                <div>
                                    <a data-toggle="modal" data-target="#booking-form">Hẹn Bác Sĩ Đến Nhà</a>
                                </div>
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-2">
                            <div aria-controls="footerMore" aria-expanded="false"
                                className="d-md-none footer-list-heading collapsed" data-toggle="collapse" href="#footerMore">
                                <span className="font-bold">Tìm Hiểu Thêm</span>
                                <i className="fas fa-plus"></i>
                                <i className="fas fa-minus"></i>
                            </div>

                            <ul className="footer-list collapse-item collapse" id="footerMore">
                                <li className="d-none d-md-block">
                                    <span className="font-bold">Tìm Hiểu Thêm</span>
                                </li>
                                <div><a href="#">Đội Ngũ Bác Sĩ</a></div>
                                <div><a href="#">Dịch Vụ Thăm Khám</a></div>
                                <div><a href="#">Về Chúng Tôi</a></div>
                            </ul>
                        </div>

                        <div className="col-md-5 col-lg-4">
                            <div aria-controls="footerCS" aria-expanded="false"
                                className="d-md-none footer-list-heading collapsed" data-toggle="collapse" href="#footerCS">
                                <span className="font-bold">Hỗ Trợ Khách Hàng</span>
                                <i className="fas fa-plus"></i>
                                <i className="fas fa-minus"></i>
                            </div>

                            <ul className="footer-list collapse-item collapse" id="footerCS">
                                <div className="d-none d-md-block"><span className="font-bold">Hỗ Trợ Khách Hàng</span></div>
                                <div><a href="#">Câu Hỏi Thường Gặp</a></div>
                                <div><a href="#">Chính Sách Bảo Mật</a></div>
                                <div><a href="#">Điều Khoản</a></div>
                                <div><a data-target="#contactModal" data-toggle="modal" href="">Liên hệ</a></div>
                            </ul>
                        </div>
                        <hr></hr>
                        <div className="col col-lg-3 ">
                            <ul className="footer-list">
                                <div><span className="font-bold">Điện thoại </span><a href="#"> 0123456789</a></div>
                                <div><span className="font-bold">Hotline</span><a href="#"> 0912345678</a></div>
                                <div><span className="font-bold">Hỗ trợ </span><a href="#"> support.wecareyou@gmail.com</a></div>
                                <div className="company_name font-bold">Hãy theo dõi WeCareYou tại
                                    <div className="social-link company_paper-proof">
                                    <a href="#"><img src={fbIcon}></img></a>
                                    <a href="#"><img src={igIcon}></img></a>
                                    </div>
                                </div>
                            </ul>
                        </div>

                        <div className="col col-lg-3 ">
                            <ul className="footer-list">
                                <div className="d-none d-md-block"><span className="font-bold">Dịch vụ</span></div>
                                <div><a href="#" data-toggle="modal" data-target="#booking-form">Hẹn Bác Sĩ Đến Nhà</a>
                                </div>
                            </ul>
                        </div>

                        <div className="col col-lg-3 ">
                            <ul className="footer-list">
                                <li className="d-none d-md-block">
                                    <span className="font-bold">Tìm Hiểu Thêm</span></li>
                                <div><a href="doctor.html">Đội Ngũ Bác Sĩ</a></div>
                                <div><a href="#">Dịch Vụ Thăm Khám</a></div>
                                <div><a href="#">Về Chúng Tôi</a></div>
                            </ul>
                        </div>

                        <div className="col col-lg-3 ">
                            <ul className="footer-list">
                                <div className="d-none d-md-block"><span className="font-bold">Hỗ Trợ Khách Hàng</span></div>
                                <div><a href="#">Câu Hỏi Thường Gặp</a></div>
                                <div><a href="#">Chính Sách Bảo Mật</a></div>
                                <div><a href="#">Điều Khoản</a></div>
                                <div><a href="">Liên hệ</a></div>
                            </ul>
                        </div>
                    </div>

                    <a href="home.html" className="container d-flex justify-content-center">
                        <img src={logo}></img>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;