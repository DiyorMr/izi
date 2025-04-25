import './Benefit.scss'
const Benefit = () => {
    return (
        <>
            <div className="benefits-stats">
                <div className="stat">
                    <span className="stat-value">95%</span>
                    <span className="stat-label">Results Accuracy</span>
                </div>
                <div className="stat">
                    <span className="stat-value">5X</span>
                    <span className="stat-label">Faster Decision-Making</span>
                </div>
                <div className="stat">
                    <span className="stat-value">24/7</span>
                    <span className="stat-label">Instant Availability</span>
                </div>
            </div>
            <div className="benefits-menu">
                <ul className="menu-list">
                    <li className="menu-item">Efficiency</li>
                    <li className="menu-item">Accessibility</li>
                    <li className="menu-item">Security</li>
                    <li className="menu-item">Accuracy</li>
                    <li className="menu-item">Scalability</li>
                </ul>
                <div className="menu-content">
                    <h3 className="content-title">Automate Financial Tasks</h3>
                    <p className="content-text">
                        Penny automates tasks like invoicing, expense tracking, and report generation,
                        allowing your team to focus on strategic activities.
                    </p>
                    <p className="content-text">
                        Say goodbye to manual work — just ask Penny for instant results, saving hours.
                        With Penny managing repetitive tasks, your team can drive financial growth more efficiently.
                    </p>
                </div>
            </div>
        </>

    )
}

export default Benefit
