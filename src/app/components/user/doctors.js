import React, { Component } from 'react'
import '../../../css/doctor-style.css'

import Doctor from '../../../assets/background/doctor.png';
import experience from '../../../assets/png/experience-icon.png'
import degree from '../../../assets/png/degree-icon.png';
import international from '../../../assets/png/international-icon.png';
import multilingual from '../../../assets/png/multilingual-icon.png';
import Footer from './common_element/footer';
import Navbar from './common_element/navbar';
class Doctors extends Component {

    render() {
        return (
            <div>
            <div>
                <section id="top-doctors-section" >
                    <div className="row container-fluid" >
                        <div className="col">
                            <h1>Đội Ngũ Bác Sĩ <br /> Chuyên Khoa <br /><b>Thân Thiện &#38; <br /> Giàu Kinh Nghiệm</b></h1>
                            <hr />
                            <h4>Đội ngũ bác sĩ của chúng tôi là những bác sĩ ưu tú Chuyên Khoa I,
                            Thạc sĩ, Tiến sĩ với thâm niên trung bình từ 7 năm kinh nghiệm,
                            hiện đều đang công tác và giảng dạy tại các bệnh viện uy tín hàng đầu của TP.HCM.
                        </h4>
                        </div>

                        <div className="row"><img src={Doctor} /></div>
                    </div>
                </section>

                <section id="doctor-lookup">
                    <h2 className="pt-5 pl-5"><b>TÌM BÁC SĨ CHO BẠN</b></h2>

                    <div className="row d-flex justify-content-between pt-3">
                        <select className="container browser-default custom-select w-25" >
                            <option defaultValue>Tìm theo bệnh viện</option>
                            <option value="1">Bệnh viện 115</option>
                            <option value="2">Bệnh viện Hùng Vương</option>
                            <option value="3">Bệnh viện Đại học y dược</option>
                        </select>

                        <div className="input-group form-sm form-2 pl-0 w-25">
                            <input className="form-control my-0 py-1" type="text" placeholder="Tìm theo tên bác sĩ" aria-label="Search" />
                            <div className="input-group-append">
                                <span className="input-group-text lighten-3" id="basic-text1">
                                    <i className="fas fa-search text-grey" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>

                        <select className="container browser-default custom-select w-25" >
                            <option defaultValue>Tìm theo chuyên ngành</option>
                            <option value="1">Tim mạch</option>
                            <option value="2">Nhi khoa</option>
                            <option value="3">Điều dưỡng</option>
                        </select>
                    </div>

                    <div className="col pt-5 pb-3 pl-5">
                        <div className="row">
                            <div className="col">
                                <div className="card text-center">
                                    <img className="card-img-top rounded-circle " src="{{avatar}}" alt="Doctor's avatar" />
                                    <div className="card-body">
                                        <h4 className="card-title"><a>doctor-name</a></h4>
                                        <button id="doctor-booking" className="btn btn-success pr-5 pl-5" data-toggle="modal" data-target="#booking-form">Đặt bác sĩ</button>
                                        <button id="doctor-info" className="btn btn-info">Xem thông tin</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-center">
                                    <img className="card-img-top rounded-circle" src="{{avatar}}" alt="Doctor's avatar" />
                                    <div className="card-body">
                                        <h4 className="card-title"><a>doctor-name</a></h4>
                                        <button id="doctor-booking" className="btn btn-success pr-5 pl-5" data-toggle="modal" data-target="#booking-form">Đặt bác sĩ</button>
                                        <button id="doctor-info" className="btn btn-info">Xem thông tin</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card text-center">
                                    <img className="card-img-top rounded-circle" src="{{avatar}}" alt="Doctor's avatar" />
                                    <div className="card-body">
                                        <h4 className="card-title"><a>doctor-name</a></h4>
                                        <button id="doctor-booking" className="btn btn-success pr-5 pl-5" data-toggle="modal" data-target="#booking-form">Đặt bác sĩ</button>
                                        <button id="doctor-info" className="btn btn-info">Xem thông tin</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br />
                        <div className="row pt-3">
                            <div className="col">
                                <div className="card text-center w-85">
                                    <img className="card-img-top rounded-circle " src="{{avatar}}" alt="Doctor's avatar" />
                                    <div className="card-body">
                                        <h4 className="card-title"><a>doctor-name</a></h4>
                                        <button id="doctor-booking" className="btn btn-success pr-5 pl-5" data-toggle="modal" data-target="#booking-form">Đặt bác sĩ</button>
                                        <button id="doctor-info" className="btn btn-info">Xem thông tin</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-center w-85">
                                    <img className="card-img-top rounded-circle " src="{{avatar}}" alt="Doctor's avatar" />
                                    <div className="card-body">
                                        <h4 className="card-title"><a>doctor-name</a></h4>
                                        <button id="doctor-booking" className="btn btn-success pr-5 pl-5" data-toggle="modal" data-target="#booking-form">Đặt bác sĩ</button>
                                        <button id="doctor-info" className="btn btn-info">Xem thông tin</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-center w-85">
                                    <img className="card-img-top rounded-circle " src="{{avatar}}" alt="Doctor's avatar" />
                                    <div className="card-body">
                                        <h4 className="card-title"><a>doctor-name</a></h4>
                                        <button id="doctor-booking" className="btn btn-success pr-5 pl-5" data-toggle="modal" data-target="#booking-form">Đặt bác sĩ</button>
                                        <button id="doctor-info" className="btn btn-info">Xem thông tin</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center pb-3" id="see-more-button">
                        <button className="btn btn-light-blue"><b>Xem thêm các bác sĩ khác</b></button>
                    </div>
                </section>

                <section id="doctor-experience">
                    <div className="row d-flex justify-content-center" width="700px">

                        <li className="row container">
                            <img src={experience} height="50px" width="50px" alt='exp icon'/>
                            <span className="col ">
                                <b>Giàu kinh nghiệm</b>
                                <div>Đội ngũ bác sĩ WeCare là những bác sĩ ưu tú Chuyên Khoa I,
                Thạc sĩ, Tiến sĩ với thâm niên trung bình từ 7 năm kinh nghiệm</div>
                            </span>
                        </li>

                        <li className="row container">
                            <img src={degree} height="50px" width="50px" alt='degree icon'/>
                            <span className="col ">
                                <b>Chuyên Môn Cao</b>
                                <div>Các bác sĩ WeCare đều đang công tác và giảng dạy tại các bệnh viện uy tín hàng đầu thành phố như BV Chợ Rẫy,
                BV Gia Định, BV Nhi Đồng 1,2, BV Nhi Đồng TP, Đại Học Y Dược TPHCM,...</div>
                            </span>
                        </li>

                        <li className="row  container">
                            <img src={international} height="50px" width="50px" alt='international icon'/>
                            <span className="col ">
                                <b>Kinh Nghiệm Quốc Tế</b>
                                <div>Nhiều bác sĩ WeCareYou đã từng đi tu nghiệp tại các nước có nền y học phát triển như Mỹ,
                Pháp, Đức, Singapore, Thái Lan,...</div>
                            </span>
                        </li>

                        <li className="row container mb-5">
                            <img src={multilingual} height="50px" width="50px" alt='multilingual icon'/>
                            <span className="col ">
                                <b>Trình Độ Ngoại Ngữ</b>
                                <div>Nhiều bác sĩ WeCareYou có thể trao đổi với bệnh nhân bằng nhiều ngôn ngữ như tiếng Việt,
                tiếng Anh, tiếng Pháp,...</div>
                            </span>
                        </li>
                    </div>
                </section>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Doctors;