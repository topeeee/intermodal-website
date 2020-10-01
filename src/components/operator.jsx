import React, { Component } from 'react'

export class operator extends Component {
  render() {
    return (
        <div id="operators" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row" style={{paddingTop: '110px'}}>
            <div className="col-xs-12 col-md-6"> <img src="img/Revenue.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2 className="text-primary">Operators</h2>
                <p>Sign up as an operator  with Lagos Metropolitan Area Transport
                  Authority (LAMATA) to participate and benefit from the reformed
                  public transportation sector
                </p>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:'100%'}}>
                  <button className="btn btn-warning">Download requirement</button>
                </div>

                {/*<h3>Why Choose Us?</h3>*/}
                {/*<div className="list-style">*/}
                {/*  <div className="col-lg-6 col-sm-6 col-xs-12">*/}
                {/*    <ul>*/}
                {/*      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}*/}
                {/*    </ul>*/}
                {/*  </div>*/}
                {/*  <div className="col-lg-6 col-sm-6 col-xs-12">*/}
                {/*    <ul>*/}
                {/*    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}*/}

                {/*    </ul>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default operator
