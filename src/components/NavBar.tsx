import { NavLink } from "react-router-dom"


const NavBar:React.FC = ()=> {
  return (
    <div className="nav-wrapper flex flex-row w-full justify-between pb-20">
        <nav className="flex w-full gap-30 lg:gap-80">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sds">Menu</NavLink>
        </nav>
        <div className="site-logo-wrapper font-rhesmanisa justify-center">
            <div className="site-logo"></div>
        </div>
        <nav className="flex w-full  gap-30 lg:gap-80 justify-end">
            <NavLink to="/ds">Location</NavLink>
            <NavLink to="/sd">Contact</NavLink>

        </nav>
    </div>
  )
}

export default NavBar;