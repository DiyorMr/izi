import './Faq.scss'
import { modalData } from '@/constants'

const Faq = () => {
    return (
        <div className="faq_info">
            <div className="collapse_box">
                {modalData.map((item) => (
                    <div className="tab" key={item.id}>
                        <input type="radio" name="accordion-2" id={item.id} />
                        <label htmlFor={item.id} className="tab__label">
                            {item.title}
                        </label>
                        <div className="tab__content">
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq
