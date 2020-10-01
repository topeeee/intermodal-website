import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <span className="text-primary">Lamata</span>
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right text-primary">
              {/*<li>*/}
              {/*  <a href="#features" className="page-scroll">*/}
              {/*    Features*/}
              {/*  </a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <a href="#operator" className="page-scroll">*/}
              {/*    About*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li>
                <a href="#operators" className="page-scroll">
                  Operators
                </a>
              </li>
              <li>
                <a href="#partners" className="page-scroll">
                  Partners
                </a>
              </li>
              <li>
                <a href="#operatorlogin" className="page-scroll">
                  Signup
                </a>
              </li>
              <li>
                <a href="http://165.22.116.11:7057/lamata/login" className="page-scroll">
                  Lamata Login
                </a>
              </li>
              <li>
                <a href="http://165.22.116.11:7057/operator/login" className="page-scroll">
                  Operator Login
                </a>
              </li>
              <li>
                <a href="http://165.22.116.11:7057/partner/login" className="page-scroll">
                  Partner Login
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
