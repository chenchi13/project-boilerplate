import React from 'react';
import { Navigation } from 'storybook-project/dist';
import PropTypes from 'prop-types';

export default class NavigationMenu extends React.Component {
  render() {
    const links = [
        {
          id: 1,
          content: <a href="/index">Početna</a>,
          active: true,
        },
        {
          id: 2,
          content: <a href="/favorites">Omiljene pive</a>,
        },
        {
          id: 3,
          content: <a href="/about">O nama</a>,
        },
        {
            id: 4,
            content: <a href="/cart">Košarica</a>,
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
