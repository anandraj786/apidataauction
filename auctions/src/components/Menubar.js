import React, {Component} from 'react';

class Menubar extends React.Component{
    render(){
        return(
            <div>
<section class="menubar">
  <div class="container">
    <div class="row">
      <div class="col-md-2">
      <a href="index.html"><img src="assets/img/logo.png" /></a> </div>
      <div class="col-md-7 offset-1 ">
      {/*  <!--  <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Auctons</a></li>
          <li><a href="">Location</a></li>
          <li><a href="">Guide</a></li>
          <li><a href="">Contact</a></li>
        </ul> --> */}
<div id="main">
    <nav>
      <div class="nav-xbootstrap">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="/#">Auctions<span class="glyphicon glyphicon-chevron-down iconsize"></span></a>
            <ul class="dropdown">
                <li><a href="general_auction.html">General Auctions</a></li>
                <li><a href="">Electronic</a></li>
                <li><a href="">Furniture</a></li>
                <li><a href="">Automobile</a></li>
                <li><a href="">General</a></li>
                <li><a href="">Designer Dress</a></li>
                <li><a href="">Property</a></li>
            </ul>
          </li>
            <li>
            <a href="/#" >Locations<span class="glyphicon glyphicon-chevron-down iconsize"></span></a>
            <ul class="dropdown">
                <li><a href="/#">Islington</a></li>
                <li><a href="/#">Lambeth</a></li>
                <li><a href="/#">Hounslow</a></li>
                <li><a href="/#">Greenwich</a></li>
                <li><a href="/#">Hackney</a></li> 
            </ul>
          </li>
            <li><a href="#">FAQ</a></li>
            <li><a href="contact.html">Contacts</a></li>
         {/* <!--  <li><a href="https://xbootstrap.com">Premium Themes</a></li>
          <li><a href="https://xbootstrap.com">Business</a></li> --> */}
        </ul>
      </div>
      <div class="nav-bg-xbootstrap">
        <div class="navbar-xbootstrap"> <span></span> <span></span> <span></span> </div>
        <a href="https://xbootstrap.com" class="title-mobile"></a>
      </div>
    </nav>
</div>
      </div>
      <div class="col-md-2">
        <div class="row form-group">
          <div class="col">
           {/* <!--  <input type="" class="form-control" name="">
            <button><i class="fa fa-search" aria-hidden="true"></i>
</button>
          </div> --> */}
        </div>
      </div> 
    </div>
  </div>
</div>
</section>
            </div>
        )
    }
}

export default Menubar;