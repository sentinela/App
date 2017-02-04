import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import images from '../utils/images';

import './styles/NavigationCard.less';

const NavigationCard = (props) => {
  const { title, subtitle, leftStat, rightStat } = props.data;
  return (
    <div onClick={() => browserHistory.push(props.to)} className="navigation-card">
      <div className="navigation-card daily">
        <div className="navigation-card__image navigation-card__image--daily">
          <img src={images.airplane} alt="Um avião em alusão as diárias" />
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
