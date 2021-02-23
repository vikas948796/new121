import logo from './jumbo-logo.png';
//import logo1 from './main-logo.jpeg';
//import img from './ad1.png';
import img1 from './ad2.jpg';
import img2 from './ad3.png';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink as Link } from 'react-router-hash-link';

import axios from 'axios';


const api = axios.create({
  baseURL : "http://localhost:5000/"
});


console.log(logo);

function Home() {
  return (
    <div className="App">
        <nav class="navbar navbar-expand-md  navbar-dark"  style={{zIndex:'5',backgroundColor:"#2A3891"}} >
  <a class="navbar-brand" style={{color:"White",fontSize:"30px"}} href="#">ne<span style={{color:"red",fontSize:"30px"}}>a</span>r</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
    <li class="nav-item">
        <a class="nav-link " href="#"></a>
      </li>
      
      <li class="nav-item" >
        <a class="nav-link" href="#">Covid-19</a>
      </li>


      <li class="nav-item  dropdown" >
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Solution</a> 
        <div class="dropdown-menu" >
        <Link class="dropdown-item" to="career"><span style={{fontSize:"14.4px"}}>Near for<br /><b>Publishers</b></span></Link>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>Near for<br /><b>Marketers</b></span></a>
      </div>
      </li>


      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Products</a>
        <div class="dropdown-menu">
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>Allspark<br /><b>AI-powered Audience Curation</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>CARBON<sup>TM</sup><br /><b>Real-World Data Enrichment</b></span></a>
      </div>
      </li>    
      <li class="nav-item">
        <a class="nav-link" href="#">The Data</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">About Us</a>
        <div class="dropdown-menu">
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Leadership</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Investors</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Board</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Resources</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Blog</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Newsroom</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Careers</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Privacy</b></span></a>
        <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Contact Us</b></span></a>
      </div>
      </li>
    </ul>
  </div>  
</nav>
    
        <div class="jumbotron jumbotron-fluid"  background-color="red">
        <div class="container-fluid" ><br></br>
        <div class="row">
          <div class="col-sm-5">
          <h2 class="jumbo-heading">Partner with BAE</h2>
          <p class="jumbo-content">Partner with us and monetize through an unexplored medium of your's</p>
          <button type="button" class="btn btn-outline-secondary">CONTACT SALES</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-outline-secondary" id="1b">LEARN MORE</button>
          </div>
          
          <div class="col-sm-7"><img src={logo} alt="Logo" width="720px" height="480px"/></div>
        </div>
        </div>
      </div>
      
      <center> <p  id="x2"style={{color: " rgba(40, 58, 90, 0.9)" }}>we focus on technologies and Practices that drive world-class 
            digital brand experience,  Through integrated business and software solutions. </p></center>
          
      <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2 id="x2">why baeon?</h2>
          
          <p>
          Every day, companies and organizations gain competitive advantage and value by 
          thinking digitally. Often, these companies need a partner to help them reach their full potential. We act as a strategic partner for enterprises, nonprofits and organizations that wish to harness the power and scale of technology to achieve business objectives.

We focus on the brands, technologies, and practices that drive world-class brand experience,
 through integrated business and software solutions.<br/>
 <center><button type="button" class="btn btn-outline-primary" id="1b">LEARN MORE</button></center>
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" id="i3p">
          
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              
              <h4><a href=""><img src={img1} alt="Logo" width="130px" height="130px"/></a></h4>
              <p>Make additional money on every transaction of yours</p>
              
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" id="i4p">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href=""><img src={img1} alt="Logo" width="130px" height="130px"/></a></h4>
              <p>Make additional money on every transaction of yours</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" id="i5p">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href=""><img src={img2} alt="Logo" width="130px" height="130px"/></a></h4>
              <p>Make additional money on every transaction of yours</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    <div class="col-sm-6" style={{backgroundColor:"yellow"}} id="rip">
      
    </div>
  
    <div class="row">
  <div class="col-sm-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  <div class="col-sm-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
</div>
<br/><br/>
    <footer id="footer" class="footer-v8">
        <div class="content-sm container">
            <div class="row">
              
                <div class="col-md-3 col-sm-6 md-margin-b-50">
                    <a href="index.html">
                        <img class="footer-v8-logo-img" src="https://mesozi.com/assets/img/mesozi-logo.png" alt=""></img>
                    </a>
                    <p class="margin-b-30">Mesozi is an leading provider of integrated business and technology solutions. We believe everyone deserves to Experience Clarity™</p>
                    <h3 class="footer-v8-title">Go Social</h3>
                   
                    <ul class="list-inline ul-li-lr-0">
                        <li class="theme-icons-wrap"><a href="https://www.facebook.com/mesozigroup/" target="blank"><i class="theme-icons theme-icons-white-bg theme-icons-sm radius-3 fa fa-facebook"></i></a></li>
                        <li class="theme-icons-wrap"><a href="https://twitter.com/mesozigroup" target="blank"><i class="theme-icons theme-icons-white-bg theme-icons-sm radius-3 fa fa-twitter"></i></a></li>
                        <li class="theme-icons-wrap"><a href="https://www.linkedin.com/company/mesozi-systems-inc/" target="blank"><i class="theme-icons theme-icons-white-bg theme-icons-sm radius-3 fa fa-linkedin"></i></a></li>
                        <li class="theme-icons-wrap"><a href="https://www.instagram.com/mesozigroup/?hl=en" target="blank"><i class="theme-icons theme-icons-white-bg theme-icons-sm radius-3 fa fa-instagram"></i></a></li>
                    </ul>
                  
                </div>
             
                <div class="col-md-4 col-sm-6 md-margin-b-50">
                    <h3 class="footer-v8-title">Lets Talk</h3>
                    <form class="contact-form comment-form-error">
                        <input type="text" class="form-control radius-3 margin-b-10"
                        name="name" placeholder="Full Name *" required></input>
                        <input type="email" class="form-control radius-3 margin-b-10"
                        name="email" placeholder="Email *" required></input>
                        <textarea class="form-control radius-3 margin-b-10" rows="5"
                        name="message" placeholder="Your message *" required>
                        </textarea>
                        <button type="submit" class="btn-dark-bg btn-base-sm radius-3 btn-block">
                            Submit
                        </button>
                    </form>
                </div>
                <br/>
                <br/>
              
                <div class="col-md-3 col-sm-6 sm-margin-b-50">
                    <h3 class="footer-v8-title">Contact Info</h3>
                    <div class="footer-v8-contact-info-bg">
                        <ul class="list-unstyled footer-v8-contact-info">
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-map-marker"></i>
                                <div class="footer-v8-contact-info-media">
                                    <p class="footer-v8-contact-info-text"><a href="https://goo.gl/maps/nULsYRZcZkvA13dh6" target="blank">HQ - Nairobi, Kenya</a></p>
                                </div>
                            </li>
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-phone"></i>
                                <div class="footer-v8-contact-info-media">
                                    <p class="footer-v8-contact-info-text"><a href="tel:254714000384">+254 714 000 384</a></p>
                                </div>
                            </li>
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-envelope-o"></i>
                                <div class="footer-v8-contact-info-media">
                                    <p class="footer-v8-contact-info-text"><a href = "mailto:info@mesozi.com">info@mesozi.com</a></p>
                                </div>
                            </li>
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-facebook"></i>
                                <div class="footer-v8-contact-info-media">
                                    <a class="footer-v8-contact-info-text" href="https://www.facebook.com/mesozigroup/" target="blank">Mesozi Group</a>
                                </div>
                            </li>
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-linkedin"></i>
                                <div class="footer-v8-contact-info-media">
                                    <a class="footer-v8-contact-info-text" href="https://www.linkedin.com/company/mesozi-systems-inc/?originalSubdomain=ke" target="blank">Mesozi Group</a>
                                </div>
                            </li>
                            <li class="footer-v8-contact-info-item">
                                <i class="footer-v8-contact-info-icon fa fa-twitter"></i>
                                <div class="footer-v8-contact-info-media">
                                    <a class="footer-v8-contact-info-text" href="https://twitter.com/mesozigroup" target="blank">@mesozigroup</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
         

                <div class="col-md-2 col-xs-6 xs-full-width md-margin-b-30">
                    <h3 class="footer-v8-title">Quick Links</h3>
                    <ul class="list-unstyled footer-news-list">
                        <li class="footer-news-list-item">
                            <i class="footer-news-list-icon fa fa-angle-right"></i>
                            <a class="footer-news-list-link" href="http://board.mesozi.com" target="_blank">Blog</a>
                        </li>
                        <li class="footer-news-list-item">
                            <i class="footer-news-list-icon fa fa-angle-right"></i>
                            <a class="footer-news-list-link" href="https://mesozi.com/index.php/site/contact">Support</a>
                        </li>
                        <li class="footer-news-list-item">
                            <i class="footer-news-list-icon fa fa-angle-right"></i>
                            <a class="footer-news-list-link" href="#">Terms & Conditions</a>
                        </li>
                        <li class="footer-news-list-item">
                            <i class="footer-news-list-icon fa fa-angle-right"></i>
                            <a class="footer-news-list-link" href="#">Privacy Policy</a>
                        </li>
                        <li class="footer-news-list-item">
                            <i class="footer-news-list-icon fa fa-angle-right"></i>
                            <a class="footer-news-list-link" href="#">FAQs</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>

      
        <div class="footer-v8-copyright">
            <div class="container text-center">
                <p class="margin-b-0">
                    &#169; Mesozi Group 2021. All Rights Reserved.
                </p>
            </div>
        </div>
   
    </footer>

</div>    
       
        

  );
}

export default Home;