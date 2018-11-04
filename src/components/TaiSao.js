import React, { Component } from 'react';

import './TaiSao.scss';

class TaiSao extends Component {
  render() {
    return (
      <section className="section section-why">
        <div className="container">
          <div className="section-header">
            <h1>
              <strong>DNA</strong>
              <span className="second">Trong Công Việc</span>
            </h1>
          </div>
          <div className="inner">
            <div className="section-body">
              <div className="mb-40 header-desc">
               
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
