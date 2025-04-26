import './Footer.scss'
const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer_content">
                <div className="footer_content_columns">
                    <div className="footer_content_columns_column">
                        <h4>MENU</h4>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Support</li>
                            <li>Get Started</li>
                        </ul>
                    </div>
                    <div className="footer_content_columns_column">
                        <h4>FOLLOW US</h4>
                        <ul>
                            <li>Medium</li>
                            <li>X (Twitter)</li>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    <div className="footer_content_columns_column">
                        <h4>LEGAL</h4>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className="footer_content_columns_cta">
                        <h3>Become Part of Our Financial Revolution!</h3>
                        <button className="btn green">GET STARTED</button>
                        <button className="btn dark">GET SUPPORT</button>
                    </div>
                </div>
            </div>

            <div className="footer_bottom">
                <span>© 2024, PENNY</span>
                <span>ALL RIGHTS RESERVED</span>
            </div>
        </footer>
    )
}

export default Footer
