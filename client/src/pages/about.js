import React from "react";

import "../assets/css/style.css"
import "../assets/css/animate.css"

import pic from "../assets/img/profile-pic.jpg"
import cquiz from "../assets/img/cquiz.png"
import eplanner from "../assets/img/eplanner.png"
import codeme from "../assets/img/code-me.png"
import lovequest from "../assets/img/lovequest.png"
import pgen from "../assets/img/pgen.png"
import wdash from "../assets/img/wdash.png"
import scart from "../assets/img/shoppingcart.JPG"

function About() {

    return (
        <div>
        {/*Hero_Section*/}
        <section id="hero_section" className="top_cont_outer">
          <div className="hero_wrapper">
            <div className="card hovercard">
              <div className="cardheader">
              </div>
              <div className="avatar">
                <img alt="" src={pic} />
              </div>
              <div className="info">
                <div className="title">
                  <a target="_blank" href="http://webthemez.com">Mathew Thomas</a>
                </div>
                <div className="desc"><b>Software Engineer</b></div>
                <div className="desc">
                  <p>
                    Hi, I'm Mathew. I'm a Software Developer at StateFarm - Digital Assets and Strategy (DAS). <br />
                  </p>
                </div>
              </div>
              <div className="bottom">
                <div className="underline" />
                <ul className="social_links">
                  <li className="resume animated bounceIn wow delay-04s animated" style={{visibility: 'visible', animationName: 'bounceIn'}}><a href="https://imlmt.github.io/resume/"><i className="fa fa-file" /></a></li>
                  <li className="linkedin animated bounceIn wow delay-02s animated" style={{visibility: 'visible', animationName: 'bounceIn'}}><a href="https://www.linkedin.com/in/mathewlthomas/"><i className="fa fa-linkedin" /></a></li>
                  <li className="github animated bounceIn wow delay-03s animated" style={{visibility: 'visible', animationName: 'bounceIn'}}><a href="https://github.com/IMLMT"><i className="fa fa-github" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Hero_Section*/}
        {/*Header_section*/}
        <header id="header_wrapper">
          <div className="container">
            <div className="header_box">
              {/*  <div class="logo"><a href="#"><img src="img/logo.png" alt="logo"></a></div>*/}
              <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" id="toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon">   
                    <i className="fa fa-bars" style={{color: 'rgb(51, 145, 145)', fontSize: '28px'}} />
                  </span>
                </button>
                <div className="collapse navbar-collapse navStyle" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#hero_section">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#aboutUs">About Me</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#service">Skills</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#Portfolio">Projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/*Header_section*/}
        <section id="aboutUs">
          {/*Aboutus*/}
          <div className="inner_wrapper aboutUs-container fadeInLeft animated wow">
            <div className="container">
              <br /><br />
              <h2>About Me</h2>
              <h6>I am passionate to learn new programming languages and I actively look for material to keep myself updated on time complexity of code and systems design while using different programming languages. My hobbies include assembling and fixing
                up computer hardware, emulating systems through virtual machines or homebrew emulators for legacy video game consoles.
              </h6>
            </div>
          </div>
        </section>
        {/*Aboutus*/}
        {/*Service*/}
        <section id="service">
          <div className="container">
            <h2>Skills</h2>
            <h6>Proficient in front-end &amp; back-end software engineering technologies and DCS control system software engineering development.</h6>
            <div className="service_wrapper">
              <div className="row">
                <div className="col-md-6">
                  <div className="service_icon delay-03s animated wow  zoomIn"> <span><i className="fa fa-code" /></span> </div>
                  <div className="service_block">
                    <h3 className="animated fadeInUp wow">Software Engineering</h3>
                    <p className="animated fadeInDown wow">HTML5, CSS3, Bootstrap, JavaScript, Ruby, jQuery, AJAX and Node.js.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service_icon icon2  delay-03s animated wow zoomIn"> <span><i className="fa fa-bolt" /></span> </div>
                  <div className="service_block">
                    <h3 className="animated fadeInUp wow">Controls Engineering</h3>
                    <p className="animated fadeInDown wow">MOD 5 Dowtran, Honeywell Experion C300 and Emerson Delta V 13.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Service*/}
        <section id="experience" className="timeline">
          <div className="container">
            <h2>Experience</h2>
            <h6>Detailed, analytical and client-oriented professional seeking a software engineering position to pursue a successful career in software engineering; having 3 years of engineering experience and looking to join a progressive tech company where
              my technical skills will be fully harnessed.</h6>
            <div className="qa-message-list" id="wallmessages">
              <div className="message-item" id="m16">
                <div className="message-inner">
                  <div className="message-head clearfix">
                    <div className="user-detail">
                      <h5 className="handle">The Dow Chemical Company</h5>
                      <div className="post-meta">
                        <div className="asker-meta">
                          <span className="qa-message-what" />
                          <span className="qa-message-when">
                            <span className="qa-message-when-data">Aug 27, 2018</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="qa-message-content">
                    Process Automation Engineer
                  </div>
                </div>
              </div>
              <div className="message-item" id="m9">
                <div className="message-inner">
                  <div className="message-head clearfix">
                    <div className="user-detail">
                      <h5 className="handle">Hargrove Engineers and Constructors</h5>
                      <div className="post-meta">
                        <div className="asker-meta">
                          <span className="qa-message-what" />
                          <span className="qa-message-when">
                            <span className="qa-message-when-data">May 01, 2017</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="qa-message-content">
                    Controls and Automation Engineer
                  </div>
                </div>
              </div>
              <div className="message-item" id="m7">
                <div className="message-inner">
                  <div className="message-head clearfix">
                    <div className="user-detail">
                      <h5 className="handle">BL Technology</h5>
                      <div className="post-meta">
                        <div className="asker-meta">
                          <span className="qa-message-what" />
                          <span className="qa-message-when">
                            <span className="qa-message-when-data">Mar 23, 2017</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="qa-message-content">
                    Engineering Intern
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio */}
        <section id="Portfolio" className="content">
          {/* Container */}
          <div className="container portfolio_title">
            {/* Title */}
            <div className="section-title">
              <h2>Projects</h2>
              <h6>Here's some of my work. Please check them out !</h6>
            </div>
            {/*/Title */}
          </div>
          {/* Container */}
          <div className="portfolio-top" />
          {/* Portfolio Filters */}
          <div className="portfolio">
            {/*/Portfolio Filters */}
            <div className="container">
              <div className="row">
                {/* Portfolio Wrapper */}
                <div className="col-lg-4">
                  <div className="isotope fadeInLeft animated wow grid" style={{position: 'relative', overflow: 'hidden', height: '240px', width: '350px'}} id="portfolio_wrapper">
                    {/* Portfolio Item */}
                    <figure style={{position: 'absolute', left: '0px', top: '0px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', width: '337px', opacity: 1}} className="portfolio-item one-four   appleIOS isotope-item effect-oscar">
                      <div className="portfolio_img">
                        <img src={lovequest} alt="Portfolio 2" /> </div>
                      <figcaption>
                        <div onclick="warning()">
                          <a href="https://morning-fjord-37921.herokuapp.com/" className="fancybox">
                            <h2><br /> Love<span>Quest</span></h2>
                            <p>Find your forever Lovequester ! (A dating website)</p>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                    {/*/Portfolio Item */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="isotope fadeInLeft animated wow grid" style={{position: 'relative', overflow: 'hidden', height: '240px', width: '350px'}} id="portfolio_wrapper">
                    {/* Portfolio Item */}
                    <figure style={{position: 'absolute', left: '0px', top: '0px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', width: '337px', opacity: 1}} className="portfolio-item one-four   appleIOS isotope-item effect-oscar">
                      <div className="portfolio_img">
                        <img src={codeme} alt="Portfolio 1" /> </div>
                      <figcaption>
                        <div>
                          <a href="https://imlmt.github.io/Code-Me/" className="fancybox">
                            <h2><br /> Code-<span>Me</span></h2>
                            <p>An interesting coding repository...(prototype)</p>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                    {/*/Portfolio Item */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="isotope fadeInLeft animated wow grid" style={{position: 'relative', overflow: 'hidden', height: '240px', width: '350px'}} id="portfolio_wrapper">
                    {/* Portfolio Item */}
                    <figure style={{position: 'absolute', left: '0px', top: '0px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', width: '337px', opacity: 1}} className="portfolio-item one-four   appleIOS isotope-item effect-oscar">
                      <div className="portfolio_img">
                        <img src={pgen} alt="Portfolio 1" /> </div>
                      <figcaption>
                        <div>
                          <a href="https://imlmt.github.io/Password-Generator/" className="fancybox">
                            <h2>Password <span>Generator</span></h2>
                            <p>A simple password generator for your securing needs !</p>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                    {/*/Portfolio Item */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="isotope fadeInLeft animated wow grid" style={{position: 'relative', overflow: 'hidden', height: '240px', width: '350px'}} id="portfolio_wrapper">
                    {/* Portfolio Item */}
                    <figure style={{position: 'absolute', left: '0px', top: '0px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', width: '337px', opacity: 1}} className="portfolio-item one-four   appleIOS isotope-item effect-oscar">
                      <div className="portfolio_img">
                        <img src={eplanner} alt="Portfolio 1" /> </div>
                      <figcaption>
                        <div>
                          <a href="https://imlmt.github.io/Workday-Planner/" className="fancybox">
                            <h2>Workday <span>Planner</span></h2>
                            <p>A daily schedule planner !</p>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                    {/*/Portfolio Item */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="isotope fadeInLeft animated wow grid" style={{position: 'relative', overflow: 'hidden', height: '240px', width: '350px'}} id="portfolio_wrapper">
                    {/* Portfolio Item */}
                    <figure style={{position: 'absolute', left: '0px', top: '0px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', width: '337px', opacity: 1}} className="portfolio-item one-four   appleIOS isotope-item effect-oscar">
                      <div className="portfolio_img">
                        <img src={cquiz} alt="Portfolio 1" /> </div>
                      <figcaption>
                        <div>
                          <a href="https://imlmt.github.io/Code-Quiz/" className="fancybox">
                            <h2>Code<br /><span>Quiz</span></h2>
                            <p>A witty quiz created from scratch ! </p>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                    {/*/Portfolio Item */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="isotope fadeInLeft animated wow grid" style={{position: 'relative', overflow: 'hidden', height: '240px', width: '350px'}} id="portfolio_wrapper">
                    {/* Portfolio Item */}
                    <figure style={{position: 'absolute', left: '0px', top: '0px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', width: '337px', opacity: 1}} className="portfolio-item one-four   appleIOS isotope-item effect-oscar">
                      <div className="portfolio_img">
                        <img src={wdash} alt="Portfolio 1" /> </div>
                      <figcaption>
                        <div>
                          <a href="https://imlmt.github.io/Weather-Dashboard/" className="fancybox">
                            <h2>Weather<span><br /> Dashboard</span></h2>
                            <p>It's sunny here...how's it over there ?</p>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                    {/*/Portfolio Item */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="isotope fadeInLeft animated wow grid" style={{position: 'relative', overflow: 'hidden', height: '240px', width: '350px'}} id="portfolio_wrapper">
                    {/* Portfolio Item */}
                    <figure style={{position: 'absolute', left: '0px', top: '0px', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)', width: '337px', opacity: 1}} className="portfolio-item one-four   appleIOS isotope-item effect-oscar">
                      <div className="portfolio_img">
                        <img src={scart} alt="Portfolio 1" /> </div>
                      <figcaption>
                        <div>
                          <a href="https://shopping-cart.herokuapp.com/" className="fancybox">
                            <h2>Shopping <span>Cart</span></h2>
                            <p>Shopping Cart demo...</p>
                          </a>
                        </div>
                      </figcaption>
                    </figure>
                    {/*/Portfolio Item */}
                  </div>
                </div>
                {/*/Portfolio Wrapper */}
              </div>
            </div>
          </div>
          {/*/Portfolio Filters */}
          <div className="portfolio_btm" />
          <div id="project_container">
            <div className="clear" />
            <div id="project_data" />
          </div>
        </section>
        {/*/Portfolio */}
        {/*Footer*/}
        <footer></footer>
      </div>
    )
}

export default About
