import React, {useState, useEffect} from 'react'
import axios from 'axios'

const OperatorLogin = () => {

  const [formData, setFormData] = useState({name: "", email: "", phoneNo: "", officeAddress: "", status: "", numberOfVehicle: "", contactName: "", contactPhoneNo: "", contactEmail: "", pin: ""});
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginRes, setLoginRes] = useState('');

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, email, phoneNo, officeAddress, status, numberOfVehicle, contactName, contactPhoneNo, contactEmail, pin } = formData;


  const getToken = async () => {
    try {
    const res = await axios.post('http://165.22.116.11:8001/api/login/?username=bruce&password=bruce')
      setToken(res.data.Authorized)
    }catch (e) {

    }
  }

const createOperator = async () => {
    setIsLoading(true)
  const body = {pin, name, usernameMain:email, email, phoneNo:'+234' + phoneNo.substr(1), officeAddress, status, numberOfVehicle, contactName, contactPhoneNo, contactEmail};
  try {
    await axios.post("http://165.22.116.11:7046/api/me/operators/", body,
        {
          headers: {
            Authorization: token
          }
        }
        );
    setIsLoading(false)
    setLoginRes('Registration Successful')
    setFormData({name: "", email: "", phoneNo: "", officeAddress: "", status: "", numberOfVehicle: "", contactName: "", contactPhoneNo: "", contactEmail: "", pin: ""})
    setTimeout(() => {
      setLoginRes('')
    },5000)
  }catch (e) {

  }
}

useEffect(()=> {
  getToken();
},[])

  const onSubmit = (e)=> {
    e.preventDefault();
    createOperator();
  }

  return (
        <div id="operatorlogin" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row" style={{paddingTop: '110px'}}>
            <div className="col-xs-12 col-md-6"> <img src="img/Revenue.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h3 className="text-warning">Sign up as an Operator</h3>
                <form onSubmit={onSubmit}>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Organisation Name</label>*/}
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                           placeholder="Organisation name"  name="name" onChange={onChange}  value={name}  required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Contact Phone Number </label>*/}
                    <input type="number" className="form-control" aria-describedby="emailHelp"
                           placeholder="Organisation phone number " name="phoneNo" onChange={onChange} value={phoneNo}  required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Organisation Email Address</label>*/}<input type="email" className="form-control" aria-describedby="emailHelp"
                           placeholder="Organisation email address"  name="email" onChange={onChange}  value={email} required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Office Address</label>*/}
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                           placeholder="Office address" name="officeAddress" onChange={onChange}  value={officeAddress} required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Organisation Name</label>*/}
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                           placeholder="Contact name" name="contactName" onChange={onChange} value={contactName} required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Contact Phone Number </label>*/}
                    <input type="number" className="form-control" aria-describedby="emailHelp"
                           placeholder="Contact phone number " name="contactPhoneNo" onChange={onChange} value={contactPhoneNo} required/>
                  </div>
                  <div className="form-group" style={{marginBottom: "30px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Organisation Email Address</label>*/}<input type="email" className="form-control" aria-describedby="emailHelp"
                                                                                                       placeholder="Contact Person email" name="contactEmail" onChange={onChange} value={contactEmail} required/>
                  </div>
                  {loginRes &&
                  <div className="text-success w-100 text-primary text-capitalize bg-danger" style={{marginBottom: "30px", padding: '10px'}}>{loginRes}</div>
                  }
                  <div style={{display:"flex", alignItems:"center", justifyContent:"center", width: "100%"}}>
                    <button type="submit" className="btn btn-warning">Submit {isLoading && <i className="fa fa-spinner fa-spin"></i>}</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}

export default OperatorLogin
