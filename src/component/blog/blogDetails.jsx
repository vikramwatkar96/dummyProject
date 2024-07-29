import React from "react";
import '../../css_style/blogDetails.css'
import BlogDetailsForm from "./blogDetailsForm";
import Image from "../image";

function BlogDetails() {
    return (
        <div>
            <div className="blogDetails_main_container">
                <div className="col-sm-12 blogDetailsImage1">
                    <img src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/about/about_us.jpg"></img>
                    <h3>Also the leap into electronic typesetting, remaining essentially unchanged.</h3>
                    <ul className="post-social">
                        <li>Posted By : Admin Admin</li>
                        <li><i class="fa fa-heart"></i> 5 Hits</li>
                        <li><i class="fa fa-comments"></i> 10 Comment</li>
                    </ul>
                    <p>Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu ac cursus gravida, lorem elit commodo urna, id viverra libero tellus non ipsum. Fusce molestie ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et dapibus odio condimentum id. Quisque malesuada mauris sit amet dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus nec molestie condimentum, tellus arcu dignissim quam, a gravida nunc nulla vel magna. Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc fermentum vehicula.</p>
                    <p>Cras quis neque urna. Pellentesque mollis, dui nec elementum elementum, ipsum quam suscipit ligula, sit amet lobortis dolor sem sed neque. Vivamus consequat est non sodales efficitur. Aliquam sodales eleifend sodales. Aliquam auctor ipsum quis nisl facilisis, at convallis mauris iaculis. Duis eleifend, magna ac convallis blandit, dui dui auctor leo, sed tincidunt nisi mauris ut nulla. Praesent porttitor dui ac turpis commodo porttitor. Integer ligula nisi, bibendum non sem at, porta condimentum dui.</p>
                    <p>Proin id eleifend diam, euismod dictum nibh. Ut ullamcorper in purus at tempor. Nullam mattis risus nec velit semper lobortis. Donec accumsan ligula fermentum, ultricies massa eget, cursus leo. Suspendisse placerat elit et lacus aliquam, ut elementum leo aliquet. Integer ornare, ipsum eu lacinia viverra, lectus ipsum scelerisque nisl, nec iaculis leo elit id arcu. Aliquam id ante elit. Donec commodo purus eget lacus pharetra, et egestas metus blandit. Quisque pellentesque porta urna, sed dictum enim viverra a.</p>
                </div>
                <div className="col-md-12">
                    <div className="col-12">
                        <div className="col-lg-6">
                            <Image path='https://multikart-react-reactpixelstrap.vercel.app/assets/images/blog/1.jpg' />
                        </div >
                        <div className="col-lg-6">
                            <Image path='https://multikart-react-reactpixelstrap.vercel.app/assets/images/blog/2.jpg' />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="col-lg-6">

                        </div>
                        <div className="col-lg-6">

                        </div>

                    </div>

                </div>
                <div className="col-sm-12">
                    <BlogDetailsForm />
                </div>
            </div>
        </div>
    )
}
export default BlogDetails;