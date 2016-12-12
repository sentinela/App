import React from 'react';
import './styles/Card.less';

const Card = (props) => {
  const classCSS = `${props.size} card`;
  return (
    <div className={classCSS}>
      <div className="card-header">
        <h4 className="title-card"><b>{props.title}</b></h4>
      </div>
      <div className="card-container">
        <p className="text-describe">{props.describe}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: React.PropTypes.string.isRequired,
  describe: React.PropTypes.string.isRequired,
  size: React.PropTypes.string.isRequired,
};

export default Card;
