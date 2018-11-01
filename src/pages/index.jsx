import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { StatefulToolTip } from "react-portal-tooltip";
import { Link } from "react-scroll";
import { FaCoffee, FaPenNib, FaExternalLinkAlt } from "react-icons/fa";

import SEO from "../components/SEO";
import BaoGia from "../components/BaoGia";
import TaiSao from "../components/TaiSao";
import About from "../components/About";
import UserLinks from "../components/UserLinks/UserLinks.jsx";
import config from "../../data/SiteConfig";
import { DuAn } from "../../data/DuAn";

import logo from "../../static/logos/favi32.png";
import vi from "../../static/vi.png";
import en from "../../static/us.svg";

const CardPortfolio = props => (
  <div className="card-portfolio">
    <div className="card-image">
      <a target="_blank" rel="noopener noreferrer" href={props.url}>
        <span className="caption">
          <FaExternalLinkAlt />
        </span>
        <img src={props.thumbnail} alt={props.name} />
      </a>
    </div>
    <div className="card-title">
      <a target="_blank" rel="noopener noreferrer" href={props.url}>
        {props.name} <FaExternalLinkAlt />
      </a>
    </div>
    <div className="tags">
      {props.tags.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Logo = (
  <span className="logo">
    <Link
      activeClass="active"
      to="sectionPortfolio"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <img src={logo} alt={config.siteTitle} />
    </Link>
  </span>
);
const engFlag = <img src={en} alt="Change to English" />;
const viFlag = <img src={vi} alt="Tiếng Việt" />;
const IconCafe = (
  <span className="icon-sidebar">
    <Link
      activeClass="active"
      to="sectionAbout"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      <FaCoffee />
    </Link>
  </span>
);
const style = {
  style: {
    boxShadow: "none",
    background: "#f47631"
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
                <div className="my-tip">Quay lên đầu trang</div>
              </StatefulToolTip>
            </div>
            <div className="middle-section">
              <StatefulToolTip
                parent={
                  <a href="/blog" className="icon-sidebar">
                    <FaPenNib />
                  </a>
                }
                position="right"
                arrow="center"
                style={style}
              >
                <div className="my-tip">Blog của mình</div>
              </StatefulToolTip>             
            </div>
            <div className="bottom-section">
              <UserLinks config={config} />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="index-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <div className="master">
              <div className="master-inner">
                <section className="section section-portfolio" id="sectionPortfolio">
                  <div className="inner">
                    <div className="container">
                      <div className="section-header">
                        <h1>
                          <strong>Dự Án</strong>
                          <span className="second">Đã Thực Hiện</span>
                        </h1>
                      </div>
                      <div className="section-body">
                        <div className="navbar navbar-expand-lg navbar-light navbar-filter">
                          <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                              <li>
                                <a href="">Design</a>
                              </li>
                              <li>
                                <a href="">HTML/CSS</a>
                              </li>
                              <li>
                                <a href="">Wordpress</a>
                              </li>
                              <li>
                                <a href="">React JS</a>
                              </li>
                              <li>
                                <a href="">Khác</a>
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
                          {Object.keys(DuAn).map(name => {
                            return (
                              <div key={name} className="col-sm-4">
                                <CardPortfolio {...DuAn[name]} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="copy-right">
            <small>© 2018 luubinhan</small>
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
