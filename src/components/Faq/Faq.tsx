import { BadgeHelp } from 'lucide-react'
import './Faq.scss'
import Section from './section'
import { modalData } from '@/constants'

const Faq = () => {
    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq">
                    <div className="faq_tag">
                        <BadgeHelp />
                        FAQ
                    </div>
                    <h1>Got Questions?<br />We've Got Answers!</h1>
                </div>

                <div className="faq_info">
                    <div className="collapse_box">
                        {modalData.map((item) => (
                            <Section title={item.title} key={item.title}>
                                {item.text}
                            </Section>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
