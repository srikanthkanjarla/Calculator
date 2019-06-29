import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Display from './Display';
import Key from './Key';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userInput:'',
      expression:'',             
      result:'0',
    }
    this.handleClick = this.handleClick.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.deleteLastDigit = this.deleteLastDigit.bind(this);
  }
  
  clearDisplay(){
    this.setState({
      result:'0'
    })
  }
  
    //delete last character on bakcspace key
    deleteLastDigit(){
      if(this.state.result !== ''){
        if(this.state.result.length === 1 && this.state.result !== '0'){
        this.clearDisplay();
        console.log('clear display');
        }else if(this.state.result.length >= 1 && this.state.result !== '0'){
          this.setState((state)=>({
            result:state.result.slice(0,-1),
          }))
          console.log('remove last char');
        }
      }
     }
  handleClick(event){
    let value = event.target.value;
    let digitKeys = ['0','1','2','3','4','5','6','7','8','9'];
    let operatorKeys = ['+','-','*','/','%','='];
    let periodKey=['.'];

    if(digitKeys.includes(value)){
      console.log('Hey I am a number');
    }

    if(operatorKeys.includes(value)){
      console.log('Hey I am an operator');
    }

    if(periodKey.includes(value)){
      console.log("hey I am period");
    }


    if(this.state.result === '0' && !operatorKeys.includes(value)){
      this.setState({
        result:value,
      }) 
    }

    if(this.state.result !== '0'){    
      this.setState((state)=>({
        result:state.result + value,
      }))
    } 
   }

 
  render() {
    const{classes}=this.props;
    const{result}=this.state;
    return (
      <div className={classes.app}>
      <div className={classes.container}>
      <Display result={result}/>
      <Key label={'C'} handleClick={this.clearDisplay}/>      
      <Key label={'%'} handleClick={this.handleClick}/>
      <Key label={'/'} handleClick={this.handleClick}/>
      <Key label={'←'} handleClick={this.deleteLastDigit}/>
      <Key label={7}   handleClick={this.handleClick}/>
      <Key label={8}   handleClick={this.handleClick}/>
      <Key label={9}   handleClick={this.handleClick}/>
      <Key label={'*'} handleClick={this.handleClick}/>
      <Key label={4}   handleClick={this.handleClick}/>
      <Key label={5}   handleClick={this.handleClick}/>
      <Key label={6}   handleClick={this.handleClick}/>
      <Key label={'-'} handleClick={this.handleClick}/>
      <Key label={1}   handleClick={this.handleClick}/>
      <Key label={2}   handleClick={this.handleClick}/>
      <Key label={3}   handleClick={this.handleClick}/>
      <Key label={'+'} handleClick={this.handleClick}/>
      <Key label={'GT'}handleClick={this.handleClick}/>
      <Key label={0}   handleClick={this.handleClick}/>
      <Key label={'.'} handleClick={this.handleClick}/>
      <Key label={'='} handleClick={this.handleClick}/>
      </div>  
      </div>
    );
  }
}
const styles ={
  app:{
     height:'100vh',
     width:'100vw',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'#e8e9f3',
     margin:0,
   },
  container:{
    width:350,
    height:500,
    borderRadius:'12px',
    backgroundColor:'hsla(244,16.5%,17.8%,0.5)',
    display:'grid',
    gridTemplateColumns:'auto auto auto auto',
    justifyItems:'center',
    alignItems:'space-evenly',
    overflow:'none'
  }

  
}

export default injectSheet(styles)(App);
