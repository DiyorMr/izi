import "./About.scss"
import btnimg from "../../../public/images/btn-img.svg"
import sectionimg from '../../../public/images/sectionimg.png'
import { teamCardData, valueCardData } from "@/index"
import TeamCard from "@/components/TeamCard/TeamCard"
import LeaderSlider from "@/components/LeaderSlider/LeaderSlider"
import ValueCard from "@/components/ValueCard/ValueCard"

const About = () => {
    return (
        <div>
            <div className='rheader'>
                <div className="rcontainer">
                    <div className="rheader-content">
                        <div className='rheader-box'><img className="rheader-img" src={btnimg} alt="" /> <h3 className='rheader-box-title'>SMART FINANCIAL ASSISTANT</h3></div>
                        <h2 className='rheader-title'>About IZI ish</h2>
                        <p className='rheader-text'>Penny is your friendly AI chatbot, simplifying budgeting,  saving, and investing with personalized support.</p>
                    </div>
                </div>

            </div>
            <div className="rhero">
                <div className="rcontainer">
                    <div className="rhero-content">
                        <ul className="rhero-list">
                            <li className="rhero-item">
                                <h3 className="rhero-title">$50m</h3>
                                <p className="rhero-text">Series A Raise</p>
                            </li>
                            <li className="rhero-item">
                                <h3 className="rhero-title">196</h3>
                                <p className="rhero-text">Countries</p>
                            </li>
                            <li className="rhero-item">
                                <h3 className="rhero-title">21k</h3>
                                <p className="rhero-text">Integrations daily</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rsection">
                <div className="rcontainer">
                    <div className="rsection-content">
                        <div className="rsection-left">
                            <button className="rsection-btn">Our Mission</button>
                            <h3 className="rsection-title">Empowering Innovation Through  Cutting-Edge Technology</h3>
                            <p className="rsection-text">At Fargo, we aim to bridge the gap between Artificial Intelligence and Web3, creating a seamless integration that empowers businesses and individuals alike. We are dedicated to developing solutions that are not only innovative but also practical, enabling a future where technology works in harmony to solve real-world problems.</p>
                        </div>
                        <div className="rsection-right">
                            <div className="rsection-box">
                                <img className="rsectionimg" src={sectionimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rcontainer">
                <LeaderSlider />
            </div>
            <div className="value">
                <div className="rcontainer">
                    <div className="value-box">
                        <button className="value-btn">Values</button>
                        <h2 className="value-title">Our Core Values</h2>
                        <p className="value-text">Guiding Principles that Shape Our Vision</p>
                        <div className='value_cards'>
                            {
                                valueCardData?.map((item, index) =>
                                    <ValueCard key={index} {...item} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="team">
                <div className="rcontainer">
                    <button className="team-btn">Team</button>
                    <h2 className="value-title">Meet the team</h2>
                    <p className="value-text">Guiding Principles that Shape Our Vision</p>
                    <div className='team-cards'>
                        {
                            teamCardData?.map((item, index) =>
                                <TeamCard key={index} {...item} />
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
