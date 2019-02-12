import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Header, Main, Card} from 'storybook-project/dist'
//import { Navigation, Header, Main, Card } from 'C:/Users/oluji/Desktop/git-clone/storybook-boilerplate/dist'
import NavigationMenu from '../../components/NavigationMenu';
import FooterComponent from '../../components/Footer';
import styles from './index.css';

import { connect } from 'react-redux';
import { addToFavorites, addToCart } from '../Home/action'


const beers = require('../App/db/beers');

class Favorites extends React.Component {

  constructor(props){
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }


  addToFavorites(id) {
    const objBeer = {
      id: id,
      type: 'FAVORITES'
    };
    this.props.addToFavorites(objBeer);
  }

  addToCart(id) {
    const objCard = {
      id: id,
      type: 'CART'
    };
    this.props.addToCart(objCard);
  }

  render() {
    let favorites = this.props.favorites;
    const beersForDisplay = beers.filter((beer) => { 
      return favorites.filter(function(favorite){ return favorite.id == beer.id; }).length > 0
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
          this.props.favorites
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
  favorites: state.home.favorites,
  cart: state.home.cart
});

const mapDispatchProps = dispatch => ({
  addToFavorites: (objBeer) => dispatch(addToFavorites(objBeer)),
  addToCart: (objBeer) => dispatch(addToCart(objBeer)),
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Favorites);