import './Benefit.scss'
import { Fragment, useState } from 'react'
const Benefit = () => {
    const data = [
        {
            name: 'Efficiency',
            content:
                <Fragment>
                    <h3 className="content-title">Automate Financial Tasks</h3>
                    <div className='content-box'>
                        <p className="content-text">
                            Penny automates tasks like invoicing, expense tracking, and report generation,
                            allowing your team to focus on strategic activities.
                        </p>
                        <p className="content-text">
                            Say goodbye to manual work — just ask Penny for instant results, saving hours.
                            With Penny managing repetitive tasks, your team can drive financial growth more efficiently.
                        </p>
                    </div>
                </Fragment>
        },
        {
            name: "Accessibility",
            content: <h3 className='content-title'>No data</h3>
        },
        {
            name: "Security",
            content: <h3 className='content-title'>No data</h3>
        },
        {
            name: "Accuracy",
            content: <h3 className='content-title'>No data</h3>
        },
        {
            name: "Scalability",
            content: <h3 className='content-title'>No data</h3>
        },
    ]

    const [active, setActive] = useState<number>(0)

    const handleCardClick = (index: number) => {
        setActive(index);
    };
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
                    {
                        data?.map((item, index) => (
                            <li
                                key={index}
                                className={`menu-item ${active === index ? "active" : ""}`}
                                onClick={() => handleCardClick(index)}
                            >
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
                <div className="menu-content">
                    {data[active].content}
                </div>
            </div>
        </>

    )
}

export default Benefit
