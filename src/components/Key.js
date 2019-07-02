import React from 'react';
import injectSheet from 'react-jss';

const Key = props => {
  const { classes, label, value, handleClick, splBtn } = props;

  return (
    <button
      type="button"
      value={value}
      onClick={val => handleClick(val)}
      className={`${classes.btn} ${splBtn ? classes.btnHighlight : ''}`}
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
    // color:'#eeefff',
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
  },
};
export default injectSheet(styles)(Key);
