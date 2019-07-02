import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Display from './Display';
import Key from './Key';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      operator: null,
      allowDot: true,
      firstValue: '',
      secondValue: '',
      nextValue: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { displayValue, operator, allowDot, firstValue, secondValue, nextValue } = this.state;
    const { value } = event.target;
    const operatorList = ['+', '-', '*', '/', '%'];
    const isEndWithDot = displayValue[displayValue.length - 1] === '.';
    const isEndWithOperator = operatorList.includes(displayValue[displayValue.length - 1]);

    switch (value) {
      case 'clear':
        this.setState({
          displayValue: '0',
          allowDot: true,
          firstValue: '',
          secondValue: '',
          operator: null,
          nextValue: false,
        });
        break;

      case 'del':
        if (secondValue) {
          this.setState({
            secondValue: secondValue.length === 1 ? '' : secondValue.slice(0, -1),
          });
        } else if (operator) {
          this.setState({
            operator: null,
          });
        } else if (firstValue) {
          this.setState({
            firstValue: firstValue.length === 1 ? '' : firstValue.slice(0, -1),
          });
        }

        if (displayValue !== '' && displayValue !== '0') {
          this.setState({
            displayValue: displayValue.length === 1 ? '0' : displayValue.slice(0, -1),
            allowDot: !isEndWithDot,
          });
        }

        break;

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          displayValue: displayValue === '0' ? value : displayValue + value,
        });
        if (!nextValue) {
          this.setState({
            firstValue: firstValue + value,
          });
        } else {
          this.setState({
            secondValue: secondValue + value,
          });
        }
        break;

      case '+':
      case '-':
      case '/':
      case '*':
      case '%':
        this.setState({
          operator: value,
          allowDot: true,
          nextValue: true,
          displayValue: (isEndWithOperator || isEndWithDot ? displayValue.slice(0, -1) : displayValue) + value,
        });
        if (nextValue && secondValue && secondValue !== '.') {
          // eslint-disable-next-line no-eval
          const result = eval(`${firstValue}${operator}${secondValue}`);
          const formatResult = (result % 1 === 0 ? result : result.toFixed(3)).toString();
          this.setState({
            displayValue: formatResult + value,
            firstValue: formatResult,
            secondValue: '',
            operator: value,
          });
        }
        break;

      case '.':
        this.setState({
          allowDot: false,
          displayValue: allowDot ? displayValue + value : displayValue,
        });

        if (!nextValue) {
          this.setState({
            firstValue: allowDot ? firstValue + value : firstValue,
          });
        } else {
          this.setState({
            secondValue: allowDot ? secondValue + value : secondValue,
          });
        }
        break;

      case '=':
        if (nextValue && secondValue && secondValue !== '.') {
          // eslint-disable-next-line no-eval
          const result = eval(`${firstValue}${operator}${secondValue}`);
          const formatResult = (result % 1 === 0 ? result : result.toFixed(3)).toString();
          this.setState({
            displayValue: formatResult,
            firstValue: formatResult,
            secondValue: '',
            nextValue: false,
            operator: null,
            allowDot: result % 1 === 0,
          });
        }

        break;
      default:
    }
  }

  render() {
    const { classes } = this.props;
    const { displayValue } = this.state;
    return (
      <div className={classes.app}>
        <div className={classes.container}>
          <Display result={displayValue} />
          <Key value="clear" label="C" handleClick={this.handleClick} splBtn />
          <Key value="%" label="%" handleClick={this.handleClick} />
          <Key value="/" label="&divide;" handleClick={this.handleClick} />
          <Key value="del" label="&laquo;" handleClick={this.handleClick} splBtn />
          <Key value={7} label={7} handleClick={this.handleClick} />
          <Key value={8} label={8} handleClick={this.handleClick} />
          <Key value={9} label={9} handleClick={this.handleClick} />
          <Key value="*" label="&times;" handleClick={this.handleClick} />
          <Key value={4} label={4} handleClick={this.handleClick} />
          <Key value={5} label={5} handleClick={this.handleClick} />
          <Key value={6} label={6} handleClick={this.handleClick} />
          <Key value="-" label="-" handleClick={this.handleClick} />
          <Key value={1} label={1} handleClick={this.handleClick} />
          <Key value={2} label={2} handleClick={this.handleClick} />
          <Key value={3} label={3} handleClick={this.handleClick} />
          <Key value="+" label="+" handleClick={this.handleClick} />
          <Key value="gt" label="GT" handleClick={this.handleClick} />
          <Key value={0} label={0} handleClick={this.handleClick} />
          <Key value="." label="." handleClick={this.handleClick} />
          <Key value="=" label="=" handleClick={this.handleClick} splBtn/>
        </div>
      </div>
    );
  }
}
const styles = {
  app: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e9f3',
    margin: 0,
  },
  container: {
    width: 350,
    height: 500,
    borderRadius: '12px',
    backgroundColor: 'hsla(244,16.5%,17.8%,0.5)',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    justifyItems: 'center',
    alignItems: 'space-evenly',
    overflow: 'none',
  },
};

export default injectSheet(styles)(App);
