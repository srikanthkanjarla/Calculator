import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const Display = props => {
  const { classes, result } = props;
  return (
    <div className={classes.display}>
      <p className={`${classes.result} ${result.length > 15 && classes.smallText}`}>{result}</p>
    </div>
  );
};
const styles = {
  display: {
    width: '95%',
    margin: '10px',
    height: 100,
    borderRadius: 10,
    boxShadow: '2px 2px 5px rgba(255,255,255,0.5),inset 0 0 8px rgba(255,255,255,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    gridColumn: '1 / 5',
  },
  result: {
    textAlign: 'right',
    width: '90%',
    fontSize: 40,
    backgroundColor: '#d7ffbf',
    padding: '8px 5px',
    borderRadius: 8,
    margin: 0,
  },
  smallText: {
    fontSize: 24,
    height: 47,
    lineHeight: 2,
  },
};
Display.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  result: PropTypes.string.isRequired,
};
export default injectSheet(styles)(Display);
