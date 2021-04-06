
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



const MenuComponent = ({dishes,onClickDish}) => {

       const menu = dishes.map((dish)=> (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
            <Card tag="li" onClick={() => onClickDish(dish.id)}>
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
        </div>
    )
}

export default MenuComponent
