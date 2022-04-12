import React, {Component} from 'react';

class R013_ArrowFunction extends Component{
  constructor(props){
    super(props);
    //Es5에서 super(props)를 쓰지않으면 this를 쓰지 못한다.
    this.state = {
      arrowFuc: 'React207',
      num:'0303'
    };
  }

  componentDidMount(){
    Function1(1);
    this.Function2(1, 1);
    this.Function3(1,3);
    this.Function4();
    this.Function5(0,2,3);
    function Function1(num1){
      return console.log(num1+'. Es5 Function');
    }
  }
  Function2 = (num1, num2)=>{
    let num3 = num1+num2;
    console.log(num3+'. Arrow Function : '+this.state.arrowFuc);
  }
  Function3(){
    var this_bind = this;
    setTimeout(function(){
      console.log(this_bind.state.num+'. Es5 Callback Function noBind : ');
      //콜백 함수 내부에서는 컴포넌트에 this로 접근할 수 없다.
      console.log(this.state.arrowFuc);
    }, 100);
  }

  Function4(){
    setTimeout(function(){
      console.log('4. Es Callback Function Bind : '+this.state.arrowFuc);
    }.bind(this),100);
    //콜백 함수에 함수 밖의 this를 bind해주면 this를 컴포넌트로 사용할 수 있다.
  }
    Function5 = (num1, num2, num3)=>{
      const num4 = num1+num2+num3;
      setTimeout(() => {
        console.log(num4+'. Arrow Callback Function : '+this.state.arrowFuc);
      }, 100);
      //화살표 함수에서는 this를 bind해주지 않아도 this를 컴포넌트로 사용할 수 있다.
    }
  render(){
    return (
      <h2>[This Is ES6 Class]</h2>
    )
  }
}
export default R013_ArrowFunction;