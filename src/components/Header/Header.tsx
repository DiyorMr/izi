import { Globe } from 'lucide-react'
import './Header.scss'
import { NavLink, useLocation, useNavigate } from 'react-router'
const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const pathname = location.pathname
    const isAbout = pathname === '/about-us';
    return (
        <header className="header">
            <div className="header_container">
                <a className="header_container_logo" href="/">
                    <img className="logo" src="/images/IZI avatar.svg" alt="Logo" />
                </a>
                <nav>
                    <ul className="header_container_list">
                        <li className="header_container_list_item">
                            <a href="#features" onClick={() => isAbout && navigate('/#features')}>Features</a>
                        </li>
                        <li className="header_container_list_item_link">
                            <a href="#pricing" onClick={() => isAbout && navigate('/#pricing')}>Pricing</a>

                        </li>
                        <li className="header_container_list_item_link">
                            <NavLink to="/about-us">
                                About us
                            </NavLink>
                        </li>
                        <li className="header_container_list_item_link">
                            <a href="#support" onClick={() => isAbout && navigate('/#support')}>Support</a>
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
