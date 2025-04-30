import { Pen, } from 'lucide-react'
import './Support.scss'
import { supportCardData } from '@/constants'

const Support = () => {
    return (
        <>
            <section className="support_cards">
                {
                    supportCardData.map((item, index) =>
                        <div className="card" key={index}>
                            <img src={item.img} className='icon' alt="" />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <button>{item.btn}</button>
                            {/* <a className='button' href='https://t.me/AIMLab_Support'>{item.btn}</a> */}
                        </div>
                    )
                }
            </section>

            <section className="contact_forms">
                <img src="/images/supbacg.svg" alt="bg-image" />
                <div className="contact-form">
                    <div className="form-card">
                        <div className="tags">
                            <Pen className='icon' />
                            GET IN TOUCH
                        </div>
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
            </section>
        </>

    )
}

export default Support
