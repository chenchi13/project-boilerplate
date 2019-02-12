import React from 'react';
import { Link } from 'react-router-dom';
//import { Navigation, Header, Main, Card} from 'storybook-project/dist'
import { Navigation, Header, Main, Card} from 'C:/Users/oluji/Desktop/git-clone/storybook-boilerplate/dist'
import NavigationMenu from '../../components/NavigationMenu';
import FooterComponent from '../../components/Footer';
import ModalComponent from '../../components/Modal';

import { connect } from 'react-redux';
import styles from './index.css';
import { addToFavorites, addToCart, showBeerDetails, hideBeerDetails } from './action'

const beers = require('../App/db/beers');

class Home extends React.Component {

  constructor(props){
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.showBeerDetails = this.showBeerDetails.bind(this);
    this.hideBeerDetails = this.hideBeerDetails.bind(this); 
  }

  showBeerDetails(beer) {
    this.props.showBeerDetails(beer);
  }

  hideBeerDetails() {
    this.props.hideBeerDetails();
  }

  addToFavorites(id) {
    const objBeer = {
      id: id,
      type: 'FAVORITES'
    };
    this.props.addToFavorites(objBeer);
  }

  addToCart(id) {
    const objBeer = {
      id: id,
      type: 'CART'
    };
    this.props.addToCart(objBeer);
  }

  render() {
    const cards = beers.map(beer =>
      <Card
        imgUrl={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        onClickFavorites={() =>{this.addToFavorites(beer.id)}}
        onClickCart={() =>{this.addToCart(beer.id)}}
        onClickDetails={() => this.showBeerDetails(beer)}
        iconFavorites="/icons/star-empty.png"
        iconFavorites= { 
          this.props.favorites
          .filter(e => e.id == beer.id 
            && e.type == 'FAVORITES')
          .length > 0 === true ? "/icons/star-full.png" : "/icons/star-empty.png"
        }
        iconCart="/icons/cart.png"
        iconDetails="/icons/info.png"
        >
      </Card>);

    const beerDetails = this.props.beerDetails;
    const modal = Object.keys(beerDetails).length !== 0 ?
      (<ModalComponent beerDetails={beerDetails}
        onClose={this.hideBeerDetails}
        addCart={this.addToCart}
        addFavorites={this.addToFavorites}/>)
      : undefined;

    return (
      <div className={styles.home}>
        <div className={styles.header}>
          <Header><h1>Duff Brewery</h1></Header>
          <NavigationMenu active="1"/>
        </div>
        <div className={styles.mainContent}>
          <Main >{cards}</Main>
        </div>
        <div className={styles.sidebar}>
          <FooterComponent/>
        </div>
        <div className={styles.popup}>
              {modal}
            </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.home.favorites,
  cart: state.home.cart,
  beerDetails: state.home.beerDetails
});

const mapDispatchProps = dispatch => ({
  addToFavorites: (objBeer) => dispatch(addToFavorites(objBeer)),
  addToCart: (objBeer) => dispatch(addToCart(objBeer)),
  showBeerDetails: beer => dispatch(showBeerDetails(beer)),
  hideBeerDetails: () => dispatch(hideBeerDetails())
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Home);
