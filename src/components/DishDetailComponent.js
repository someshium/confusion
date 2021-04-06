import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const DishDetailComponent = ({selectedDish}) => {
    const commentArray= selectedDish && (selectedDish.comments);
    return (
        <div className="container">
        <div className="row">
        <div className="col-12 col-md-5 m-1">
                {selectedDish && (<Card>
                <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                <CardTitle>{selectedDish.name}</CardTitle>
                <CardText>{selectedDish.description}</CardText>
                </CardBody>
                </Card>
                
                )}
        </div>
        { selectedDish &&  <div className="col-12 col-md-5 m-1">
               <h4>Comments</h4>
               <ul className = "list-unstyled">
                {
                    commentArray.map( e => (
                        <li key={e.id}>
                            <p>{e.comment}</p>
                            <p>-- {e.author} {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(e.date)))}</p>
                        </li>
                    ))
                }
         
                </ul>
        </div>}
        </div>
        </div>


        
    )
}

export default DishDetailComponent
