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
                          Static website bằng React
                          <i className="accordion__arrow" role="presentation"/>
                        </h5>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <p>Body content</p>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h5 className="relative">
                          Website làm bằng Wordpress
                          <i className="accordion__arrow" role="presentation"/>
                        </h5>
                        <div>With a bit of description</div>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <p>Body content</p>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h5 className="relative">
                          Single Page Application bằng React
                          <i className="accordion__arrow" role="presentation"/>
                        </h5>
                        <div>With a bit of description</div>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <p>Body content</p>
                      </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemTitle>
                        <h5 className="relative">
                          Quản lý bảo trì Website đang có
                          <i className="accordion__arrow" role="presentation"/>
                        </h5>
                        <div>With a bit of description</div>
                      </AccordionItemTitle>
                      <AccordionItemBody>
                        <p>Body content</p>
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
