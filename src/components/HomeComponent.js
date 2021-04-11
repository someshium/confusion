import {Card,CardImg,CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

const RenderCard = ({item}) => {
return(
    
    <Card>
        <CardImg src= {item.image} alt= {item.name} />
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {
                item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null
            }
            <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
)
   
}

const HomeComponent = (props) => {
    return (
        <div className="container">
           <div className="row aligh-items-start">
               <div className="col-12 col-md m-1">
                   <RenderCard item={props.dish} />
               </div>
               <div className="col-12 col-md m-1">
                   <RenderCard item={props.promotion} />
               </div>
               <div className="col-12 col-md m-1">
                   <RenderCard item={props.leader} />
               </div>
           </div>
        </div>
    )
}

export default HomeComponent
