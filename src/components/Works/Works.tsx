import './Works.scss'
const Works = () => {
    return (
        <div className="works_steps">
            <img src="/images/works-line.svg" alt="works-line" />
            <div className='works_steps_box container'>
                <div className="step">
                    <div className="icon">
                        <img src="/public/images/work1.svg" alt="Create Icon" />
                    </div>
                    <div className="content">
                        <div className="number">1</div>
                        <h3>Create</h3>
                        <p>Set savings targets and map your progress with reminders and tips from Penny to reach milestones.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="icon">
                        <img src="/public/images/work2.svg" alt="Upload Icon" />
                    </div>
                    <div className="content">
                        <div className="number">2</div>
                        <h3>Upload data</h3>
                        <p>Set savings targets and map your progress with reminders and tips from Penny to reach milestones.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="icon">
                        <img src="/public/images/work3.svg" alt="Test Icon" />
                    </div>
                    <div className="content">
                        <div className="number">3</div>
                        <h3>Test</h3>
                        <p>Set savings targets and map your progress with reminders and tips from Penny to reach milestones.</p>
                    </div>
                </div>

                <div className="step">
                    <div className="icon">
                        <img src="/public/images/work4.svg" alt="Deploy Icon" />
                    </div>
                    <div className="content">
                        <div className="number">4</div>
                        <h3>Deploy</h3>
                        <p>Set savings targets and map your progress with reminders and tips from Penny to reach milestones.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Works
