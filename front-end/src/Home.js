/*install 
1- npm install react-bootstrap
2- npm install react-router-dom
*/
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Carousel className='slider_section'>
        <Carousel.Item className='carousel-item-style'>
        <div >
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <h1>
                  Welcome To Our <br />
                  Sport Ticket Shop
                </h1>
                <p>
                  we're more than just a ticket platform; we're your gateway to the heart-pounding action of your favorite sports. Explore a world of seamless ticketing, exclusive deals, and premium experiences.
                </p>
                <Link to='/contact'>
                  Contact Us
                </Link >
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="img-box">
                <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc4c7b260d9ef06cc/62e8b14bd130cf110c72e27e/Lusail_Stadium_(3).jpg?auto=webp&format=pjpg&width=3840&quality=60" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='carousel-item-style'>
        <div >
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <h1>
                  Elevate Your Game Day Experience!
                </h1>
                <p>
                  Fuel your passion for sports with our provided Ticket . 🎟️ Score the hottest tickets, witness epic showdowns, and create memories that last a lifetime. From courtside excitement to stadium roars, we've got your ticket to unforgettable moments. Don't miss out – secure your seats now and immerse yourself in the thrill of victory!
                </p>
                <Link to='/shop'>
                  shop
                </Link>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="img-box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlr7467mOOn6iGB1yfrq4gqPmeQuFJHUpt1g&usqp=CAU" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='carousel-item-style'>
        <div >
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <h1>
                  Elevate Your Game Day Experience!
                </h1>
                <p>
                  Score the best seats and unforgettable moments! 🏀🏈⚽, your gateway to thrilling sports experiences. Grab your tickets now and be part of the action!
                </p>
                <Link to='/shop'>
                  shop
                </Link>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="img-box">
                <img src="https://dot.la/media-library/sofi-stadiums-70000-square-foot-circular-video-board-is-dubbed-the-infinity-screen.jpg?id=29248462&width=2000&height=1500&quality=85&coordinates=0%2C0%2C0%2C0" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>      
    </Carousel>
  );
}

export default Home;
