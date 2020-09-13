
import '../component/style.css'


class Card extends React.Component {
    constructor(){
        super();
    }
    
    render() {
        const { photo, name, description, country, price, rooms, city } = this.props;
        return (
            <div className='card'>
                <div >
                <img className ='imagen' src={photo} alt={photo}></img>
                </div>
                <div className='int'>
                <span><h2>{name}</h2></span>
                <p>{description}</p>
                <div>
                <p>{city}, {country}</p>
                </div>
                <div>
                    <p>{rooms} Habitaciones</p> 
                    <p>{price}</p>
                </div>
                </div>
                <div>
                    <button className='bottom'>Reservar</button>
                </div>
            </div>
        )
    }
}
export default Card;
