
import React from 'react';

// import 'css/form-style.css';
// import 'css/home-style.css';
function SignInModal() {
    return (
        <div className="modal fade" id="signin-form" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    {/*Content*/}
    <div className="modal-content form-elegant">
      {/*Header*/}
      <div className="modal-header text-center">
        <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Đăng Nhập</strong></h3>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      {/*Body*/}
      <div className="modal-body mx-4">
        {/*Body*/}
        <div className="md-form mb-5">
          <input type="email" id="Form-email1" className="form-control validate" />
          <label data-error="wrong" data-success="right" htmlFor="Form-email1">Tài khoản</label>
        </div>
        <div className="md-form pb-3">
          <input type="password" id="Form-pass1" className="form-control validate" />
          <label data-error="wrong" data-success="right" htmlFor="Form-pass1">Mật khẩu</label>
          <p className="font-small blue-text d-flex justify-content-end">Quên <button className="blue-text ml-1" data-toggle="modal" data-target="#forgot-pass" data-dismiss="modal">
              mật khẩu?</button></p>
        </div>
        <div className="text-center mb-3">
          <button id="main-button" type="button" className="btn btn-block btn-rounded z-depth-1a">Đăng Nhập</button>
        </div>
        <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> hoặc đăng nhập
          bằng:</p>
        <div className="row my-3 d-flex justify-content-center">
          {/*Facebook*/}
          <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-facebook-f text-center" /></button>
          {/*Google +*/}
          <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fab fa-google-plus-g" /></button>
        </div>
      </div>
      {/*Footer*/}
      <div className="modal-footer mx-5 pt-3 mb-1">
        <p className="font-small grey-text d-flex justify-content-end">Chưa có tài khoản ? <button  className="blue-text ml-1" data-toggle="modal" data-target="#signup-form" data-dismiss="modal">
            Đăng Ký</button></p>
      </div>
    </div>
    {/*/.Content*/}
  </div>
</div>
    )
}

export default SignInModal