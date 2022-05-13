import React, {Component} from 'react';
class R025_SetState extends Component{
  constructor (props){
    super(props);
    this.state ={
      StateString : 'react',
    }
  }
  stateChange = (flag) =>{
    if(flag === 'direct') this.state.StateString = '리액트';
    this.forceUpdate();
    if(flag === 'setstate') {this.setState({StateString : '리액2'});}
    console.log(this.state.StateString);
  }
  render(){
    return (
      <div> 
        <button onClick ={(e) => this.stateChange('direct', e)}>
          state 직접 변경
        </button>
        <button onClick ={(e) => this.stateChange('setstate', e)}>
          setState 로 변경
        </button><br/>
        [state 변경하기] StateString : {this.state.StateString}
      </div>
    )
  }
}
export default R025_SetState;


// class R025_SetState extends Component{
//   constructor (props){
//     super(props);
//     this.state ={
//       StateString : 'react',
//     }
//   }
//   stateChange = (flag) =>{
//     console.log('flag');
//     if(flag === 'setstate') this.setState({StateString : '리액2'});
//   }
//   render(){
//     return (
//       <div> 
//         <button onclick ={(e) => this.stateChange('setstate', e)}>
//           setState 로 변경
//         </button><br/>
//         [state 변경하기] StateString : {this.state.StateString}
//       </div>
//     )
//   }
// }
// export default R025_SetState;