import React, {Component} from 'react';
import $ from 'jquery';
class R016_Jquery extends Component{

  input_alert = (e) =>{
    var input_val = $('#inputId').val();
    alert(input_val);
  }
  render(){
    return (
      <div>
        <h2>[This Is Jquery]</h2>
        <input id ="inputId" name="inputName"/>
        <button id="buttonId" onclick={e => this.input_alert(e)}>Jquery Button</button>
      </div>`111111111111111111111111111111111111111111111111`
    )
  }
}
export default R016_Jquery;