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
                                    <img src="resource/LAMSANG.png" alt=''/> Khám lâm sàng
                </div>

                                <div class="card-body">
                                    <h6> <img src="resource/tick.png" alt='tick' /> KIỂM TRA SINH HIỆU</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> KHÁM CƠ XƯƠNG KHỚP</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> XEM TIỂU SỬ BỆNH ÁN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> KIỂM TRA TIM VÀ PHỔI</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> KIỂM TRA ĐẦU VÀ CỔ</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> CHỈ SỐ TRỌNG LƯỢNG CƠ THỂ (BMI)</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> KIỂM TRA CHẾ ĐỘ DINH DƯỠNG &amp; SINH HOẠT</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> TƯ VẤN</h6>
                                </div>
                            </div>
                        </div>

                        <div class="xetnghiem col">

                            <div class="card">
                                <div class="card-header ">
                                    <img src="resource/XETNGHIEM.png" alt=''/> Xét nghiệm </div>

                                <div class="card-body">
                                    <h6> <img src="resource/tick.png" alt='tick' /> CÔNG THỨC MÁU</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> LƯỢNG MỠ TRONG MÁU</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> TẦM SOÁT ĐÁI THÁO ĐƯỜNG</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> LƯỢNG PROTEIN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> ALBUMIN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Urê và Creatinine (Chức năng Thận)</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> Axit Uric và xét nghiệm nước tiểu</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> SGOT và SGPT</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
