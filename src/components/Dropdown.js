import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';

import './styles/Dropdown.less';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  handleClickOutside = () => this.setState({ isOpened: false });
  triggerMenu = () => this.setState({ isOpened: !this.state.isOpened });

  render() {
    const options = this.props.data;
    const { ...others } = this.props;

    return (
      <div {...others} className="dropdown-filter">
        {options && options.map(o => (
          <div
            key={o.id}
            onClick={this.triggerMenu}
            className={classNames('item-filter', {
              'collapse-filter': !this.state.isOpened,
              'item-selected': this.props.selected === o.id,
            })}
          >
            <span onClick={this.props.onSelect}>{o.name}</span>
          </div>
        ))}
      </div>
    );
  }
}

Dropdown.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.object.isRequired,
};

export default enhanceWithClickOutside(Dropdown);
