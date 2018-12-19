import React from 'react';
import { Footer, Icon } from 'storybook-boilerplate/dist';
import PropTypes from 'prop-types';

export default class FooterComponent extends React.Component {
  render() {
    return(
    <Footer>
      <Icon
        imgUrl="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-32.png"
        classImg="img"
        classTxt="text"
        text="Twitter"
        href="http://twitter.com"
      ></Icon>
      <Icon
        imgUrl="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-32.png"
        classImg="img"
        classTxt="text"
        text="Facebook"
        href="http://facebook.com"
      ></Icon>
      <Icon
        imgUrl="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-32.png"
        classImg="img"
        classTxt="text"
        text="Instagram"
        href="http://instagram.com"
      ></Icon>
   </Footer>)
  }
}

FooterComponent.propTypes = {
    children: PropTypes.node
};
