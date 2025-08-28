export const Character = ({name, ki, maxki, image, afilliation}) => {
    return (
        <div className="character">
            <img src={image} alt={name} className="image"/>
            <h2>{name}</h2>
            <p>Ki: {ki}</p>
            <p>Max ki: {maxki}</p>
            <p>Afilliation: {afilliation}</p>
        </div>
    )
}