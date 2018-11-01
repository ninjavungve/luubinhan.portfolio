import React, { Component } from 'react';
import myImg from '../../static/images/my-image.jpg';

class About extends Component {
  render() {
    return (
      <section className="section section-about">
        <div className="inner">
          <div className="container">
            <div className="section-header">
              <h1>
                <strong>Rủ Cafe</strong>
                <span className="second">hoặc follow mình</span>
              </h1>
            </div>
            <div className="section-body" style={{paddingTop: 70}}>
              <div className="row">
                <div className="col-sm-6">
                  <p>Nếu bạn có dự án muốn làm cùng mình, cafe thôi, hoặc có thể liên hệ với mình bằng một trong các cách sau</p>
                  <dl>
                    <dt>Email</dt>
                    <dd>luubinhan1989@gmail.com</dd>
                    <dt>Skype</dt>
                    <dd>luu.binh.an</dd>
                  </dl>
                </div>
                <div className="col-sm-6">
                  <div className="profile-image">
                    <img className="profile-img" src={myImg} alt=""/>
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
export default About;
