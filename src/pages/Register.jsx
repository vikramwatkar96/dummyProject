import React from 'react'
import '../css_style/login.css'
import Input from '../Input';
import Breadcrumb from '../component/topHeader/Breadcrumb'


function Register() {
    return (
        <>
            <Breadcrumb pageName={'register'} />
            <section className="register-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>CREATE ACCOUNT</h3>
                            <div className="row">
                                <div className="col-md-6 ">
                                    <Input lable='first name' id='fName' placeholder='First Name' type='text' />
                                    <Input lable='Email' id='email' placeholder='Enter Mail' type='email' />
                                </div>
                                <div className="col-md-6 ">
                                    <Input lable='last name' id='email' placeholder='Last Name' type='text' />
                                    <Input lable='Password' id='password' placeholder='Enter Password' type='password' />
                                </div>
                                <div className="col-md-12 "><a class="btn btn-solid" href="/left-sidebar/collection">Submit</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register