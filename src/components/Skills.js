
import SkillCard from "./SkillCard";
import pythonIcon from "../images/python.png"
import javaIcon from "../images/java.png"
import htmlIcon from "../images/html5.png"
import cssIcon from "../images/css.png"
import jsIcon from "../images/javascript.png"
import cIcon from "../images/c.png"
import "../styles/skills.css";

// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


import SwiperCore, {
  Pagination
} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Pagination]);


const items =
  [
    {
    id: 1,
    title: "Python",
    text : "I've used python to build various machine learning models and also websites using the web framework Django.",
    img: pythonIcon
    },
    {
      id: 2,
      title: "Java",
      text : "Java was the first language I learned at University and is probably the language I feel most comfortable with. During my second year, I created a game using JavaFX.",
      img: javaIcon
    },
    {
      id: 3,
      title: "HTML",
      text: "I have used HTML to create various websites. It was actually the first programming I ever learned in secondary school.",
      img: htmlIcon
    },
    {
      id: 4,
      title: "CSS",
      text: "CSS is a must-know language for web development. Without it, it is extremely hard to create nice looking websites",
      img: cssIcon
    },
    {
      id: 5,
      title: "JavaScript",
      text : "I have used java scripts in many websites to create different effects. I also created this website using react which is a javascript framework.",
      img: jsIcon
    },
    {
      id:6,
      title: "C",
      text: "I learned C during my second year of university. We used it to create various kernel applications",
      img: cIcon
    }
  ];



function Skills() {



    return (
      <div className="skills-container">
        <div className="skill-info">
          <h2 className="topSubHead">skills.</h2>
          <h1 className="mainHead">Here is what I have learnt so far.</h1>
          <h3 className="botSubHead">These are some of the skills I have picked up since starting University</h3>
        </div>
          <Swiper slidesPerView={1} spaceBetween={15} pagination={{
            "clickable": true
          }} breakpoints={{
            "640": {
              "slidesPerView": 2,
              "spaceBetween": 20
            },
            "768": {
              "slidesPerView": 3,
              "spaceBetween": 40
            },
            "1024": {
              "slidesPerView": 4,
              "spaceBetween": 50
            }
          }} className="mySwiper">
            {items.map(item => 
              <SwiperSlide key={item.id}>        
                <SkillCard key={item.id} title={item.title} text={item.text} img={item.img}/>
              </SwiperSlide>
            )}
            
          </Swiper>

      </div>
    );
}


export default Skills;
