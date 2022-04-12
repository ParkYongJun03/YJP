import React, {Component} from 'react';

class ClassPrototype extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    var ExcntFnc = (function(){
      function ExCnt(num){
        this.number = num;
      }
      ExCnt.prototype.showNum = function(){
        console.log('1. react_' + this.number);
      };
      return ExCnt;
    }());

    var cnt = new ExcntFnc('200');
    cnt.showNum();
    //ES6 class
    class ExCntClass{
      constructor(num2){
        this.number2=num2;
      }
      showNum(){
        console.log(`2.react_${this.number2}`);
      }
    }
    var cnt2 = new ExCntClass('class');
    cnt2.showNum();
  };
  render(){
    return (
      <h2>[This Is ES6 Class]</h2>
    )
  }
}

export default ClassPrototype;