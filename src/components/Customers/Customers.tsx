import './Customers.scss'

const Customers = () => {
    return (
        <div className="customer">
            <div className="customer_top">
                <div className="customer_top_video">
                    <button className="customer_top_video_play_button">▶</button>
                </div>
                <div className="customer_side-cards">
                    <div className="customer_card">
                        <div>
                            <img src="/images/patel.svg" alt="Liam Patel" className="customers__avatar" />
                        </div>
                        <div>
                            <p className="customer_title">Liam Patel</p>
                            <p className="customer_name">Finance Director</p>
                        </div>
                    </div>
                    <div className="customer_card">
                        <div>
                            <img src="/images/patel.svg" alt="Liam Patel" className="customers__avatar" />
                        </div>
                        <div>
                            <p className="customer_title">Liam Patel</p>
                            <p className="customer_name">Finance Director</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="customer_cta">
                <div className="customer_cta_text">
                    <strong>Become Part of Our</strong>
                    <br />
                    Financial Revolution!
                </div>
                <div className="customer_cta_buttons">
                    <a href="#" className="primary">Get Started</a>
                    <a href="#" className="secondary">Get Support</a>
                </div>
            </div>

            <div className="customer_testimonials">
                {Array(3).fill(0).map((_, i) => (
                    <div className="customer_testimonials_testimonial" key={i}>
                        <p className="customer_testimonials_testimonial_quote">
                            “Our financial team can now focus on higher-level strategic planning
                            rather than getting bogged down by routine tasks and manual processes,
                            leading to more impactful decision-making and improved business outcomes.”
                        </p>
                        <div className="customer_testimonials_testimonial_author">
                            <img src="/images/oliwer.svg" alt="Oliver Lewis" className="customers__avatar" />
                            <div>
                                <div className="customer_name">Oliver Lewis</div>
                                <div className="customer_title">Vice President of Finance</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Customers
