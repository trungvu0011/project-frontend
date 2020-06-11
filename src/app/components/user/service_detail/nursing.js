import React, { Component } from 'react'
//import '../../../../css/style_dieuduong.css';
export default class nursing extends Component {
    render() {
        return (
            <div>
                <section id="dieuduong__top">

                    <div class="coverDieuDuong">
                        <img src="resource/coverNhikhoa.png" alt="doctor" />
                    </div>
                    <div class="textDieuDuong"> Điều dưỡng tại nhà</div>
                    <div class="textChamSoc">Đội ngũ điều dưỡng chuyên nghiệp đến tận nhà chăm sóc từ trẻ sơ sinh đến hỗ trợ
        việc hồi phục sau những ca phẫu thuật hoặc chấn thương.</div>
                    <div class="textKhamTaiNha">Chỉ với</div>
                    <div class="textGiaDieuDuong">300.000Đ</div>
                    <div class="gachduoiDieuDuong">
                        <img src="resource/gachduoi.png" alt="" height="8px" width="180px" /> </div>
                    <button class="btn btn-success buttonHenKham_Dieuduong" data-toggle="modal" data-target="#booking-form">Đặt Hẹn Khám</button>
                </section>

                <section id="dieuduong__content">
                    <div class="textDoiNguDieuDuong">
                        <a>Đội ngũ Điều dưỡng của WeCareYou sẵn sàng </a>
                    </div>

                    <div class="gachduoiKQ">
                        <img src="resource/gachduoi.png" alt="" width="415px" height="8px" />
                    </div>

                    <div class="row">
                        <div class="chamsocbeyeu col">

                            <div class="card">
                                <div class="card-header ">
                                    <img class="card-img-top" src="resource/chamsocbe.jpg" alt="Card cap" />
                                    <img src="resource/LAMSANG.png" alt=''/>Chăm sóc bé yêu</div>

                                <div class="card-body">
                                    <h6> <img src="resource/tick.png" alt='tick' /> TƯ VẤN NUÔI CON BẰNG SỮA MẸ</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> TẮM CHO BÉ</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> RỬA MŨI CHO BÉ</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> VỆ SINH RỐN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> MÁT XA CHO BÉ</h6>
                                </div>
                            </div>
                        </div>

                        <div class="chamsocvetthuong col">
                            <div class="card">
                                <div class="card-header ">
                                    <img class="card-img-top" src="resource/chamsocvetthuong.jpg" alt="Card cap" />
                                    <img src="resource/XETNGHIEM.png" alt=''/>Chăm sóc vết thương</div>
                                <div class="card-body">
                                    <h6> <img src="resource/tick.png" alt='tick' /> CHĂM SÓC VẾT THƯƠNG</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> KIỂM SOÁT CƠN ĐAU</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> THEO SÁT PHÁT ĐỒ ĐIỀU TRỊ</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> CẮT CHỈ/GỠ BỎ GHIM PHẪU THUẬT</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> ĐẶT NỘI KHÍ QUẢN</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> THAY ĐỔI VÀ ĐẶT BÓNG DẠ DÀY</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> ĐẶT ỐNG THÔNG NIỆU ĐẠO</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> ĐẶT ỐNG THÔNG DẠ DÀY</h6>
                                    <h6> <img src="resource/tick.png" alt='tick' /> TRUYỀN SẮT QUA TĨNH MẠCH</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
