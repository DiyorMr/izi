import { BadgeHelp } from 'lucide-react'
import './Faq.scss'
import { modalData } from './section/data'
import Section from './section'
const Faq = () => {
    return (
        <div className='container'>
            <section className="faq-section">
                <div className="tag">
                    <BadgeHelp />
                    FAQ
                </div>
                <h1>Got Questions?<br />We've Got Answers!</h1>
                <div className="faq">
                    <div className="collapse_box" >
                        {
                            modalData.map((item, index) =>
                                <Section title={item.title} key={index}>
                                    {item.text}
                                </Section>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq
