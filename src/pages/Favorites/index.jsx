import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';
//import { Button, Label} from 'storybook-project/dist'
import { Navigation, Header, Main, Card } from 'C:/Users/oluji/Desktop/git-clone/storybook-boilerplate/dist'
import NavigationMenu from '../../components/NavigationMenu';
import FooterComponent from '../../components/Footer';
import styles from './index.css';

import { connect } from 'react-redux';
import { setCards, setCardEvents } from '../Home/action';

const beers = require('../App/db/beers');

class Favorites extends React.Component {

  constructor(props){
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    // this.removePopupBeer = this.removePopupBeer.bind(this);
    // this.setPopupBeer = this.setPopupBeer.bind(this);
  }

  // setPopupBeer(beer) {
  //   this.props.showPopupBeer(beer);
  // }
  // removePopupBeer() {
  //   this.props.removePopupBeer();
  // }

  addToFavorites(id) {
    const objCard = {
      id: id,
      type: 'FAVORITES'
    };
    this.props.setCardEvents(objCard);
  }

  addToCart(id) {
    const objCard = {
      id: id,
      type: 'CART'
    };
    this.props.setCardEvents(objCard);
  }

  render() {
    let cardevents = this.props.cardevents;
    const beersForDisplay = beers.filter((beer_el) => { 
      return cardevents.filter(function(cardevents_el){ return cardevents_el.id == beer_el.id; }).length > 0
    });

    const cards = beersForDisplay.map(beer =>
      <Card
        imgUrl={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        onClickFavorites={() =>{this.addToFavorites(beer.id)}}
        onClickCart={() =>{this.addToCart(beer.id)}}
        iconFavorites="/icons/star-empty.png"
        iconFavorites= { 
          this.props.cardevents
          .filter(e => e.id == beer.id && e.type == 'FAVORITES')
          .length > 0 === true ? "/icons/star-full.png" : "/icons/star-empty.png"}
          >
      </Card>);
    return (
      <div className={styles.home}>
        <div className={styles.header}>
          <Header><h1>Duff Brewery</h1></Header>
          <NavigationMenu active="2"/>
        </div>
        <div className={styles.mainContent}>
          <Main >{cards}</Main>
        </div>
        <div className={styles.sidebar}>
          <FooterComponent/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cardevents: state.home.cardevents,
  beers: state.home.beers
});

const mapDispatchProps = dispatch => ({
  setCards: beers => dispatch(setCards(beers)),
  setCardEvents: (objCard) => dispatch(setCardEvents(objCard)),
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Favorites);