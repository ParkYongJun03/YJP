import React, {Component} from 'react';

class R010_Variable extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    var varName = 'react';
    console.log('varName1 : '+varName);
    var varName = '200'; // 'varname' is already defined no-redeclare
    console.log('varName2 : '+varName);

    let letName = 'react'
    console.log('letName1 : '+letName);
    // let letName = '200
    // Parsing error : Identifier 'letName '  has already been declared
    letName = 'react200';
    console.log('letName2 : '+letName);

    const constName = 'react';
    console.log('constName : ' + constName);
    //const const Name = 200
    // Parsing error : Identifier ' constName' has already been declared
    //constName = 'react200'
    //uncaught TypeErrof :Assignment to constant variable.
  }
  render(){
    return (
      <h2>[This Is ES6 Variable]</h2>
    )
  }
}

export default R010_Variable;