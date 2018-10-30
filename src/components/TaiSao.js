import React, { Component } from 'react';

import './TaiSao.scss';

class TaiSao extends Component {
  render() {
    return (
      <section className="section section-why">
        <div className="container">
          <div className="section-header">
            <h1>
              <strong>Nguyên Tắc </strong>
              <span className="second">Trong Công Việc</span>
            </h1>
          </div>
          <div className="inner">
            <div className="section-body">
              <div className="mb-40 header-desc">
                Dự án dù nhỏ, dù lớn, dù làm độc lập hay làm trong 1 team
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="item-feature feature-1">
                    <div className="feature-image">
                      01
                    </div>
                    <div className="feature-title">
                      TRÁCH NHIỆM
                    </div>
                    <div className="feature-desc">
                      Hoàn thành công việc đã hứa, không diện lý do làm trì trệ dự án.
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="item-feature feature-2">
                    <div className="feature-image">
                      02
                    </div>
                    <div className="feature-title">
                      CHẤT LƯỢNG
                    </div>
                    <div className="feature-desc">
                      Đặt mục tiêu cho tất cả dự án như những sản phẩm có thể tự hào nói "make-by-me".
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="item-feature feature-3">
                    <div className="feature-image">
                      03
                    </div>
                    <div className="feature-title">
                      TRUNG THỰC
                    </div>
                    <div className="feature-desc">
                      Không lấp liếm, dấu lỗi, hay tiết lộ bất kỳ thông tin nào ra ngoài.
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="item-feature feature-4">
                    <div className="feature-image">
                      04
                    </div>
                    <div className="feature-title">
                      TẬN TÂM
                    </div>
                    <div className="feature-desc">
                      Sẵn sàng hổ trợ, chỉ dẫn, sửa lỗi nếu có vấn đề xảy ra dự án sau khi hoàn thành.                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default TaiSao;
