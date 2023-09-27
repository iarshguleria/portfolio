import "./about.css";
import MeTwo from "../../img/me-two.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={MeTwo}
            alt="dp-img"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          Currently working as an SDE-I at <a className="company-link" target="_blank" href="https://www.cogoport.com" rel="noreferrer">Cogoport</a>
        </p> */}
        <p className="a-desc">
        My journey began in the exciting realm of supply chain and logistics as an SDE in <a className="company-link" target="_blank" href="https://www.cogoport.com" rel="noreferrer">Cogoport</a>, 
        where I honed my skills in optimizing processes and enhancing operational efficiency. 
        This experience has given me a unique perspective on problem-solving and the importance of streamlined communication, 
        which I carry forward into my work as a front-end developer.
        </p>
       
        <div className="a-award">
        <p className="a-desc">
         Apart from that I have a keen interest in the field of AI and ML, my intrigue in this field isn't merely a fleeting 
         fascination, it's a relentless pursuit that ignites my curiosity and fuels my desire to understand the inner workings 
         of intelligent systems. 
         </p>
        </div>

        <div className="a-award">
        <p className="a-desc">
        A passion for crafting elegant solutions to complex challenges. With a keen eye for detail and a proven track record of
         problem-solving, I thrive in creating efficient and innovative software solutions.
         </p>
        </div>

        <div className="a-desc">
        <p className="a-sub">
          Here is my <a target="_blank" className="company-link" href="https://drive.google.com/drive/folders/1usZLyUMv_FC2_WRziXo7lVj1Zu1o_bb1?usp=sharing" rel="noreferrer">Resume</a>
         </p>
        </div>
      </div>
    </div>
  );
};

export default About;
