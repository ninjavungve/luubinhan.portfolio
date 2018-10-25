import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import {StatefulToolTip} from 'react-portal-tooltip';
import {
  FaCoffee,
  FaPenNib
} from "react-icons/fa";

import SEO from "../components/SEO";
import BaoGia from "../components/BaoGia";
import TaiSao from "../components/TaiSao";
import About from "../components/About";
import UserLinks from "../components/UserLinks/UserLinks.jsx";
import config from "../../data/SiteConfig";

import logo from "../../static/logos/favi32.png";
import vi from "../../static/vi.png";
import en from "../../static/us.svg";

const Logo = <a className="logo"><img src={logo} alt={config.siteTitle} /></a>;
const engFlag = <img src={en} alt="Change to English"/>;
const viFlag = <img src={vi} alt="Tiếng Việt"/>;
const style = {
  style: {
    boxShadow: "none",
    background: '#f47631'
  },
  arrowStyle: {
    borderColor: false,
    color: "#f47631"
  }
};

class Index extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="sidebar">
          <div className="inner">
            <div className="top-section">
              <StatefulToolTip
                parent={Logo}
                position="right"
                arrow="center"
                style={style}
              >
                <div className="my-tip">
                  Quay lên đầu trang
                </div>
              </StatefulToolTip>
              <a className="lang active">
                <StatefulToolTip
                  parent={engFlag}
                  position="right"
                  arrow="center"
                  style={style}
                >
                  <div className="my-tip">
                    English
                  </div>
                </StatefulToolTip>
              </a>
              <a className="lang">
                <StatefulToolTip
                  parent={viFlag}
                  position="right"
                  arrow="center"
                  style={style}
                >
                  <div className="my-tip">
                    Tiếng Việt
                  </div>
                </StatefulToolTip>
              </a>
            </div>
            <div className="middle-section">
              <StatefulToolTip
                parent={<a href="/blog" className="icon-sidebar"><FaPenNib /></a>}
                position="right"
                arrow="center"
                style={style}
              >
                <div className="my-tip">
                  Blog của mình
                </div>
              </StatefulToolTip>
              <StatefulToolTip
                parent={<span className="icon-sidebar"><FaCoffee /></span>}
                position="right"
                arrow="center"
                style={style}
              >
                <div className="my-tip">
                  Rủ đi cà phê?
                </div>
              </StatefulToolTip>
            </div>
            <div className="bottom-section">
              <UserLinks config={config} />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="navbar navbar-expand-lg navbar-light navbar-filter">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li>
                    <a href="">
                      Design (<strong>20</strong>)
                    </a>
                  </li>
                  <li>
                    <a href="">
                      HTML/CSS (<strong>15</strong>)
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Wordpress (<strong>15</strong>)
                    </a>
                  </li>
                  <li>
                    <a href="">
                      React JS (<strong>15</strong>)
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Khác (<strong>10</strong>)
                    </a>
                  </li>
                </ul>
                <div className="ml-auto">
                  <ul className="nav nav-right">
                    <li>
                      <a href="" className="btn btn-primary my-2 my-sm-0">
                        Báo giá
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="index-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <div className="master">
              <div className="master-inner">
                <section className="section section-portfolio">
                  <div className="inner">
                    <div className="container">
                      <div className="section-header">
                        <h1><strong>Dự Án</strong> Đã Thực Hiện</h1>
                      </div>
                      <div className="section-body">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="card-portfolio">
                              <div className="card-image">
                                <img src="images/add-project.jpg" />
                              </div>
                              <div className="card-title">
                                <button className="btn btn-primary">
                                  Thêm dự án của bạn ?
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card-portfolio">
                              <div className="card-image">
                                <img
                                  src="https://vip-restaurant.vamtam.com/wp-content/uploads/2016/03/Screen-1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="card-title">
                                Gourmet / Restaurant
                              </div>
                              <div className="tags">
                                <button className="tag cyan">
                                  HTML/CSS
                                </button>
                                <button className="tag cyan">
                                  Wordpress
                                </button>
                                <button className="tag cyan">
                                  Design
                                </button>
                                <button className="tag cyan">
                                  React
                                </button>
                                <button className="tag cyan">
                                  Joomla
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card-portfolio">
                              <div className="card-image">
                                <img src="https://vip-restaurant.vamtam.com/wp-content/uploads/2016/03/Screen-2.jpg" />
                              </div>
                              <div className="card-title">
                                Gourmet / Restaurant
                              </div>
                              <div className="tags">
                                <button className="tag cyan">
                                  HTML/CSS
                                </button>
                                <button className="tag cyan">
                                  Wordpress
                                </button>
                                <button className="tag cyan">
                                  Design
                                </button>
                                <button className="tag cyan">
                                  React
                                </button>
                                <button className="tag cyan">
                                  Joomla
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card-portfolio">
                              <div className="card-image">
                                <img src="https://vip-restaurant.vamtam.com/wp-content/uploads/2016/03/Screen-3.jpg" />
                              </div>
                              <div className="card-title">Coffee Shop</div>
                              <div className="tags">
                                <button className="tag cyan">
                                  HTML/CSS
                                </button>
                                <button className="tag cyan">
                                  Wordpress
                                </button>
                                <button className="tag cyan">
                                  Design
                                </button>
                                <button className="tag cyan">
                                  React
                                </button>
                                <button className="tag cyan">
                                  Joomla
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <About />
                <TaiSao />
                <BaoGia />
              </div>
            </div>
          </div>
          <div className="scroll-top-wrapper">
            <a className="scroll_top" href="#top">
              <i className="ion-android-arrow-dropup-circle" />
            </a>
          </div>
          <div className="copy-right">
            <small>
              © 2018 luubinhan
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
