import React from 'react'
import '../css_style/login.css'
import Input from '../Input';
import Breadcrumb from '../component/topHeader/Breadcrumb'


function Login() {
    return (
        <>
            <Breadcrumb pageName={'Login'} />
            <section className="login-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <form>
                                    <Input lable='Email' id='email' placeholder='Enter Mail' type='email' />
                                    <Input lable='Password' id='password' placeholder='Enter Password' type='password' />
                                    <a class="btn btn-solid" href="/left-sidebar/collection">Submit</a>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3>New Customer</h3>
                            <div className="theme-card card-right authentication-right">
                                <h6>Create Account</h6>
                                <p>"Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register."</p>
                                <br /><br /><div className="buttondiv">
                                    <a class="btn btn-solid" href="/left-sidebar/collection">Create an Account</a>
                                </div><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login