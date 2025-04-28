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
                            <NavLink to="/features">
                                Features
                            </NavLink>
                        </li>
                        <li className="header_container_list_item_link">
                            <NavLink to="/pricing">
                                Pricing
                            </NavLink>
                        </li>
                        <li className="header_container_list_item_link">
                            <NavLink to="/about-us">
                                About us
                            </NavLink>
                        </li>
                        <li className="header_container_list_item_link">
                            <NavLink to="/support">
                                Support
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="header_container_actions">
                    <Globe className="header_container_actions_lang" />
                    <button className="login">Log In</button>
                    <button className="get-started">Get Started</button>
                </div>
            </div>
        </header>
    )
}

export default Header
