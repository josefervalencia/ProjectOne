import Card from './Card';
import {hotelsData} from '../../scripts/data';


class CardHotel extends React.Component{
    constructor(){
        super();
    }

    render(){
       const data=hotelsData.map((hotel)=>{
           return <Card key={hotel.slug} {...hotel}/>
       });
        return(
            <div>
                {data}   
                   
            </div>
        );
    }
}
export default CardHotel;