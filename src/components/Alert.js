import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './styles/Alert.less';

const Alert = (props) => {
  const { success, text, strongText, ...others } = props;
  return (
    <div
      {...others}
      className={classNames('alert fade in alert-dismissable', { 'alert-danger': !success, 'alert-success': success })}
      onClick={props.onClick}
    >
      <span href="#" className="close" data-dismiss="alert" aria-label="close" title="close">×</span>
      <strong>{strongText}</strong> {text}
    </div>
  );
};

Alert.propTypes = {
  success: PropTypes.bool,
  text: PropTypes.string,
  strongText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Alert;
