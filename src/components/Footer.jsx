import React from "react";
import "../styles/Footer.css"

function Footer() {
    return (
        <div>
        <footer>

            <div class="container footer">
                <div class="row footer-menu">

                    <div class="col-md-4 col-lg-3 company">
                        <div class="title">
                            COMPANY
                        </div>
                        <ul class="list-unstyled">
                            <li><a href="./index.html">Exercise</a></li>
                            <li><a href="./search_page.html">BMI</a></li>
                            <li><a href="./saved_recipes.html">Contact</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4 col-lg-3 contactUs">
                        <div class="title">
                            CONTACT US
                        </div>
                        <ul class="list-unstyled">
                            <li><i class="fa-solid fa-location-dot"></i><a href="#">London</a></li>
                            <li><i class="fa-solid fa-envelope"></i> <a href="mailto:info@gymfit.com">info@gymfit.com</a></li>
                            <li><i class="fa-solid fa-phone"></i><a href="tel:9051290512">+447712356789</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4 col-lg-3">
                    <div class="title">
                            SOCIAL MEDIA
                        </div>
                        <ul class="list-unstyled">
                            <li><a href="https://www.facebook.com/" class="facebook"><i class="fa-brands fa-facebook-f"></i>Facebook</a></li>
                            <li><a href="https://www.instagram.com/" class="instagram"><i class="fa-brands fa-instagram"></i>Instagram</a></li>
                            <li><a href="https://twitter.com/?lang=en" class="twitter"><i class="fa-brands fa-x-twitter"></i>Twitter</a></li>
                        </ul>
                    </div>

                    <div class="col-8 col-md-6 col-lg-3">
                        <div class="title">
                            SUBSCRIBE
                        </div>
                        <form>
                            <div class="form-group me-sm-3 row subscribe">
                                <div>
                                    <input type="email" class="form-control" id="email" placeholder="Your email address"/>
                                </div>

                                <div class="justify-content-center">
                                    <a href="#" class="btn btn-sm btn-danger"> Submit
                                    </a>
                                </div>
                            
                            </div> 
                        </form>
                    </div>

                </div>

            </div>

            <div class="copyright">&copy; 2024 GymFit. All rights reserved.</div>

        </footer>
    </div>


    );
}

export default Footer;