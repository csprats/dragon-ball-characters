export const Character = ({name, ki, image, afilliation, race}) => {
    return (
        <div className="character">
            <img src={image} alt={name} className="image"/>
            <h2>{name}</h2>
            <p>Ki: {ki}</p>
            <p>Affiliation: {afilliation}</p>
            <p>Race: {race}</p>
        </div>
    )
    //            <p>Afilliation: {afilliation}</p>
}