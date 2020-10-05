import React, {useEffect, useState} from 'react'
import axios from "axios";

const PartnerLogin = ()=> {

  const [formData, setFormData] = useState({name: "", email: "", phoneNo: "", officeAddress: "", password:"", confirmPassword: "", status: "1", numberOfVehicle: ""});
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginRes, setLoginRes] = useState('');

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, email, phoneNo, officeAddress, password, confirmPassword, numberOfVehicle, status } = formData;

  const getToken = async () => {
    try {
      const res = await axios.post('http://165.22.116.11:8001/api/login/?username=bruce&password=bruce')
      setToken(res.data.Authorized)
    }catch (e) {

    }
  }

  const createPartner = async () => {
    setIsLoading(true)
    try {
      const body = {username:email, password};
      const res = await axios.post('http://165.22.116.11:8001/admin/users/', body)
      const body2 = {pin:res.data.id, name, usernameMain:email, email, phoneNo:'+234' + phoneNo.substr(1), officeAddress, status, numberOfVehicle};
      await axios.post("http://165.22.116.11:7060/api/me/partners/", body2,
          {
            headers: {
              Authorization: token
            }
          }
      );
      const body3 = {firstName:name, lastName:name, usernameMain:email, email, dateOfBirth:'not available', phoneNumber:'+234' + phoneNo.substr(1), pin:res.data.id};
      await axios.post("http://165.22.116.11:7200/api/me/userdetails/", body3,
          {
            headers: {
              Authorization: token
            }
          }
      );
      setIsLoading(false)
      setLoginRes('Registration Successful')
      setFormData({...formData, name: "", email: "", phoneNo: "", officeAddress: "",password:"", confirmPassword: ""})
      setTimeout(() => {
        setLoginRes('')
      },5000)
    }catch (e) {

    }
  }

  const onSubmit = (e)=> {
    e.preventDefault();
    createPartner();
  }

  useEffect(()=> {
    getToken();
  },[])

  return (
        <div id="partnerlogin" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row" style={{paddingTop: '110px'}}>
            <div className="col-xs-12 col-md-6"> <img src="img/Revenue.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h3 className="text-warning">Sign up as a Partner</h3>
                <form onSubmit={onSubmit}>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Name</label>*/}
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                           placeholder="Name" name="name" value={name} onChange={onChange} />
                  </div>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Email</label>*/}
                    <input type="email" className="form-control" aria-describedby="emailHelp"
                           placeholder="Email" name='email' value={email} onChange={onChange}/>
                  </div>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Email</label>*/}
                    <input type="number" className="form-control" aria-describedby="emailHelp"
                           placeholder="Phone Number" name="phoneNo" value={phoneNo} onChange={onChange}/>
                  </div>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Email</label>*/}
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                           placeholder="Office Address" name="officeAddress" value={officeAddress} onChange={onChange}/>
                  </div>
                  {/*<div className="form-group" style={{marginBottom: "20px"}}>*/}
                  {/*  <label htmlFor="exampleFormControlSelect1">Select Mode</label>*/}
                  {/*  <select className="form-control" id="exampleFormControlSelect1">*/}
                  {/*    <option>Select Mode</option>*/}
                  {/*    <option>2</option>*/}
                  {/*    <option>3</option>*/}
                  {/*    <option>4</option>*/}
                  {/*    <option>5</option>*/}
                  {/*  </select>*/}
                  {/*</div>*/}
                  {/*<div className="form-group" style={{marginBottom: "20px"}}>*/}
                  {/*  <label htmlFor="exampleFormControlSelect1">Select Service</label>*/}
                  {/*  <select className="form-control" id="exampleFormControlSelect1">*/}
                  {/*    <option>Select service</option>*/}
                  {/*    <option>2</option>*/}
                  {/*    <option>3</option>*/}
                  {/*    <option>4</option>*/}
                  {/*    <option>5</option>*/}
                  {/*  </select>*/}
                  {/*</div>*/}
                  {/*<div className="form-group" style={{marginBottom: "20px"}}>*/}
                  {/*  <label htmlFor="exampleFormControlSelect1">Select Operator</label>*/}
                  {/*  <select className="form-control" id="exampleFormControlSelect1">*/}
                  {/*    <option>Select operator</option>*/}
                  {/*    <option>2</option>*/}
                  {/*    <option>3</option>*/}
                  {/*    <option>4</option>*/}
                  {/*    <option>5</option>*/}
                  {/*  </select>*/}
                  {/*</div>*/}
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Contact Phone Number </label>*/}
                    <input type="password" className="form-control" aria-describedby="emailHelp"
                           placeholder="password" name="password" value={password} onChange={onChange}/>
                  </div>
                  <div className="form-group" style={{marginBottom: "20px"}}>
                    {/*<label htmlFor="exampleInputEmail1">Contact Phone Number </label>*/}
                    <input type="password" className="form-control" aria-describedby="emailHelp"
                           placeholder="Confirm Password" onChange={onChange} name="confirmPassword" value={confirmPassword}/>
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

export default PartnerLogin
