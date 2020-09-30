import React, {Component} from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
                {/* Footer */}
                <footer class="foot">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <img alt="logowhite" src="assets/img/logo-white.png" />
        <p>Our stress-free finance department that can find financial solutions to save you money.</p>

      </div>
      <div class="col-md-3 featured">
        <h4>Featured Links</h4>
        <ul>
          <li><a href="#/">About</a></li>
          <li><a href="#/">Products</a></li>
          <li><a href="#/">Services</a></li>
          <li><a href="#/">Auctions</a></li>
           <li><a href="#/">Guide & FAQ</a></li>
          <li><a href="#/">Term</a></li>
          <li><a href="#/">Privacy</a></li>
          <li><a href="#/">Sitemap </a></li>
        
        </ul>
        
      </div>

      <div class="col-md-3 gal">
        <h4>Photo Gallery</h4>
        <ul>
          <li><img alt="laptop" src="assets/img/latop.jpg" /></li>
          <li><img alt="mobile" src="assets/img/mobile.jpg" /></li>
          <li><img alt="sofa" src="assets/img/sofa.jpg" /></li>
          <li><img alt="car" src="assets/img/car.jpg" /></li>
          <li><img alt="sofa2" src="assets/img/sofa.jpg" /></li>
          <li><img alt="laptop2" src="assets/img/latop.jpg" /></li>
          <li><img alt="mobile2" src="assets/img/mobile.jpg" /></li>
          <li><img alt="car2" src="assets/img/car.jpg" /></li>

          
        </ul>
      </div>

      <div class="col-md-3 social">
        <h4>Social Network</h4>
        <ul>
            <li><a href="#/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#/"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li><a href="#/"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
        </ul>

          <div class="row form-group pt-5 subs">
          <div class="col">
           <h4>Subscribe Newsletter</h4>
            <input type="" class="form-control mt-3" name="" placeholder="Enter Email Address" />
            <button><i class="fa fa-search" aria-hidden="true"></i>
</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row pt-5 mt-5 copyright">
      <div class="col text-center">
        <h6>© Copyright 2020 </h6>
      </div>
    </div>
  </div>
  
</footer>
{/* End Footer */}
            </div>
        )
    }
}

export default Footer;