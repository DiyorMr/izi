import { MessageSquareText } from 'lucide-react'
import './Customers.scss'

const Customers = () => {
    return (
        <div className='container'>
            <div className="testimonials_section">
                <button className="testimonials_button">
                    <MessageSquareText className='icon' />
                    Testimonials</button>
                <h2 className="testimonials_title">Why Customers<br />Love Penny</h2>
            </div>
            <div className="customers">
                <div className="customers__top">
                    <div className="customers__video">
                        <button className="customers__play-button">▶</button>
                    </div>
                    <div className="customers__side-cards">
                        <div className="customers__card">
                            <div>
                                <img src="/images/patel.svg" alt="Liam Patel" className="customers__avatar" />
                            </div>
                            <div>
                                <p className="customers__title">Liam Patel</p>
                                <p className="customers__name">Finance Director</p>
                            </div>
                        </div>
                        <div className="customers__card">
                            <div>
                                <img src="/images/patel.svg" alt="Liam Patel" className="customers__avatar" />
                            </div>
                            <div>
                                <p className="customers__title">Liam Patel</p>
                                <p className="customers__name">Finance Director</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="customers__cta">
                    <div className="customers__cta-text">
                        <strong>Become Part of Our</strong><br />
                        Financial Revolution!
                    </div>
                    <div className="customers__cta-buttons">
                        <button className="primary">Get Started</button>
                        <button className="secondary">Get Support</button>
                    </div>
                </div>

                <div className="customers__testimonials">
                    {Array(3).fill(0).map((_, i) => (
                        <div className="customers__testimonial" key={i}>
                            <p className="customers__quote">
                                “Our financial team can now focus on higher-level strategic planning
                                rather than getting bogged down by routine tasks and manual processes,
                                leading to more impactful decision-making and improved business outcomes.”
                            </p>
                            <div className="customers__author">
                                <img src="/images/oliwer.svg" alt="Oliver Lewis" className="customers__avatar" />
                                <div>
                                    <div className="customers__name">Oliver Lewis</div>
                                    <div className="customers__title">Vice President of Finance</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Customers
