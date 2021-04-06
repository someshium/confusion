

import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import {DISHES} from '../shared/dishes';
import {useState} from 'react';
import Header from './HeaderComponent';
import FooterComponent from './FooterComponent';


function MainComponent() {
    const [selectedDishId, setSelectedDishId] = useState(null);
  return (
    <div>
      <Header />
      <MenuComponent  dishes={DISHES} onClickDish= {(dishId) => setSelectedDishId(dishId)}/>
      
      <DishDetailComponent  selectedDish={DISHES.filter(dish => dish.id === selectedDishId )[0]} />  
      <FooterComponent />
    </div>
  );
}

export default MainComponent;

