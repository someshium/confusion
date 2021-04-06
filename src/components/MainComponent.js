

import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import {DISHES} from '../shared/dishes';
import {useState} from 'react';
import Header from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom'


function MainComponent() {
    const [selectedDishId, setSelectedDishId] = useState(null);
    const HomePage = () => {
      return(
        <HomeComponent />
      )
    } 
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component ={HomePage} />
        <Route exact path="/menu" component ={() => <MenuComponent dishes={DISHES} />} />
        <Redirect to="/home" />
        
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;



