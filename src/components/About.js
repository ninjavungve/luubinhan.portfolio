import React, { Component } from 'react';

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
            <div className="section-body">
              <div className="row">
                <div className="col-sm-6">
                  <p>Mình không nghiện cafe, mình chỉ nghiện pha cafe! Nếu bạn có nhả ý mời mình cafe để chia sẽ một dự án quá ngầu của bạn</p>
                  <p>Nếu bạn quan tâm đến Front-End có thể ghé quá blog cá nhân, mình cố gắng đưa thêm nhiều nội dung có ích cho mọi người lên đây.</p>
                  <p>Nếu có bài viết nào bạn thấy chưa đúng, hy vọng bạn báo ngay với mình để kịp thời chỉnh sửa.</p>
                </div>
                <div className="col-sm-6">
                  <div className="profile-image">
                    <img className="profile-img" src="http://placehold.it/700x700" alt=""/>
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
