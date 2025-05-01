import { Globe } from 'lucide-react'
import './Header.scss'
import { NavLink } from 'react-router'
const Header = () => {
    return (
        <header className="header">
            <div className="header_container">
                <a className="header_container_logo" href="/">
                    <img className="logo" src="/images/IZI avatar.svg" alt="Logo" />
                </a>
                <nav>
                    <ul className="header_container_list">
                        <li className="header_container_list_item">
                            <a href="#features">Features</a>
                        </li>
                        <li className="header_container_list_item_link">
                            <a href="#pricing">Pricing</a>

                        </li>
                        <li className="header_container_list_item_link">
                            <NavLink to="/about-us">
                                About us
                            </NavLink>
                        </li>
                        <li className="header_container_list_item_link">
                            <a href="#support">Support</a>
                        </li>
                    </ul>
                </nav>
                <div className="header_container_actions">
                    <Globe className="header_container_actions_lang" />
                    <a href="#" className="login">Log In</a>
                    <a href="#" className="get-started">Get Started</a>
                </div>
            </div>
        </header>
    )
}

export default Header
