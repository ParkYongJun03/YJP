import React, {PureComponent} from 'react';
class R028_PureComponentClass extends PureComponent{
  constructor (props){
    super(props);
    this.state ={
      StateString : 'react',
      StateArrayObj : ['react', {react: '200'}],
    }
  }
  buttonClick = (type)=>{
    if (type === 'String'){
      this.setState({ StateString : 'react'})
    }
    else{
      this.setState({ StateArrayObj : ['react2', {react : '200'}]});
    }
  }
  render(){
    console.log('render() 실행');
    return (
      <div> 
        <button onClick ={(e) => this.buttonClick('String')}>
          문자열 변경
        </button>
        <button onClick ={(e) => this.buttonClick('ArrayObject')}>
          객체 배열 변경
        </button><br/>
        [state 변경하기] StateString : {this.state.StateString}
      </div>
    )
  }
}
export default R028_PureComponentClass;