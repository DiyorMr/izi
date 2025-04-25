import './FeaturesCard.scss'
const FeaturesCard = ({
    title,
    desc,
    img
}) => {
    return (
        <>
            <div className="features_cards_item">
                <div className="features_cards_item_body_box">
                    <div className='features_cards_item_body_box_icon'></div>
                    <img src={img} className='icon' alt={title} />
                </div>
                <div className="features_cards_item_body">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default FeaturesCard
