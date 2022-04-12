import React, {Component} from 'react';

class R015_Map extends Component{

  componentDidMount(){
    var Map_Arr = [1, 2, 3, 4];
    let Map_NewArr = Map_Arr.map(x => x);
    console.log(Map_NewArr);

    let Map_MultiArr = Map_Arr.map(x=> x*2);
    console.log(Map_MultiArr);

    var ObjArray = [{key:'react', value : '200'}, {key:'리액트', value:'TwoHundred'}];
    let Map_objArr = ObjArray.map((obj, index)=> {
      console.log((index+3)+JSON.stringify(obj));
      var Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });
    console.log(JSON.stringify(Map_objArr));
  }
  render(){
    return (
      <h2>[This Is Map]</h2>
    )
  }
}
export default R015_Map;