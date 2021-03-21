import { UserFoto } from "./navMenu/UserFoto"
import userLogo from "../assets/icons/user.svg";
import skillLogo from "../assets/icons/think.svg";
import productLogo from "../assets/icons/product.svg";
import contactLogo from "../assets/icons/at.svg";
import { Link } from "react-router-dom";

export function NavMenu(params) {
    return (
        <div className="nav-bar">
            <UserFoto/>
            <div className="menu">
                <div className="item-menu">
                    <img src={userLogo} alt="about"/>
                    <h4><Link to="/" >ABOUT</Link></h4>
                </div>
                <div className="item-menu">
                    <img src={skillLogo} alt="skill"/>
                    <h4><Link to="/skill" >SKILLS</Link></h4>
                </div>
                <div className="item-menu">
                    <img src={productLogo} alt="projects"/>
                    <h4><Link to="/project" >PROJECTS</Link></h4>
                </div>
                <div className="item-menu">
                    <img src={contactLogo} alt="contact"/>
                    <h4><Link to="/contact" >CONTACTS</Link></h4>
                </div>
            </div>
        </div>
    )
}