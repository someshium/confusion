
import {Navbar, NavbarBrand} from 'reactstrap'
import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import {DISHES} from '../shared/dishes';
import {useState} from 'react';

function MainComponent() {
    const [selectedDishId, setSelectedDishId] = useState(null);
  return (
    <div>
      <Navbar dark color="primary" className="">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent  dishes={DISHES} onClickDish= {(dishId) => setSelectedDishId(dishId)}/>
      
      <DishDetailComponent  selectedDish={DISHES.filter(dish => dish.id === selectedDishId )[0]} />  
      
    </div>
  );
}

export default MainComponent;

