import './ValueCard.scss'
const ValueCard = ({
    title,
    desc,
    img
}) => {
    return (
        <>
            <div className="value_cards_item">
                <div className="value_cards_item_body_box">
                    <div className='value_cards_item_body_box_icon'></div>
                    <img src={img} className='icon' alt={title} />
                </div>
                <div className="value_cards_item_body">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default ValueCard
