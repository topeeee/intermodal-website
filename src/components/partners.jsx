import React from 'react'

const partners = ()=> {
    return (
        <div id="partners" className="partner" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row" style={{paddingTop: '100px'}}>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2 className="text-primary" style={{marginTop:"50px"}}>Partners</h2>
                <p>You don’t have to be big to be a player in the reformed public transportation
                  sector in Lagos state, just sign up to join an operator.
                </p>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:'100%'}}>
                  <a href="#partnerlogin" className="btn btn-warning">Sign Up</a>
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

export default partners
