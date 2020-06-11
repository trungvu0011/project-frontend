import React, { Component } from 'react'
//import '../../../../css/style_ungthu.css';

export default class cancer_screening extends Component {
    render() {
        return (
            <div>
                <section id="ungthu__top">

                    <div class="coverUngThu">
                        <img src="resource/coverNhikhoa.png" alt="doctor" />
                    </div>

                    <div class="textUngThu">Xét nghiệm <br /> ung thư di truyền </div>

                    <div class="textChamSoc">Xét nghiệm trên 17 gen di truyền để xác định nguy cơ ung thư.</div>

                    <div class="textKhamTaiNha">Giá gốc | 6.200.000đ </div>

                    <div class="textGiaUngThu">6.000.000 Đ</div>

                    <div class="gachduoiDieuDuong">
                        <img src="resource/gachduoi.png" alt="" height="8px" width="180px" />
                    </div>

                    <button class="btn btn-success buttonHenKham_UngThu" data-toggle="modal" data-target="#booking-form">Đặt Hẹn Khám</button>
                </section>

                <section id="ungthu__content">

                    <div class="textXetNghiemUngThu">Xét nghiệm ung thư di truyền là gì?</div>

                    <div class="gachduoiKQ">
                        <img src="resource/gachduoi.png" alt="doctor" width="300px" height="8px" />
                    </div>

                    <div class="text_giaithich">
                        <h4>Xét nghiệm di truyền được thực hiện nhằm tìm các biến đổi về mặt di truyền (đột biến) trong nhiễm sắc thể,
                        gen hoặc protein. Các đột biến nguy hại có thể làm tăng nguy cơ mặc bệnh, ví dụ như ung thư
        Nhìn chung, đột biến di truyền chiếm khoảng 5% - 10% các nguyên nhân gây ung thư.</h4>
                    </div>

                    <div class="row">
                        <div class="cacloaiungthu col">
                            <div class="card">
                                <div class="card-header ">
                                    <img class="card-img-top" src="resource/cacloaiungthu.png" alt="Card cap" />
                                    <img src="resource/LAMSANG.png" alt=''/>Các loại ung thư
                                </div>

                                <div class="card-body">
                                    <h6> <img src="resource/tick.png" alt='tick' /> Ngực &amp; Buồng trứng</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Tuyến tiền liệt</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Gan</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Tuyến tuỵ</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Tử cung</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Đại trực tràng</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Dạ dày</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Tuyến giáp</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> U ác tính</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Bạch cầu</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Não</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Thận</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Thần kinh</h6>
                                </div>
                            </div>
                        </div>

                        <div class="dauhieuditruyen col">

                            <div class="card">
                                <div class="card-header ">
                                    <img class="card-img-top" src="resource/dauhieuungthu.jpg" alt="Card cap" />
                                    <img src="resource/XETNGHIEM.png" alt=''/> Xét nghiệm
                                </div>

                                <div class="card-body">
                                    <h6> <img src="resource/tick.png" alt='tick' /> BRCA 1 &amp; BRCA2</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> STK-11</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> PALB2</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> VLH</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> RB1</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> RET</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> CDH1</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> TP 53</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> PTEN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> MLH1, MSH2, MSH6, PMS2, EPCAM</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
