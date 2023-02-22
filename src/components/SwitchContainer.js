import React, { Component} from 'react';

import FlagSwitch from './FlagSwitch';
import ViewFlagValue from './ViewFlagValue';

class SwitchContainer extends Component {

  constructor() {
    super();
    this.handleUpdateFlag = this.handleUpdateFlag.bind(this); //this참조를 위해 bind해둠 
    this.state = {
      flag: false
    }
  }
  handleUpdateFlag() { //state 변경을 위한 이벤트 핸들러 만들기
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    return (
      <div>
        <FlagSwitch handleUpdateFlag = {this.handleUpdateFlag}></FlagSwitch>
        <ViewFlagValue flag={this.state.flag}></ViewFlagValue>
      </div>
    )
  }

}

export default SwitchContainer