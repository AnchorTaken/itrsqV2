

const HeroSection = ({title, img, topTitle}) => {
    return ( 
        <div className="new-hero">
            <div className="cont">
        <div className="text-holder">
            <h1>{topTitle}</h1>
            <div className="bread-crumbs">
                <span>Home</span>
                <div className="dot"><i className="fa fa-circle"></i></div>
                <span>{title}</span>
            </div>
        
        </div>
            <img src={img} alt="" /></div>
    </div>
     );
}
 
export default HeroSection;