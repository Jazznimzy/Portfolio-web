import "../Styles/App.css"
import {Link} from "react-router-dom"

const Navbar = () => {

    const navLinks = [
        {
            page:'Home',
            link: "/",
        },
        {
            page:'About',
            link: "/about",
        },
        {
            page:'Works',
            link: "/works",
        },
    ]
    return(
        <nav className=" navbar relative flex h-20">
            <div className=" w-full flex gap-16 nav-con justify-center items-center ">
                {navLinks.map((item, index) =>{
                    return(
                        <ul className="">
                            <li className="w-12">
                                <Link className="nav-link" to={item.link}> {item.page}</Link>
                            </li>
                        </ul>
                    )
                })}
            </div>
            <div className=" flex contact-button absolute justify-center items-center">
                <button>
                    Contact Me
                </button>
            </div>
        </nav>
    )
}
export default Navbar