import './Footer.scss'
const Footer = () => {
    return (
        <footer className="container">
            <div className="footer">
                <div className="footer_content">
                    <div className="footer_content_columns">
                        <div className="footer_content_columns_column">
                            <h4>MENU</h4>
                            <ul>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#support">Support</a></li>
                                <li><a href="#">Get Started</a></li>
                            </ul>

                        </div>
                        <div className="footer_content_columns_column">
                            <h4>FOLLOW US</h4>
                            <ul>
                                <li><a href="https://medium.com" target="_blank">Medium</a></li>
                                <li><a href="https://x.com" target="_blank">X (Twitter)</a></li>
                                <li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
                                <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                            </ul>

                        </div>
                        <div className="footer_content_columns_column">
                            <h4>LEGAL</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>

                        </div>
                        <div className="footer_content_columns_cta">
                            <h3>Become Part of Our Financial Revolution!</h3>
                            <a href="#" className="btn green">GET STARTED</a>
                            <a href="#" className="btn dark">GET SUPPORT</a>
                        </div>
                    </div>
                </div>

                <div className="footer_bottom">
                    <span>© 2024, PENNY</span>
                    <span>ALL RIGHTS RESERVED</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
