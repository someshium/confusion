

import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

import {useState} from 'react';
import Header from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom'
import Contact from './ContactComponent';



function MainComponent() {
    const [selectedDishId, setSelectedDishId] = useState(null);
    const [comments, setComments] = useState(COMMENTS);
    const [promotions, setPromotion] = useState(PROMOTIONS);
    const [leaders, setLeaders] = useState(LEADERS);
    
    
    const HomePage = () => {
      return(
        <HomeComponent dish={DISHES.filter(dish => dish.featured)[0]}
        promotion={promotions.filter(promo => promo.featured)[0]}
        leader={leaders.filter(leader => leader.featured)[0]}

        />
      )
    } 
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component ={HomePage} />
        <Route exact path="/contact" component ={Contact} />
        <Route exact path="/menu" component ={() => <MenuComponent dishes={DISHES} />} />
        <Redirect to="/home" />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;



