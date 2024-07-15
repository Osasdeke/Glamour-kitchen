
// Homepage.jsx
import React from "react";
import "./Homepage.css";

import { useState, useRef, useEffect  } from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUtensils,  faPhone, faClock, faMapMarker, faBars, faTimes, faInfinity, faArrowRight, faCrown   } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTiktok, faTwitter, faLinkedin , faReddit, faSnapchat    } from '@fortawesome/free-brands-svg-icons';


const Homepage = () => {

  //////////////////////PRELOADER////////////////

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some async operation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Set this to the desired loading time
  }, []);







  const logo ="https://img.freepik.com/premium-vector/logo-food-catering-that-is-called-food-catering_540027-2.jpg"

  const ribbon ="https://static.vecteezy.com/system/resources/previews/021/911/568/original/red-bow-and-ribbon-on-transparent-background-file-for-christmas-and-birthday-decorations-png.png";



  //     NAV BAR////
  const[openbtn, setOpenbtn] = useState(true)
  const[closebtn, setClosebtn] = useState(false)


  const[show,setShow] = useState(false)


  const openNav = ()=>{

      setShow(true)
      setClosebtn(true)

      setOpenbtn(false)

  }

  const closeNav =  ()=>{
      setShow(false)
      setClosebtn(false)

      setOpenbtn(true)

  }

  









  //                 IMAGE SLIDER  BREAKFAST   //////

  const slides = [
    { image: 'https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Slide 1' },
    { image: 'https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Slide 2' },
    { image: 'https://images.pexels.com/photos/4081427/pexels-photo-4081427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Slide 3' },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides]);




  //                 IMAGE SLIDER  LUNCH   //////

  const slides2 = [
    { image2: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Slide 1' },
    { image2: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Slide 2' },
    { image2: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Slide 3' },
    // Add more slides as needed
  ];

  const [currentSlide2, setCurrentSlide2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide2((prevSlide) =>
        prevSlide === slides2.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides2]);

  //                 IMAGE SLIDER  DESERT   //////

  const slides3 = [
    { image3: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Slide 1' },
    { image3: 'https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Slide 2' },
    { image3: 'https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Slide 3' },
    // Add more slides as needed
  ];

  const [currentSlide3, setCurrentSlide3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide3((prevSlide) =>
        prevSlide === slides3.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides3]);



  ///SLIDE UP ANIMATION///
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust the threshold value as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  const specialImg = "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const cheflogo ="https://cdn-icons-png.flaticon.com/512/3461/3461980.png"




  






    







  return (
    <>


      <div className="Homepage-container">      




        <div className="header">

          <div className="left">
            <a href=""><img className="logo" src={logo} alt="logo" /><span className="span">Glamour's Kitchen</span></a> 
          </div>

          <div className="right">
            <ul>
              
              <a className="desktop" href=""> <li>< FontAwesomeIcon icon={faMapMarker }  className="icons"/>Address</li></a>
              <a className="desktop" href=""> <li>< FontAwesomeIcon icon={faClock} className="icons"/>Oppening Hours</li></a>
              <a className="desktop" href=""> <li>< FontAwesomeIcon icon={faPhone} className="icons"/>Contact us</li></a>
              <a className="desktop" href=""> <li>< FontAwesomeIcon icon={faEnvelope} className="icons"/>Email</li></a>
            </ul>

              {openbtn ? <FontAwesomeIcon icon={faBars} size="2x" onClick={openNav} className="open" />:null}                
            

          </div>


          {/* MOBILE NAV BAR   */}

          <div className={show ? "mobileNav show" : "mobileNav"}>
            <a href=""><img className="logo navLogo" src={logo} alt="logo" /></a> 
            <div className="navContainer">
              <hr />
              <a href=""> <p className="navitems">HOME</p> </a>
              <hr />
              <a href=""> <p className="navitems">ABOUT</p></a>
              <hr />
              <a href=""> <p className="navitems">MENU</p></a>
              <hr />
              <a href=""> <p className="navitems">CONTACT</p></a>
              <hr />
              <h1 className="navdetail1">Visit Us</h1>
              <h5 className="navdetail2">SHOP 334, GLAMOUR AVENUE OFF LINCONL WAY, WASGHINTON DC</h5>
              <p className="navdetail2">Open: 8:00 am to 6:00pm</p>
              <p className="navdetail2">support@glamourminogue.com</p>
              

              <p className="call">Booking Request</p>
              <a className="call" href="">+2349055928714</a>

              
              {closebtn ? <FontAwesomeIcon icon={faTimes} size="2x" onClick={closeNav} className="close"  />:null}
            </div>

          </div>
        </div>


        

  
        <div className="first">
              <div className="div1">
                <p className="subtext">DELIGHTFUL EXPERIENCE</p>
                
                < FontAwesomeIcon icon={faCrown } className="smallimg" size="2x"/>
                <h1 className="flavours">Flavours Inspired by the seasons</h1>
                <p className="subtext">Come with family and feel the joy of mouth watery foods</p>
                <button className="firstbtn" type="button">VIEW OUR MENU</button>
              </div>
        </div>

        <div className="second-body">
            <p className="subtext">FLAVOURS FOR RAYALTIES</p>
            < FontAwesomeIcon icon={faInfinity} className="smallimg" size="2x"/>
            <h1 className="flavours">We Offer Top Notch</h1>
            <p className="subtext">Come with family and feel the joy of mouth watery foods</p>
        </div>


        <div className="options">

          <div ref={ref} className={`breakfast break ${isInView ? 'slide-up' : ''}`}>
            
            <div className="slider">
              <div className="slides-container" style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in'
              }}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="slide"
                  >
                    <img className="breakfastImg" src={slide.image} alt={slide.alt} />
                  </div>
                ))}
              </div>
              <img className="ribbon" src={ribbon} alt="" />
              <h1 className="foodname">BREAKFAST IN BED</h1>
              <p className="foodtext">Waking up to the aroma of freshly brewed coffee and the sizzle of bacon, breakfast in bed is the ultimate morning luxury. Fluffy pancakes, scrambled eggs, and fresh fruit elegantly arranged on a tray bring a sense of indulgence and relaxation. It’s a perfect way to start the day.</p>
            </div>
            <button className="view" type="button">VIEW MENU < FontAwesomeIcon icon={faArrowRight} /></button>
            
          </div>

          <div className="breakfast lunch">
              
              <div className="slider">
                <div className="slides-container" style={{
                  transform: `translateX(-${currentSlide2 * 100}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}>
                  {slides2.map((slide2, index) => (
                    <div
                      key={index}
                      className="slide"
                    >
                      <img className="breakfastImg" src={slide2.image2} alt={slide2.alt} />
                    </div>
                  ))}
                </div>
                <img className="ribbon" src={ribbon} alt="" />
                <h1 className="foodname">LUNCH</h1>
                <p className="foodtext">Lunchtime offers a mid-day break and nourishment. From hearty sandwiches and fresh salads to warm soups and savory pasta, lunch provides a variety of flavors and nutrients. Whether it's a quick bite or a leisurely meal with friends, lunch is essential for recharging and staying productive throughout the day.</p>
                
              </div>
              <button className="view" type="button">VIEW MENU < FontAwesomeIcon icon={faArrowRight} /></button>
          </div>


          <div className="breakfast dinner">
            <div className="slider">
            
              <div className="slides-container" style={{
                transform: `translateX(-${currentSlide3 * 100}%)`,
                transition: 'transform 0.4s ease-out'
              }}>
                {slides3.map((slide3, index) => (
                  <div
                    key={index}
                    className="slide"
                  >
                    <img className="breakfastImg" src={slide3.image3} alt={slide3.alt} />
                  </div>
                ))}
              </div>
              <img className="ribbon" src={ribbon} alt="" />
              <h1 className="foodname">DINNER</h1>
              <p className="foodtext">Dinner marks the end of the day and a time for reflection and replenishment. From gourmet dinners at fine restaurants to cozy homemade meals with loved ones, dinner brings people together to share stories and enjoy delicious food. Whether it's a simple bowl of pasta or an elaborate feast, dinner nourishes both the body and the soul, setting the stage for relaxation and rest.</p>
            </div>
            <button className="view" type="button">VIEW MENU < FontAwesomeIcon icon={faArrowRight} /></button>
          </div>

        </div>



        

        <div className="special-meals">
          <div className="special-meal-details">
            <h2> <FontAwesomeIcon className="cutleryIcon" icon={faUtensils} size="3x" /></h2>
            <h1 className="foodname">SPECIAL DISH</h1>
            
            <h1 className="flavours special">Meals for Royalties</h1>
            <div className="special-section">
              <img className="specialImg" src={specialImg} alt="" />
            </div>


            <p className="special subtext">Royal meals delight with their opulent displays and sumptuous flavors, evoking centuries of culinary tradition and regal sophistication. From extravagant banquets featuring rare delicacies to intimate gatherings showcasing refined elegance, royal dining captivates
             with its grandeur. Each dish is meticulously prepared to tantalize the palate and honor the legacy of royalty.
            </p>
            <div className="price-flex">
              <p className="strike">#40,000</p>
              <p>#25,000</p>              
            </div>
            <button className="firstbtn specialbtn" type="button">VIEW ALL MENU</button>

          </div>
        
        </div>


        <div className="drinksDiv">
          <h1 className="flavours drinksHead">Exquisite drinks to pamper your taste buds</h1>
        
          <div className="drinksBody">
            <div className="drinks">
              <img className="drinksImg" src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p className="drinksText">Our Fresh blend of orange juice is what you need to unwind after a stressful day</p>
              <a href=""><h5>Learn More < FontAwesomeIcon className="move" icon={faArrowRight} /></h5></a>
            </div>

            <div className="drinks">
              <img className="drinksImg" src="https://images.pexels.com/photos/3021394/pexels-photo-3021394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p className="drinksText">Our flavoured drinks are made by the best hands</p>
              <a href=""><h5>Learn More < FontAwesomeIcon className="move" icon={faArrowRight} /></h5></a>
            </div>

            <div className="drinks">
              <img className="drinksImg" src="https://images.pexels.com/photos/5912010/pexels-photo-5912010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p className="drinksText">Even if you're a vegeterian, we've got you covered</p>
              <a href=""><h5>Learn More < FontAwesomeIcon className="move" icon={faArrowRight} /></h5></a>
            </div>
          </div>

        </div>


        <div className="footer">
            <h4 className="contact">Connect with us via our social platforms</h4>
          <div className="footerDetails">
            <a href="#"> <FontAwesomeIcon className="socialIcon" icon={faFacebook} size="2x" /></a>
            <a href="#"> <FontAwesomeIcon className="socialIcon" icon={faTwitter} size="2x" /></a>
            <a href="#"> <FontAwesomeIcon className="socialIcon" icon={faInstagram} size="2x" /></a>
            <a href="#"> <FontAwesomeIcon className="socialIcon" icon={faLinkedin } size="2x" /></a>
            <a href="#"> <FontAwesomeIcon className="socialIcon" icon={faReddit} size="2x" /></a>
            <a href="#"> <FontAwesomeIcon className="socialIcon" icon={faSnapchat } size="2x" /></a>          
          </div>

          
            
          <a className="desktop" href="tell=+234123456789"> <li>< FontAwesomeIcon icon={faPhone} className="icons"/>Contact us</li></a>              
            





        </div>


        
        
        
        



        

















      </div>
      
        







        

      




        



        

      
    </>
  );
};

export default Homepage;
