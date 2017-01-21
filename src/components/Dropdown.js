import React, { Component } from 'react';
import classNames from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';

import './styles/Dropdown.less';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      mockOptions: [{
        name: 'Cachoeirinha',
        selected: false,
      }, {
        name: 'Porto Alegre',
        selected: false,
      }, {
        name: 'Gravataí',
        selected: true,
      }],
    };
  }

  handleClickOutside = () => this.setState({ isOpened: false });
  triggerMenu = () => this.setState({ isOpened: !this.state.isOpened });
  switchCity = e => console.log('switchCity', e.target.textContent);

  render() {
    const options = this.state.mockOptions;
    const { ...others } = this.props;
    return (
      <div {...others} className="dropdown-filter">
        {options && options.map((o, k) => (
          <div
            key={k}
            onClick={this.triggerMenu}
            className={classNames('item-filter', {
              'collapse-filter': !this.state.isOpened,
              'item-selected': o.selected,
            })}
          >
            <span onClick={this.switchCity}>{o.name}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default enhanceWithClickOutside(Dropdown);
