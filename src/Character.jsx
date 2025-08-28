export const Character = ({name, ki, image, afilliation, race}) => {
    return (
        <div className="character">
            <img src={image} alt={name} className="image"/>
            <h2>{name}</h2>
            <p>Ki: <b>{ki}</b></p>
            <p>Affiliation: <b>{afilliation}</b></p>
            <p>Race: <b>{race}</b></p>
        </div>
    )
    //            <p>Afilliation: {afilliation}</p>
}