import {useState} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


const MenuComponent = ({dishes}) => {

    const [selectedDish, setSelectedDish] = useState(null);
 





   
       const menu = dishes.map((dish)=> (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
            <Card tag="li" onClick={() => setSelectedDish(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>

    ))
    return (
        <div className="container">
            <div className="row">
                    {menu}   
            </div>
            <div className="row">
                {selectedDish && (<Card>
                <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                <CardTitle>{selectedDish.name}</CardTitle>
                <CardText>{selectedDish.description}</CardText>
                </CardBody>
                </Card>)}
            </div>

            
        </div>
    )
}

export default MenuComponent
