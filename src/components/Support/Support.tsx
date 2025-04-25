import { Headset, Mail, MessageSquareText, Pen, PhoneCall } from 'lucide-react'
import './Support.scss'

const Support = () => {
    return (
        <div className='container'>
            <section className="support_section">
                <div className="support_section_tag">
                    <Headset />
                    Support
                </div>
                <h1>Expert Help,<br />
                    Anytime You Need</h1>
            </section>

            <section className="support_cards">
                <div className="card">
                    <div className="icon">
                        <MessageSquareText />
                    </div>
                    <h3>LIVE CHAT</h3>
                    <p>Instant help via live chat, with faster responses for Premium members.</p>
                    <button>CHAT WITH US</button>
                </div>
                <div className="card">
                    <div className="icon">
                        <Mail />
                    </div>
                    <h3>EMAIL SUPPORT</h3>
                    <p>Reach out for more detailed inquiries, and we'll get back to you within 24 hours.</p>
                    <button>WRITE US</button>
                </div>
                <div className="card">
                    <div className="icon">
                        <PhoneCall />
                    </div>
                    <h3>PHONE SUPPORT</h3>
                    <p>For Premium users, available Mon-Fri, 9 AM - 6 PM (EST) for urgent assistance.</p>
                    <button>CALL US</button>
                </div>
            </section>

            <div className="contact-form">
                <div className="form-card">
                    <div className="tags">
                        <Pen className='icon' />
                        GET IN TOUCH</div>
                    <h2>We'd Love to<br />Hear from You</h2>

                    <form>
                        <input type="text" placeholder="FULL NAME" required />
                        <div className="row">
                            <input type="email" placeholder="EMAIL" required />
                            <input type="tel" placeholder="PHONE" />
                        </div>
                        <textarea placeholder="MESSAGE" required></textarea>
                        <button type="submit">SEND A MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Support
