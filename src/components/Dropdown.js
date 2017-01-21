import React, { Component, PropTypes } from 'react';
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

// Dropdown.propTypes = {
//   userName: PropTypes.string,
// };

export default enhanceWithClickOutside(Dropdown);

// var $dropdown = $('.dropdown-filter');
// var $cidadeSelecionada = $('#cidadeSelecionada');
// var item = $('.item-filter');
//
// item.on('click', function(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   var antigaCidade = $cidadeSelecionada.html();
//   $cidadeSelecionada.html(e.target.textContent);
//   $(e.target).html(antigaCidade);
//   initializeCharts();
//   item.toggleClass('collapse-filter');
//   if ($dropdown.hasClass('dropped-filter')) {
//     $dropdown.toggleClass('dropped-filter');
//   } else {
//     setTimeout(function() {
//       $dropdown.toggleClass('dropped-filter');
//     }, 150);
//   }
// })
