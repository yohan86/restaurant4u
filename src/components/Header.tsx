import NavBar from "./NavBar";

const Header: React.FC = ()=> {
  return (
    <div id="header" className="wrapper bg-primary text-white  pt-[80px]">
        <div className="inner-wrapper">
            <NavBar />
        </div>
        
    </div>
  )
}

export default Header;