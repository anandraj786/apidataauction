import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';
import axios from 'axios';
class Header extends React.Component {

    constructor(props) {
        super(props);    
    }     
    state = {
        firstname: '',
        lastname:'',
        email:'',
        password:'',
        company_name:'',
        mobile:'',
        telephone:'',
        address_line1: '',
        address_line2:'',
        city:'',
        postal_zip:'',
        country:'',
        state:''
      }
    
       state ={
           persons: []
       }
       componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/users_list/`)
          .then(res => {
            const persons = res.data;
            const newperson = persons
            this.setState({ newperson });
            console.log('persons',newperson)
          })
      }
      handleChange = event =>{
          this.setState({[event.target.name]: event.target.value})

      }
      handleSubmit = event =>{
          event.preventDefault();
          const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            company_name: this.state.company_name,
            mobile: this.state.mobile,
            telephone: this.state.telephone,
            address_line1: this.state.address_line1,
            address_line2: this.state.address_line2,
            city: this.state.city,
            postal_zip: this.state.postal_zip,
            country: this.state.country,
            state: this.state.state
          };
      
          axios.post(`http://127.0.0.1:8000/api/users_list/`, this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log("meh");
                console.log(user);
              
            })

      }
    render() {
        
        return (
            <div>
                {/* <!-- Login --> */}
                <div class="container login-form">
                    <div class="modal fade" id="myModal1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                {/* <!-- Modal Header --> */}
                                <div class="modal-header">
                                    <div class="modal-title text-center">Auction Email Alerts Sign Up ? </div>
                                    <button type="button" class="close" data-dismiss="modal">×</button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <div class="modal-body">
                                    <div class="row login-top">
                                        <div class="col">
                                            <form>
                                                <div class="row form-group">
                                                    <div class="col-md-6 pt-4">
                                                        <input type="text" id="fname" class="form-control" placeholder="First Name " required />
                                                    </div>
                                                    <div class="col-md-6 pt-4">
                                                        <input type="text" id="lname" class="form-control" placeholder="Last Name " required />
                                                    </div>
                                                </div>
                                                <div class="row form-group">
                                                    <div class="col-md-12 pt-4">
                                                        <input type="email" id="email" class="form-control" placeholder="Enter Email Adress" required />
                                                    </div>
                                                </div>
                                                <div class="row form-group  pt-2">
                                                    <div class="col-md-12 text-center">
                                                        <input type="submit" class="ban-btn" value="Submit" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Login end --> */}
                {/* <!-- Login --> */}
                <div class="container login-form">
                    <div class="modal fade" id="myModal2">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                {/* <!-- Modal Header --> */}
                                <div class="modal-header">
                                    <div class="modal-title text-center">Register Form </div>
                                    <button type="button" class="close" data-dismiss="modal">×</button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <div class="modal-body">
                                    <div class="row login-top">
                                        <div class="col">
                                            <form onSubmit={this.handleSubmit}>
                                                <div class="regis-form">
                                                    <div class="row form-group">
                                                        <div class="col-md-6">
                                                            <input type="text" id="firstname"  placeholder="First Name" class="form-control"  name="firstname" onChange={this.handleChange} />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input type="text" id="lastname" placeholder="Last Name" class="form-control" name="lastname" onChange={this.handleChange}  />
                                                        </div>
                                                    </div>
                                                    <div class="row form-group pt-3">
                                                        <div class="col-md-6">
                                                            <input type="text" id="email" placeholder="Email" class="form-control"  name="email" onChange={this.handleChange} />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input type="text" id="confirmEmail" placeholder="Confirm Email" class="form-control"  name="confirmEmail"   />
                                                        </div>
                                                    </div>

                                                    <div class="row form-group pt-3">
                                                        <div class="col-md-6">
                                                            <input type="password" placeholder="Password" class="form-control" id="password"   name="password"  onChange={this.handleChange} />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input type="password" placeholder="Confirm Password" class="form-control" id="confirmPassword"   name="confirmPassword"   />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class=" regis-form">
                                                    <div class="row form-group">
                                                        <div class="col-md-12">
                                                            <input type="text" class="form-control" id="company_name" placeholder="Company Name"   name="company_name"  onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                    <div class="row form-group pt-3">
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control"  placeholder="Mobile"  name="mobile" onChange={this.handleChange} />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control"  placeholder="Telephone" name="telephone" onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                    <div class="row form-group pt-3">
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" placeholder="Address Line 1"  name="address_line1" onChange={this.handleChange} />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control"  placeholder="Address Line 2"  name="address_line2" onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                    <div class="row form-group pt-3">
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control"  placeholder="City"  name="city" onChange={this.handleChange} />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" placeholder="Postal Zip"  name="postal_zip" onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                    <div class="row form-group pt-3">
                                                        <div class="col-md-6">
                                                            <select class="form-control">
                                                                <option>---Country----</option>
                                                                <option>America</option>
                                                                <option>Germany</option>
                                                                <option>Australia</option>
                                                                <option>France</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" placeholder="State"  name="state" onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ overflow: 'auto' }} class="pt-5">
                                                    <div class="reg-btn">
                                                    <input type="submit" class="ban-btn" value="Submit" />

                                                    </div>
                                                </div>
                                               
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Login end --> */}
                <section class="tophead">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="social">
                                    <ul>
                                        <li><a href="#/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#/"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#/"></a><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                                        <li><a href="#/"></a><i class="fa fa-youtube-play" aria-hidden="true"></i></li>
                                        <li><a href="#/"><i class="fa fa-rss" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-2 offset-4">
                                <h5>Call us: <span>570-694-4002</span></h5>
                            </div>
                            <div class="col-md-1" data-toggle="modal" data-target="#myModal1"><img src="assets/img/msg-alert.png" alt="msg-alert" width="25px" /></div>
                            <div class="col-md-1" data-toggle="modal" data-target="#myModal2"><button>Vendor</button></div>
                            <div class="col-md-1" data-toggle="modal" data-target="#myModal2"><button>Bidder</button></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Header;