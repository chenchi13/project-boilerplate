import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';
import { Button, Label} from 'storybook-project/dist'
import { Navigation, Header, Footer, Main, Card} from 'C:/Users/oluji/Desktop/git-clone/storybook-boilerplate/dist'
import NavigationMenu from '../../components/NavigationMenu';
import { connect } from 'react-redux';
import styles from './index.css';
import { increase } from './action'

//import beers from '../../../src/beers.json'

const beers = require('../App/db/beers');

class Home extends React.Component {

  constructor(props){
    super(props);

    this.printA = this.printA.bind(this);
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
  increase100: ()  => dispatch(increase(100))
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Home);
