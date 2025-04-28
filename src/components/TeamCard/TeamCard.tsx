import './TeamCard.scss'
const TeamCard = ({
    title,
    text,
    img
}) => {
    return (
        <>
            <div className="team-box">
               <img src={img} className='icon-box' alt={title} />
            

                <div className="">
                    <h1 className='team-box-title'>{title}</h1>
                    <p className='team-box-text'> {text}</p>
                </div>
            </div>
        </>
    )
}

export default TeamCard
