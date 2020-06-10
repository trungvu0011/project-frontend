import React, { Component } from 'react'
//import '../../../../css/style_nhikhoa.css';

export default class pediatrics extends Component {
    render() {
        return (
            <div>
                <section id="nhikhoa__top">
                    <div className="row container-fluid">
                        <div className="col container">
                            <h1><b>Nhi Khoa</b></h1> <br />
                            <b><h3>Chăm sóc, điều trị cho trẻ từ sơ sinh đến khi trưởng thành</h3></b> <br />
                            <h4>Khám tại nhà chỉ với</h4>
                            <h2><b>300.000 Đ</b></h2>
                            <button className="btn btn-success" data-toggle="modal" data-target="#booking-form">Đặt Hẹn Khám</button>
                        </div>

                        <div className="bg">
                            <img src="resource/coverNhikhoa.png" alt="doctor" height="450px" width=" 900px" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="rectangle"></div>
                    </div>
                </section>

                <section id="nhikhoa__content">
                    <h1 className="d-flex justify-content-center pt-2 pb-2 ">
                        <b> Điều trị nhi khoa </b>  </h1>

                    <div className="rectangle container"></div>

                    <div className="row">

                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <img src="resource/binhsua.png" alt=''/>
                                        <div className="col align-self-center"> Bài kiểm tra sơ sinh <br /> dành cho trẻ dưới 1 tuổi</div></div>
                                </div>

                                <div className="card-body">
                                    <h6> <img src="resource/tick.png" alt='tick' /> ĐÁNH GIÁ PHÁT TRIỂN THỂ CHẤT</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> HƯỚNG DẪN MASSAGE</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> ĐÁNH GIÁ DINH DƯỠNG</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> HƯỚNG DẪN RỬA MŨI</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> ĐÁNH GIÁ VÀNG DA SƠ SINH</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' />/> KHÁM CUỐN RỐN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> THU THẬP SINH HIỆU</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <img src="resource/binhsua.png" alt=''/>
                                        <div className="col align-self-center"> Khám trẻ lớn<br /> Giành cho trẻ 2 đến 15 tuổi</div></div>
                                </div>
                                <div className="card-body">
                                    <h6> <img src="resource/tick.png" alt='tick' /> KHÁM THỂ CHẤT TOÀN DIỆN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> KHẢ NĂNG NGHE, NÓI, NHÌN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> ĐÁNH GIÁ TĂNG TRƯỞNG &amp; PHÁT TRIỂN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> KHÁM TÂM LÝ</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> TƯ VẤN LỊCH CHÍCH NGỪA</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> KHẢ NĂNG TÂM LÝ &amp; KĨ NĂNG MỀM</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <img src="resource/binhsua.png" alt=''/>
                                        <div className="col align-self-center"> Khám tổng quát<br />Khi con yêu bạn bị ốm</div></div>
                                </div>
                                <div className="card-body">
                                    <h6> <img src="resource/tick.png" alt='tick' /> KIỂM TRA DẤU HIỆU SINH TỒN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> KIỂM TRA MỘT CÁCH TOÀN DIỆN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> ĐÁNH GIÁ CÁC TRIỆU CHỨNG HO, SỐT</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> ĐÁNH GIÁ CÁC TRIỆU CHỨNG VIÊM NHIỄM ĐƯỜNG RUỘT</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> ĐÁNH GIÁ NHIỀU VẤN ĐỀ SỨC KHOẺ KHÁC</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
