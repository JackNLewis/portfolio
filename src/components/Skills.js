
import SkillCard from "./SkillCard";

import pythonIcon from "../images/python.png"
import javaIcon from "../images/java.png"
import htmlIcon from "../images/html5.png"
import cssIcon from "../images/css.png"
import jsIcon from "../images/javascript.png"
import cIcon from "../images/c.png"
import "../styles/skills.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


import SwiperCore, {
  Pagination
} from 'swiper/core';

const items =
  [
    {
    id: 1,
    title: "Python",
    text : "I haver used python to create machine learning models and also websites. this website uses a api i created using djangoi for the blog posts",
    img: pythonIcon
    },
    {
      id: 2,
      title: "Java",
      text : "Java was the first language I learnt at University and is probably the language I feel most comfortable with. During my second year I created a game using Javafx",
      img: javaIcon
    },
    {
      id: 3,
      title: "HTML",
      text: "I have used html to create various websites. It was actually the first prograsmming i ever learnt in secondary school.",
      img: htmlIcon
    },
    {
      id: 4,
      title: "CSS",
      text: "Css Is a muist know language for web developement. Without it it is extremely hard to creatre nice looking websites",
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
      text: "I learnt C during my second year of unioversity. We used it to create various kernel applications",
      img: cIcon
    }
  ];

// install Swiper modules
SwiperCore.use([Pagination]);



function Skills() {
    return (
      <div className="skills-container">
        <div className="skill-info">
          <h2 className="topSubHead">skills.</h2>
          <h1 className="mainHead">Here is what I have learnt so far.</h1>
          <h3 className="botSubHead">These are some of the skills I have picked up since starting University</h3>
        </div>
        
          <Swiper slidesPerView={5} spaceBetween={15} pagination={{
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

// <SkillCard key={item.id} title={item.title} text={item.text} img={item.img}/>