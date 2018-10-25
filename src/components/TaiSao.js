import React, { Component } from 'react';

import './TaiSao.scss';

class TaiSao extends Component {
  render() {
    return (
      <section className="section section-why">
        <div className="inner">
          <div className="container">
            <div className="section-header">
              <h1><strong>Nguyên Tắc </strong>Trong Công Việc</h1>
            </div>
            <div className="section-body">
              <div className="mb-40">
                Our foam works in three ways to draw heat from your body and disperse it out of the mattress.
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
                      When it comes to insulation, duck down is the best temperature regulator out there. Plus, we love that it's humanely sourced.
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
                      You’ll never feel weighed down because the breathable cotton cover is thirty percent lighter than others on the market.
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
                      Forget about swapping or switching midyear — the Casper duvet is designed for comfort in any season.
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
                      Forget about swapping or switching midyear — the Casper duvet is designed for comfort in any season.
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
