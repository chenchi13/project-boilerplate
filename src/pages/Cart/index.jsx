import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';
//import { Button, Label} from 'storybook-project/dist'
import styles from './index.css';
import { Navigation, Header, Main, Card } from 'C:/Users/oluji/Desktop/git-clone/storybook-boilerplate/dist'
import NavigationMenu from '../../components/NavigationMenu';
import FooterComponent from '../../components/Footer';


export default class Cart extends React.Component {
  render() {
    return (
      <div className={styles.home}>
      <div className={styles.header}>
        <Header><h1>Duff Brewery</h1></Header>
        <NavigationMenu active="4"/>
      </div>
      <div className={styles.mainContent}>
        <div>
          My cart component
        </div>
      </div>
      <div className={styles.sidebar}>
        <FooterComponent/>
      </div>
    </div>
    );
  }
}
