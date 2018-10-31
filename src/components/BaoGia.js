import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

class BaoGia extends Component {
  render() {
    return (
      <section className="section section-bao-gia">
        <div className="inner">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-sm-6">
                <div className="section-header">
                  <h1>
                    <strong>Nếu Đang Tìm</strong>
                    <span className="second">Mình Có Thể Giúp</span>
                  </h1>
                </div>
                <div className="section-body">
                  <Accordion>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h5 className="relative">
                          Single Page để giới thiệu dịch vụ, sản phẩm, công ty
                          <i className="accordion__arrow" role="presentation"/>
                        </h5>
                        <div>Static website bằng React</div>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <ul>
                          <li>Chi phí thấp</li>
                          <li>Không bao gồm trang admin để tự cập nhập</li>
                          <li>Website load cực nhanh</li>
                          <li>An toàn tuyệt đối</li>
                          <li>Nội dung không cần cập nhập thường xuyên</li>
                        </ul>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h5 className="relative">
                          Trang brochure công ty, shop bán hàng nhỏ
                          <i className="accordion__arrow" role="presentation"/>
                        </h5>
                        <div>Website làm bằng Wordpress</div>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <ul>
                          <li>Sử dụng Wordpress CMS</li>
                          <li>Bao gồm trang admin để tự cập nhập</li>
                          <li>Tùy biến theo nhu cầu riêng</li>
                        </ul>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h5 className="relative">
                          FrontEnd Developer chuyên React
                          <i className="accordion__arrow" role="presentation"/>
                        </h5>
                        <div>Single Page Application bằng React</div>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <ul>
                          <li>Bạn là dev BackEnd</li>
                          <li>Bạn cần người "chơi chung" trong team</li>
                          <li>React Native, React JS</li>
                          <li>Tham vọng đem sản phẩm của bạn tới triệu user</li>
                        </ul>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h5 className="relative">
                          Quản lý bảo trì Website đang có
                          <i className="accordion__arrow" role="presentation"/>
                        </h5>
                        <div>Đã có website Wordpress</div>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <ul>
                          <li>Cần cập nhập, bảo trì, nâng cấp</li>
                          <li>Thực hiện sao lưu, cải thiện tốc độ</li>
                          <li>Bổ sung tính năng mới</li>
                        </ul>
                      </AccordionItemBody>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default BaoGia;
