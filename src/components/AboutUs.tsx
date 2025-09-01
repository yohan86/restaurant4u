import AboutData from "../data/AboutSection.json";

const AboutUs:React.FC = ()=> {
    const {title, intro} = AboutData.aboutInitiative;
  return (
    <div className="about-sec wrapper bg-lightgreen">
        <div className="inner-wrapper flex flex-col justify-between md:flex-row py-40">
            <div className="left-blk w-full md:w-[30%] max-w-[320px]">
                <h3 className="raleway bold text-primary text-[45px] uppercase mb-5">{title}</h3>
                <p className="raleway semibold text-[#525252]">{intro}</p>
                <a className="button bg-green raleway bold inline-block !mt-[55px]">Order Now</a>
            </div>
            <div className="right-blk w-[60%]">
                <div className="image-wrapper w-[528px] h-[538px] m-auto">
                    <img src="./images/icons/dish-2.png" width="100%" height="100%" />
                    <span className="dish-pattern pattern-top-2"></span>
                    <span className="dish-pattern pattern-bottom-2"></span>
                    <span className="leef lf-double-top-1 w-[96px] h-[154px] absolute top-[0] right-[-40px]"></span>
                    <span className="leef lf-double-bottom-1 w-[168px] h-[209px] absolute bottom-[-125px] left-[-118px]"></span>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default AboutUs;