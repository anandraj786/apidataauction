import React, { Component } from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <form >
                    <div >
                        <div class="row form-group">
                            <div class="col-md-6">
                                <input type="text" id="fname" class="form-control" name="" placeholder="First Name" required="" />
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="" placeholder="Last Name" />
                            </div>
                        </div>

                        <div class="row form-group pt-3">
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="" placeholder="Email Address" />
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="" placeholder="Comfirm Email Address" />
                            </div>
                        </div>

                        <div class="row form-group pt-3">
                            <div class="col-md-6">
                                <input type="password" class="form-control" name="" placeholder="Password" />
                            </div>
                            <div class="col-md-6">
                                <input type="password" class="form-control" name="" placeholder="Confirm Password" />
                            </div>
                        </div>
                    </div>
                    <div class="tab regis-form">
                        <div class="row form-group">
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="" placeholder="Company Name" />
                            </div>
                        </div>
                        <div class="row form-group pt-3">
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="" placeholder="Mobile No" required="" />
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="" placeholder="Telephone" />
                            </div>
                        </div>
                        <div class="row form-group pt-3">
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="" placeholder="Address Lane 1" />
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="" placeholder="Address Lane 2" />
                            </div>
                        </div>
                        <div class="row form-group pt-3">
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="" placeholder="City" />
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="" placeholder="Postal Zip" />
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
                                <input type="password" class="form-control" name="" placeholder="State" />
                            </div>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}

export default Form;