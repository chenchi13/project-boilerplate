import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';
//import { Button, Label} from 'storybook-project/dist'
import styles from './index.css';

export default class Cart extends React.Component {
  render() {
    return (
      <div>
        This is your cart<br/>
        <Link href="home" to="/">home</Link>
      </div>
    );
  }
}
