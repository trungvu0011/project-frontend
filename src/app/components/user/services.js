import React, { Component } from 'react';
import '../../../css/dichvu-style.css';

import Pediatrics from '../../../assets/background/nhikhoa.jpg';
import Periodic from '../../../assets/background/dinhki.jpg';
import Generality from '../../../assets/background/tongquat.jpg';
import Nursing from '../../../assets/background/dieuduong.png';
import CancerScreening from '../../../assets/background/ungthu.png';
import Doctor from '../../../assets/background/doctor.png';

class Services extends Component {
    render() {
        return <div>
            <section id="service-top">
                <div className="row container-fluid">
                    <div className="col container row">
                        <h1>Bạn thấy không khoẻ?</h1>
                        <br></br>
                        <b><h3>HÃY ĐỂ CHÚNG TÔI CHĂM SÓC BẠN</h3></b>
                        <br></br>
                        <button className="btn btn-success" data-toggle="modal" data-target="#booking-form">Đặt Hẹn Khám Ngay</button>
                    </div>

                    <div className="bg">
                        <img src={Doctor} alt="doctor" />
                    </div>
                </div>

                <div className="row">
                    <div className="rectangle "></div>
                </div>
            </section>

            <section id="service-content">
                <div className="dichvuthamkham">CÁC DỊCH VỤ THĂM KHÁM CỦA CHÚNG TÔI</div>
                <div className="col row d-flex justify-content-around">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src={Pediatrics} className="card-img-top" alt="card-img" />
                                <div className="card-body">
                                    <h5 className="card-title col"><div>Nhi khoa</div><b>300.000đ</b></h5>
                                    <a href="/services/pediatrics" className="btn btn-info">TÌM HIỂU THÊM</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <img src={Periodic} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title col"><div>Khám định kì</div>Khám định kì<b>700.000đ</b></h5>
                                    <a href="/services/periodic" className="btn btn-info">TÌM HIỂU THÊM</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <img src={Generality} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title col"><div>Khám tổng quát</div><b>1.000.000đ</b></h5>
                                    <a href="/services/generality" className="btn btn-info">TÌM HIỂU THÊM</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col">
                            <div className="card">
                                <img src={Nursing} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title col"><div>Điều dưỡng</div><b>300.000đ</b></h5>
                                    <a href="/services/nursing" className="btn btn-info">TÌM HIỂU THÊM</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <img src={CancerScreening} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title col"><div>Tầm soát ung thư</div><b>700.000đ</b></h5>
                                    <a href="/services/cancerscreening" className="btn btn-info">TÌM HIỂU THÊM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>;
    }
}

export default Services;