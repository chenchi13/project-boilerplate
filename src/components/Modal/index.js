import React from 'react';
import { Popup, Button } from 'storybook-project/dist';
//import { Popup, Button} from 'C:/Users/oluji/Desktop/git-clone/storybook-boilerplate/dist'
import style from './index.css';

export default class ModalComponent extends React.Component {
  render() {
    const div =
        (
        <Popup
          onClose={this.props.onClose}
          tooltip={this.props.beerDetails.tagline}>

          <h2>{this.props.beerDetails.name}</h2>

          <img src={this.props.beerDetails.image_url} className={style.imageN} />

          <div className={style.maincontent}>
            <p>
              {this.props.beerDetails.description}
            </p>
            <p>
              {this.props.beerDetails.brewers_tips}
            </p>
          </div>

          <div className={style.buttonGroup}>
            <Button onClick={() => { this.props.addCart(this.props.beerDetails.id); }} text="Add to cart" />
            <Button onClick={() => { this.props.addFavorites(this.props.beerDetails.id); }} text="Add to favorites" />
          </div>
        </Popup>
        );
    return div;
  }
}
