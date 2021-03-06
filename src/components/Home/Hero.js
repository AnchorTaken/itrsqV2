// Packages
import { useHistory } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import devIcon from "../../assets/img/flavour/coder.svg";

const Hero = ({ onArrow, id }) => {
  const history = useHistory();
  return (
    <div className="hero bg-gradient-orange mouseArea" id={id}>
    
      <div className="hero__container">
        <div className="text-holder">
        <h1 className="top-text" data-aos="fade-up" data-aos-once="true">
          Beautiful websites <br />
          with dedicated IT support
        </h1>
        <h2 className="bottom-text" data-aos="fade-up" data-aos-once="true" data-aos-delay={200}>
          We are a London-based company focused on helping and assisting clients bring
          their vision or business online, from design to deployment
        </h2>
        {/* <div className="btn-cont" data-aos="fade-up" data-aos-once="true" data-aos-delay={400}>

          <button
            className="btn-main orange-color hover-orange"
            onClick={() => history.push("/contact")}
          >
            Ask for a quote now
          </button>
          </div> */}
        </div>
        <img className="img-hero" src={devIcon} alt="" />
        </div>
        <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div> </div>
     
      <IoIosArrowDown
        data-aos="fade"
        data-aos-delay={600}
        className="icn-arrow-down arrow-white"
        onClick={onArrow}
        data-aos-once="true"
      />
    </div>
  );
};

export default Hero;
