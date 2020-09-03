import 'App.css';
import Filters from './Filters'
import CardHotel from './CardHotel'

class App extends React.Component {

    render(){
    return(
        
       <div >
        <Filters/>
        <CardHotel/>
       </div>
    );
 }
}


export default App;
 