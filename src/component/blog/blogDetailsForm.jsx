import React from "react";
import '../../css_style/blogDetailsForm.css';
import Button from "../button";


function BlogDetailsForm() {
    return (

        <div>
            <div className="col-sm-12 blogDetailsForm1">
                <h2>Leave Your Comment</h2>
                <form className="theme-form">
                    <div className="col-md-12 divLabel">
                        <label for="name" className="form-label">Name</label>
                        <input id="name" placeholder="Enter Your Name" type="text" className="form-control"></input>
                    </div>
                    <div className="col-md-12 divLabel">
                        <label for="email" className="form-label">Email</label>
                        <input id="email" placeholder="Email" type="email" className="form-control"></input>
                    </div>
                    <div className="col-md-12 divLabel">
                        <label for="exampleFormControlTextarea1" className="form-label">Comment</label>
                        <textarea className="form-control" placeholder="Write Your Comment" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <div className="col-md-12 divButton">
                        <Button title='POST COMMENT' />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default BlogDetailsForm;