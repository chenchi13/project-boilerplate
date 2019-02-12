import React from 'react';
import { Navigation } from 'storybook-project/dist';
//import {Navigation} from 'C:/Users/oluji/Desktop/git-clone/storybook-boilerplate/dist';
import PropTypes from 'prop-types';

export default class NavigationMenu extends React.Component {
  render() {
    const links = [
        {
          id: 1,
          content: <a href="/">Početna</a>,
          active: this.props.active == 1,
        },
        {
          id: 2,
          content: <a href="/favorites">Omiljene pive</a>,
          active: this.props.active == 2,
        },
        {
          id: 3,
          content: <a href="/about">O nama</a>,
          active: this.props.active == 3,
        },
        {
            id: 4,
            content: <a href="/cart">Košarica</a>,
            active: this.props.active == 4,
          }
      ];
    const div =
          (
            <Navigation links={links} />
          );
    return div;
  }
}

NavigationMenu.propTypes = {
  active: PropTypes.integer,
};
