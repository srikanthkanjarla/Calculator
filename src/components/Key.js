import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const Key = props => {
  const { classes, label, value, handleClick, splBtn, dblBtn } = props;

  return (
    <button
      type="button"
      value={value}
      onClick={val => handleClick(val)}
      className={`${classes.btn} ${splBtn && classes.btnHighlight} ${dblBtn && classes.dblBtn}`}
    >
      {label}
    </button>
  );
};

const styles = {
  btn: {
    height: 65,
    width: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    borderRadius: 8,
    outline: 'none',
    color: '#f0f8ff',
    fontSize: 25,
    fontWeight: 600,
    boxShadow:
      '2px 2px 5px rgba(1,23,47,0.1), inset 2px 2px 2px rgba(1,23,47,.5), inset -5px -5px 8px rgba(1,23,47,.7)',
    background: 'rgba(1,23,47,0.6)',
    '&:active': {
      boxShadow: '1px 1px 1px rgba(0,0,0,0.2)',
    },
  },
  btnHighlight: {
    color: '#fff42f',
    fontWeight: 'bold',
  },
  dblBtn: {
    gridColumn: '3/5',
    width: 130,
  },
};

Key.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
  splBtn: PropTypes.bool,
  dblBtn: PropTypes.bool,
};

Key.defaultProps = {
  splBtn: false,
  dblBtn: false,
};
export default injectSheet(styles)(Key);
