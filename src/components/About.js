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
                  <p>
                    Mình là web designer và web developer đang sống ở TP.HCM. Thời gian mình không ngồi trên máy tính code, vẽ vời, hay viết blog, bạn sẽ thấy mình trên sân cầu lông hoặc một địa điểm du lịch nào đó.
                  </p>
                  <p>Có thể liên hệ với mình bằng một trong các cách sau</p>
                  <dl>
                    <dt>Email</dt>
                    <dd>luubinhan1989@gmail.com</dd>
                    <dt>Skype</dt>
                    <dd>luu.binh.an</dd>
                    <dt>Twitter</dt>
                    <dd><a href="https://twitter.com/luubinhan" target="_blank" rel="noopener noreferrer">@luubinhan</a></dd>
                    <dt>Blog</dt>
                    <dd>luubinhan.github.io/blog</dd>
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
