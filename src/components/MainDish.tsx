import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all'

const MainDish:React.FC=()=> {

    useGSAP(()=>{
        const splitText = new SplitText(".animate-text", {type:"lines"});

        gsap.timeline({
            scrollTrigger:{
                trigger: "#header",
                start: "top 0",
                scrub: true
            }
        }).to('#main-dish .leef', {y:-200}, 0);
    }, []);



  return (
    <div id="main-dish" className="wrapper bg-primary text-white py-30">
        <div className="inner-wrapper">
            <div className="dish-wrapper flex flex-col md:flex-row md:justify-between">
                <div className="dish-blk w-full md:ml-5 md:w-[39%] lg:w-[50%] lg:ml-0">
                    <div className="dish-image relative">
                        <div className="rotate-blk"><img src="./images/dish.png" /></div>
                        
                        <span className="dish-pattern-1 absolute w-[215px] h-[322px] md:w-[150px]  
                        top-[-10px] right-[0] md:right-[-65px] lg:w-[215px] lg:h-[322px] lg:top-[-65px] lg:right-[86px]">
                        </span>
                        <span className="icon1-rotate-dish w-[224px] h-[238px] absolute  top-[-12px] left-[-42px]">
                            <span className="dish-pattern-1 flip-y180  w-[121px] h-[100%] absolute  top-0 left-0"></span>
                        </span>
                        <span className="icon2-rotate-dish w-[150px] h-[348px] lg:w-[224px] absolute bottom-[-53px] left-[-35px] lg:left-[-78px] ">
                            <span className="dish-pattern-1 flip-y80-x180  w-[100%] h-[348px] absolute  top-0 left-0"></span>
                        </span>
                        <span className="icon4-rotate-dish w-[207px] h-[129px]  absolute  bottom-[-70px] left-[86px]">
                            <span className="dish-pattern-sm w-[100%] h-[100%] absolute  top-0 left-0"></span>
                        </span>
                        
                        <span className="leef lf-pattern-4 w-[95px] h-[104px] absolute top-[-8%] right-[-24%]"></span>

                        <span className="leef lf-double-top 
                        w-[160px] h-[119px] absolute top-[-103px] left-[151px] md:top-[-125px] lg:left-[132px]">
                        </span>
                        <span className="leef lf-sigle-top-1 w-[96px] h-[154px] absolute top-[48%] right-[16px]"></span>
                        <span className="leef lf-sigle-bottom-1 w-[95px] h-[119px] absolute bottom-[0%] right-[16px]"></span>
                     
                    </div>
                </div>
                <div className="dish-intro w-full md:w-[340px] relative">
                    <h3 className="animate-text quicksand uppercase text-[35px]">Little Italy</h3>
                    <h4 className="sub-title quicksand medium">authentic italian cuisine</h4>
                    <p className="quicksand mt-10 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                    <a className="button raleway bold">Contact</a>
                    <p className="open-status-title quicksand bold mt-[125px]">open everyday from</p>
                    <p className="open-status-intro">10:00-22:00</p>
                    <span className="leef lf-pattern-1 w-[100px] h-[135px] absolute  bottom-[97px] left-[-127px]"></span>

                    <span className="leef lf-double w-[160px] h-[243px] absolute bottom-[134px] right-[-10px]"></span>
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default MainDish;