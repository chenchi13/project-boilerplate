import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';
import { Button, Label, Navigation, Header, Main, Card} from 'storybook-project/dist'
// import { Navigation, Header, Main, Card} from 'C:/Users/oluji/Desktop/git-clone/storybook-boilerplate/dist'
import NavigationMenu from '../../components/NavigationMenu';
import FooterComponent from '../../components/Footer';
import { connect } from 'react-redux';
import styles from './index.css';
import { increase, setCardEvents } from './action'

//import beers from '../../../src/beers.json'

const beers = require('../App/db/beers');

class Home extends React.Component {

  constructor(props){
    super(props);

    this.printA = this.printA.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  addToFavorites(id) {
    const objCard = {
      id: id,
      type: 'FAVORITES',
    };

    this.props.setCardEvents(objCard);
  }

  printA(event){
    Console.log("hi");
  }

  render() {
    const cards = beers.map(beer =>
      <Card
        imgUrl={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}>
      </Card>);
    return (
      <div className="home">
        <Header>
          <h1>
            Duff Brewery
          </h1>
        </Header>

        <NavigationMenu active="1"/>

        <Main>{cards}</Main>
        <FooterComponent/>
        {/* <span>{this.props.number}</span>
        <button onClick={this.props.increase1}>+1</button>
        <button onClick={this.props.increase100}>+100</button> */}

        {/* <Button text='Press me!'></Button> */}

      </div>
    );
  }
}

const mapStateToProps = state => ({number: state.home.number});

const mapDispatchProps = dispatch => ({
  increase1: ()  => dispatch(increase(1)),
  increase10: ()  => dispatch(increase(10)),
  increase100: ()  => dispatch(increase(100)),
  setCardEvents: (objCard) => dispatch(setCardEvents(objCard))
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Home);
