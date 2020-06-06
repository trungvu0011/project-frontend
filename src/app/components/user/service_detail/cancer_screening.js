import React, { Component } from 'react'
import '../../../../css/style_ungthu.css';
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
                                    <img class="card-img-top" src="resource/cacloaiungthu.png" alt="Card image cap" />
                                    <img src="resource/LAMSANG.png" />Các loại ung thư
                                </div>

                                <div class="card-body">
                                    <h6> <img src="resource/tick.png" /> Ngực &amp; Buồng trứng</h6>
                                    <h6> <img src="resource/tick.png" /> Tuyến tiền liệt</h6>
                                    <h6> <img src="resource/tick.png" /> Gan</h6>
                                    <h6> <img src="resource/tick.png" /> Tuyến tuỵ</h6>
                                    <h6> <img src="resource/tick.png" /> Tử cung</h6>
                                    <h6> <img src="resource/tick.png" /> Đại trực tràng</h6>
                                    <h6> <img src="resource/tick.png" /> Dạ dày</h6>
                                    <h6> <img src="resource/tick.png" /> Tuyến giáp</h6>
                                    <h6> <img src="resource/tick.png" /> U ác tính</h6>
                                    <h6> <img src="resource/tick.png" /> Bạch cầu</h6>
                                    <h6> <img src="resource/tick.png" /> Não</h6>
                                    <h6> <img src="resource/tick.png" /> Thận</h6>
                                    <h6> <img src="resource/tick.png" /> Thần kinh</h6>
                                </div>
                            </div>
                        </div>

                        <div class="dauhieuditruyen col">

                            <div class="card">
                                <div class="card-header ">
                                    <img class="card-img-top" src="resource/dauhieuungthu.jpg" alt="Card image cap" />
                                    <img src="resource/XETNGHIEM.png" /> Xét nghiệm
                                </div>

                                <div class="card-body">
                                    <h6> <img src="resource/tick.png" /> BRCA 1 &amp; BRCA2</h6>
                                    <h6> <img src="resource/tick.png" /> STK-11</h6>
                                    <h6> <img src="resource/tick.png" /> PALB2</h6>
                                    <h6> <img src="resource/tick.png" /> VLH</h6>
                                    <h6> <img src="resource/tick.png" /> RB1</h6>
                                    <h6> <img src="resource/tick.png" /> RET</h6>
                                    <h6> <img src="resource/tick.png" /> CDH1</h6>
                                    <h6> <img src="resource/tick.png" /> TP 53</h6>
                                    <h6> <img src="resource/tick.png" /> PTEN</h6>
                                    <h6> <img src="resource/tick.png" /> MLH1, MSH2, MSH6, PMS2, EPCAM</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
