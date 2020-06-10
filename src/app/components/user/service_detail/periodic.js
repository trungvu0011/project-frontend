import React, { Component } from 'react'
//import '../../../../css/style_dinhki.css';

export default class periodic extends Component {
    render() {
        return (
            <div>
                <section id="dinhki__head">
                    <div class="coverDinhKi">
                        <img src="resource/coverNhikhoa.png" alt="cover" width="1200px" height="400px" />
                    </div>

                    <div class="textDinhKi">Khám sức khoẻ định kì</div>

                    <div class="gachduoiDinhKi">
                        <img src="resource/gachduoi.png" alt="doctor" width="200px" height="8px" /></div>

                    <div class="textChamSoc">Phòng bệnh luôn tốt hơn chữa bệnh</div>

                    <div class="textKhamTaiNha">Chỉ với </div>

                    <div class="textGiaKhamDinhKi">750.000 Đ</div>

                    <button class="btn btn-success buttonHenKham_DinhKi" data-toggle="modal" data-target="#booking-form">Đặt Hẹn Khám</button>
                </section>

                <section id="dinhki__content">
                    <div class="textGhiChuKetQua">
                        <a>Ghi chú kết quả lâm sàng và xét nghiệm </a>
                    </div>

                    <div class="gachduoiKQ">
                        <img src="resource/gachduoi.png" alt="doctor" width="350px" height="8px" />
                    </div>

                    <div class="row">
                        <div class="khamlamsang col">
                            <div class="card">
                                <div class="card-header ">
                                    <img src="resource/LAMSANG.png" /> Khám lâm sàng
                </div>

                                <div class="card-body">
                                    <h6> <img src="resource/tick.png" /> KIỂM TRA SINH HIỆU</h6>
                                    <h6> <img src="resource/tick.png" /> KHÁM CƠ XƯƠNG KHỚP</h6>
                                    <h6> <img src="resource/tick.png" /> XEM TIỂU SỬ BỆNH ÁN</h6>
                                    <h6> <img src="resource/tick.png" /> KIỂM TRA TIM VÀ PHỔI</h6>
                                    <h6> <img src="resource/tick.png" /> KIỂM TRA ĐẦU VÀ CỔ</h6>
                                    <h6> <img src="resource/tick.png" /> CHỈ SỐ TRỌNG LƯỢNG CƠ THỂ (BMI)</h6>
                                    <h6> <img src="resource/tick.png" /> KIỂM TRA CHẾ ĐỘ DINH DƯỠNG &amp; SINH HOẠT</h6>
                                    <h6> <img src="resource/tick.png" /> TƯ VẤN</h6>
                                </div>
                            </div>
                        </div>

                        <div class="xetnghiem col">

                            <div class="card">
                                <div class="card-header ">
                                    <img src="resource/XETNGHIEM.png" /> Xét nghiệm </div>

                                <div class="card-body">
                                    <h6> <img src="resource/tick.png" /> CÔNG THỨC MÁU</h6>
                                    <h6> <img src="resource/tick.png" /> LƯỢNG MỠ TRONG MÁU</h6>
                                    <h6> <img src="resource/tick.png" /> TẦM SOÁT ĐÁI THÁO ĐƯỜNG</h6>
                                    <h6> <img src="resource/tick.png" /> LƯỢNG PROTEIN</h6>
                                    <h6> <img src="resource/tick.png" /> ALBUMIN</h6>
                                    <h6> <img src="resource/tick.png" /> Urê và Creatinine (Chức năng Thận)</h6>
                                    <h6> <img src="resource/tick.png" /> Axit Uric và xét nghiệm nước tiểu</h6>
                                    <h6> <img src="resource/tick.png" /> SGOT và SGPT</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
