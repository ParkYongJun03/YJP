import React, {Component} from 'react';

class R014_ForEach extends Component{

  componentDidMount(){
    var For_Arr = [1, 2, 3, 4];
    var New_For_Arr = [];
    for(var i=0;i<For_Arr.length; i++){
      New_For_Arr.push(For_Arr[i]);
    }
    console.log(New_For_Arr);
    var FE_Arr = [4, 3, 2, 1];
    var New_FE_Arr = [];
    FE_Arr.forEach((result) => {
      New_FE_Arr.push(result);
    });
    console.log(New_FE_Arr);
  }
  render(){
    return (
      <h2>[This Is ForEach]</h2>
    )
  }
}
export default R014_ForEach;