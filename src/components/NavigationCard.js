import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import images from '../utils/images';

import './styles/NavigationCard.less';

const NavigationCard = (props) => {
  const { id, title, subtitle, leftStat, rightStat, icon } = props.data;
  return (
    <div key={id} onClick={() => browserHistory.push(props.to)} className="navigation-card">
      <div className="navigation-card daily">
        <div className="navigation-card__image navigation-card__image--daily">
          <img src={images[icon]} alt={`${icon} em alusão aos gastos desse tipo`} />
        </div>
        <div className="navigation-card__unit-name">{title}</div>
        <div className="navigation-card__unit-description">
          {subtitle}
          <span>(Clique para ver mais detalhes)</span>
        </div>

        <div className="navigation-card__unit-stats navigation-card__unit-stats--daily clearfix">

          <div className="one-half border">
            <div className="stat">{leftStat.value}</div>
            <div className="stat-label">{leftStat.label}</div>
          </div>

          <div className="one-half">
            <div className="stat">{rightStat.value}</div>
            <div className="stat-label">{rightStat.label}</div>
          </div>

        </div>
      </div>
    </div>
  );
};

NavigationCard.propTypes = {
  to: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default NavigationCard;
