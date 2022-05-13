import React, {Component} from 'react';
import {Alert, UncontrolledAlert} from 'reactstrap';

class R034_ReactstrapAlerts extends Component{
  render() {
    return (
      <div>
        <Alert color="danger">
          {/* color의 속성 : primary, secondary success danger warning info light dark */}
          Simple Alert [color : light]
        </Alert>
        <UncontrolledAlert color="warning">
          Uncontrolled Alert [color : warning]
        </UncontrolledAlert>
      </div>
    )
  }
}
export default R034_ReactstrapAlerts;