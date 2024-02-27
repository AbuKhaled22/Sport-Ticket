/*Installation:
1- npm install react-router-dom
2- npm install axios
3- npm install react 
4- npm install react-dom
*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Home from './Home';
import Shop from './Shop';
import Why from './Why';
import Contact from './Contact';
import Login from './Login';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Sign_up from './Sign_up';
import Cart from './Cart';
import Control from './Control';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {      
    }
  }
  render(){
    return (
      <Router>        
          <div className='body'>
            <div className="hero_area">
              {/*<!-- header section strats -->*/}
              <header className="header_section">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <Link className="navbar-brand" to='/'>
                    <span>
                      Sport Tickets
                    </span>
                  </Link>
                  <div className="collapse navbar-collapse innerpage_navbar" id="navbarSupportedContent">
                    <ul className="navbar-nav  ">
                      <li className="nav-item ">
                        <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to='/shop'>
                          Shop
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/why">
                          Why Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to='/contact'>Contact Us</Link>
                      </li>
                    </ul>
                    <div className="user_option">
                      <Link className="nav-link" to='/login'>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span>
                          Login
                        </span>
                      </Link>
                      <Link to="/cart">
                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="controle">
                      <Link to="/control">
                        <span>controle</span>
                      </Link>
                    </div>

                  </div>
                </nav>
              </header>
              {/*<!-- end header section -->*/}
            </div>
            <Routes>
              <Route path="/" element={
                <div>
                  <Home /> 
                  <Shop />
                  <Why />
                  <Contact />
                </div>
            } />
              <Route path="/shop" element={<Shop />} />
              <Route path="/why" element={<Why />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign_up" element={<Sign_up />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/control" element={<Control />} />
            </Routes>
            
            {/*<!-- info section -->*/}

            <div className="info_section  layout_padding2-top">
              <div className="social_container">
                <div className="social_box">
                  <a href="https://www.snapchat.com/add/th.abt?share_id=U5lp2HWBhRk&locale=ar-AE">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.snapchat.com/add/th.abt?share_id=U5lp2HWBhRk&locale=ar-AE">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.snapchat.com/add/th.abt?share_id=U5lp2HWBhRk&locale=ar-AE">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.snapchat.com/add/th.abt?share_id=U5lp2HWBhRk&locale=ar-AE">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="info_container ">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <h6>
                        ABOUT US
                      </h6>
                      <p>
                      Sport Ticket is your premier destination for securing tickets to the hottest sports events worldwide. 
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="info_form ">
                        <h5>
                          Newsletter
                        </h5>
                        <form action="#">
                          <input type="email" placeholder="Enter your email"/>
                          <button>
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <h6>
                        NEED HELP
                      </h6>
                      <p>
                        Our dedicated support team is here to help. Contact us anytime for a winning experience!
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <h6>
                        CONTACT US
                      </h6>
                      <div className="info_link-box">
                        <a href="">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span> Gb road 123 london Uk </span>
                        </a>
                        <a href="">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <span>+60 12345678901</span>
                        </a>
                        <a href="">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                          <span> kingboyabood@gmail.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- end info section -->*/}        
      </Router>
      
    );
  }
}

export default App;
