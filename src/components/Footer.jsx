import React from "react";

function Footer() {
    return (
        <footer>

        <div class="container footer">
            <div class="row footer-menu">

                <div class="col-md-6 col-lg-4 company">
                    <div class="title">
                        COMPANY
                    </div>
                    <ul class="list-unstyled">
                        <li><a href="./index.html">About</a></li>
                        <li><a href="./search_page.html">Exercises</a></li>
                        <li><a href="./saved_recipes.html">Metrics</a></li>
                    </ul>
                </div>

                <div class="col-md-6 col-lg-4 contactUs">
                    <div class="title">
                        CONTACT US
                    </div>
                    <ul class="list-unstyled">
                        <li><i class="fa-solid fa-location-dot"></i><a href="#">London</a></li>
                        <li><i class="fa-solid fa-envelope"></i> <a href="mailto:info@flavorfusion.com">info@gymfitapp.com</a></li>
                        <li><i class="fa-solid fa-phone"></i><a href="tel:9051290512">+447712356789</a></li>
                    </ul>
                </div>

    {/* Footer subscribe section  */}

                <div class="col-8 col-md-6 col-lg-3">
                    <div class="title">
                        SUBSCRIBE
                    </div>
                    <form>
                        <div class="form-group me-sm-3 row subscribe">
                            <div>
                                <label for="email">Stay in touch</label>
                                <input type="email" class="form-control" id="email" placeholder="Your email address"/>
                            </div>

                            <div class="justify-content-center">
                                <a href="#" class="btn btn-md btn-outline-warning"> Submit
                                </a>
                            </div>
                            
                            
                        </div>
                        
                    </form>
                </div>

            </div>

    {/* Footer social media section */}

            <div class="row social-media">
                <div class="col-md-12">
                    <ul class="list-unstyled">
                        <li><a href="https://www.facebook.com/" class="facebook"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/" class="instagram"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/?lang=en" class="twitter"><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="https://www.whatsapp.com/" class="whatsapp"><i class="fa-brands fa-whatsapp"></i></a></li>
                    </ul>
                </div>
            </div>
        
        
        </div>

        <div class="copyright">&copy; 2024 GymFitApp. All rights reserved.</div>
        
    </footer>


    );
  }
  
  export default Footer;