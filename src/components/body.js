import React from 'react';

import '../style/form-style.css';
import '../style/home-style.css';
import calendar from '../style/img/png/calendar-icon.png';
import scope from '../style/img/png/stethoscope.png'
import medicine from '../style/img/png/medicine.png';
import smartphone from '../img/svg/smartphone.svg';
import calendarSVG from '../img/svg/calendar.svg';
import tube from '../img/svg/test-tubes.svg';
import clock from '../img/svg/clock.svg';
import pill from '../img/svg/pill.svg';
import traffic from '../img/svg/traffic-light.svg';
import line from '../img/svg/line.svg';
import international from '../img/png/international-icon.png';
import scopeThumnb from '../img/png/stethoscope-thumb.png';
import doctor from '../img/background/doctor.png';
import serviceBG from '../img/background/service-bg.PNG';

function Body() {
    return (
        <div>
  <section id="home-top">
    <div id="home-top-bkgrd" className="jumbotron jumbotron-fluid"> 
      <div className="container">
        <div className="col">
          <div><h1>hẹn ngay bác sĩ chuyên khoa</h1></div>
          <div><h1><b>đến nhà</b></h1></div>
          <div className="row">
            <ul>
              <button className="btn" data-toggle="modal" data-target="#booking-form"><b>ĐẶT HẸN KHÁM</b></button>
            </ul>
            <ul className="col align-self-center">
              <div><h3><b>CHỈ TỪ 350.000Đ</b></h3></div> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="home-profit1">
    <div id="home-profit1-bkgrd" className="jumbotron jumbotron-fluid"> 
      <div className="col">
        <div><h1><b>Hẹn Thăm Khám Tiện Lợi, Đơn Giản</b></h1></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-center h-100 ">
              <div className="card-body">
                <img className="icon" src={calendar} alt="calendar" />
                <br /> <br />
                <h4 className="card-title">Đặt Lịch Hẹn</h4>
                <p className="card-text">Gọi điện thoại để xác nhận hẹn, chọn bác sĩ, 
                  địa điểm &amp; thời giam thăm khám phù hợp với bạn</p> 
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center h-100">
              <div className="card-body">
                <img className="icon" src={scope} alt="Stethoscope"/>
                <br /> <br />
                <h4 className="card-title">Bác Sĩ Khám Bệnh</h4>
                <p className="card-text">Bác sĩ sẽ dành 30 phút cẩn thận kiểm tra sức khỏa, 
                  lấy mẫu xét nghiệm, tư vấn cho bạn.</p> 
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center h-100">
              <div className="card-body">
                <img className="icon" src={medicine} alt="medicine" />
                <br /> <br /> 
                <h4 className="card-title">Xét Nghiệm &amp; Giao thuốc</h4>
                <p className="card-text">Thuốc &amp; kết quả xét nghiệm (nếu có) sẽ được chuyển đến tận nhà cho bạn.</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="home-profit2">
    <div id="home-profit2-bkgrd" className="jumbotron jumbotron-fluid"> 
      <div className="row">
        <div id="hp2-text" className="col">
          <div><h1><b>Tiết Kiệm <br /> Thời Gian &amp; Tiền Bạc</b></h1></div>
          <p>Không phải di chuyển nắng mưa, đường dài, xếp hàng chen chúc chờ đợi, hay nỗi lo lây nhiễm nơi đông người, 
            các bàc sĩ WeCareYou sẽ dành 30’ chất lượng đến tận nhà thăm khám &amp; chăm sóc bạn một cách thoải mái nhất.
            Hãy chọn chúng tôi với chi phí hợp lý, minh bạch, cam kết không thu thêm phí.</p>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header bg-info">
              <br />
            </div>
            <div className="card-body">
              <li className="row">
                <img src={smartphone} alt="smartphone"/>
                <div className="col">
                  <b>Tải Ứng Dụng &amp; <br /> Tạo Tài Khoản</b>
                  <div className="text-muted">3 - 5 phút </div>
                </div>          
              </li> <br />
              <li className="row">
                <img src={calendarSVG} alt="hinh anh"/>
                <div className="col">
                  <b>Đặt Hẹn Bác Sĩ Đến Nhà</b>
                  <div className="text-muted">30 giây</div>
                </div>          
              </li> <br />
              <li className="row">
                <img src={tube} alt="hinh anh"/>
                <div className="col">
                  <b>Xét Nghiệm</b>
                  <div className="text-muted">5 - 10 phút lấy mẫu tại nhà</div>
                </div>          
              </li> <br />
              <li className="row">
                <img src={clock} alt="clock" />
                <div className="col">
                  <b>Thời Gian Khám Với Bác Sĩ</b>
                  <div className="text-muted">30 phút</div>
                </div>          
              </li> <br />
              <li className="row">
                <img src={pill} alt="pill" />
                <div className="col">
                  <b>Mua Thuốc Kê Toa</b>
                  <div className="text-muted">Thuốc được giao tận nhà</div>
                </div>          
              </li> <br />
            </div>
            <div className="card-footer">
              <li className="row">
                <div className="col">
                  <b>4 - 5 tiếng</b>
                  <div className="text-muted">Tổng thời gian ước tính</div>
                </div>          
              </li>   
              <li className="row">
                <div className="col">
                  <b>500.000 đ - 2.000.000 đ</b>
                  <div className="text-muted">Tổng chi phí</div>
                </div>          
              </li>    
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header bg-danger">
              <br />
            </div>
            <div className="card-body">
              <li className="row">
                <img src={traffic} alt="traffic" />
                <div className="col">
                  <b>Đi đến phòng khám</b>
                  <div className="text-muted">1 - 2 tiếng</div>
                </div>          
              </li> <br />
              <li className="row">
                <img src={line} alt="line" />
                <div className="col">
                  <b>Lấy Số Xếp Hàng Chờ</b>
                  <div className="text-muted">1 - 2 tiếng</div>
                </div>          
              </li> <br />
              <li className="row">
                <img src={tube} alt="tube" />
                <div className="col">
                  <b>Xét Nghiệm</b>
                  <div className="text-muted">45 phút chưa tính thời gian <br /> chờ kết quả</div>
                </div>          
              </li> <br />
              <li className="row">
                <img src={clock} alt="clock" />
                <div className="col">
                  <b>Thời Gian Khám Với Bác Sĩ</b>
                  <div className="text-muted">5 phút</div>
                </div>          
              </li> <br />
              <li className="row">
                <img src={pill} alt="pill" />
                <div className="col">
                  <b>Mua Thuốc Kê Toa</b>
                  <div className="text-muted">30 phút</div>
                </div>          
              </li> <br />
            </div>
            <div className="card-footer">
              <li className="row">
                <div className="col">
                  <b>4 - 5 tiếng</b>
                  <div className="text-muted">Tổng thời gian ước tính</div>
                </div>          
              </li>   
              <li className="row">
                <div className="col">
                  <b>500.000 đ - 2.000.000 đ</b>
                  <div className="text-muted">Tổng chi phí</div>
                </div>          
              </li>    
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="top-doctors-section">
    <div className="row container-fluid">
      <div className="container col">
        <h2>Đội Ngũ <b>Bác Sĩ Chuyên Khoa</b> Thân Thiện Giàu Kinh Nghiệm</h2>
        <p>Đội ngũ bác sĩ WeCareYou là những bác sĩ ưu tú Chuyên Khoa I, Thạc sĩ, 
          Tiến sĩ với thâm niên trung bình từ 7 năm kinh nghiệm. 
          Các bác sĩ đều đang công tác và giảng dạy nhiều chuyên khoa đa dạng tại các bệnh viện (BV) uy tín hàng đầu của TP.HCM.
        </p>
        <div className="row" id="icon-row">
          <div className="col-auto mr-md-3">
            <img className="icon" src={international} alt="international" />
            <span className="icon-text ml-2">Kinh Nghiệm Quốc Tế</span>
          </div>
          <div className="col-auto" id="icon-2-col">
            <img className="icon" src={scopeThumnb} alt="scopeThumnb" />
            <span className="icon-text ml-2">BS Chuyên Khoa I, Thạc sĩ, Tiến sĩ</span>
          </div>
        </div>
        <br />
        <a href="doctor.html" className="btn btn-success pl-5">Gặp gỡ các Bác sĩ WCY</a>   
      </div>
      <div className="col"><img src={doctor} alt="doctor" /></div>
    </div>
  </section>
  <section id="service-section">
    <div className="row container-fluid">
      <div className="col"><img src={serviceBG} alt="Service" /></div>
      <div className="container col">
        <h3>Bạn Thấy Không Khỏe?    <br /><b>Hãy Để Chúng Tôi Chăm Sóc Bạn</b></h3>
        <p>Mang trải nghiệm thăm khám đa khoa hiện đại đến ngay trong ngôi nhà thân yêu của bạn.
          Từ cảm thông thường đến các bệnh mãn tính, các bác sĩ WeCareYou luôn sẵn sàng chăm sóc tận tình, chu đáo cho bạn &amp; gia đình.</p>
        <div className="row" id="icon-row">
          <div className="col-auto mr-md-3">
            <img className="icon" src={international} alt="international" />
            <span className="icon-text ml-2">Hẹn bác sĩ đến nhà</span>
          </div>
          <div className="col-auto" id="icon-2-col">
            <img className="icon" src={scopeThumnb} alt="scopeThumnb" />
            <span className="icon-text ml-2">Lấy mẫu xét nghiệm tại nhà </span>
          </div>
        </div>
        <div className="row" id="button-row">
          <div className="col-auto"> <br />
            <a href="dichvu.html" className="btn btn-success">Khám phá các dịch vụ của chúng tôi</a>    
          </div>
        </div>   
      </div>    
    </div>
  </section>
</div>

    )
}

export default Body 