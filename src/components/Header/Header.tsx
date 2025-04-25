import { Globe } from 'lucide-react'
import './Header.scss'
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
                            <a href="#about-project">
                                Features
                            </a>
                        </li>
                        <li className="header_container_list_item_link">
                            <a href="#work-process">
                                Pricing
                            </a>
                        </li>
                        <li className="header_container_list_item_link">
                            <a href="#feedbacks">
                                About us
                            </a>
                        </li>
                        <li className="header_container_list_item_link">
                            <a href="#feedbacks">
                                Support
                            </a>
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
