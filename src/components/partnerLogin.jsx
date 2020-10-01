import React, { Component } from 'react'

export class partnerLogin extends Component {
  render() {
    return (
        <div id="partnerlogin" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row" style={{paddingTop: '110px'}}>
            <div className="col-xs-12 col-md-6"> <img src="img/Revenue.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h3 className="text-warning">Sign up as a Partner</h3>
                <form>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Name</label>*/}
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Name"  />
                  </div>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Email</label>*/}
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Email" />
                  </div>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    <label htmlFor="exampleFormControlSelect1">Select Mode</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>Select Mode</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    <label htmlFor="exampleFormControlSelect1">Select Service</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>Select service</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    <label htmlFor="exampleFormControlSelect1">Select Operator</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>Select operator</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Contact Phone Number </label>*/}
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Contact phone number " />
                  </div>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"center", width: "100%"}}>
                    <button type="submit" className="btn btn-warning">Submit</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default partnerLogin
