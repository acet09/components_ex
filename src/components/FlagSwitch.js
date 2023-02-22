import React from 'react';

const SwitchFlag = (props) => {
  return <button onClick={props.handleUpdateFlag}>Swich Flag</button> 
  //이 버튼을 클릭했을 때 Flag값을 바꾸고 싶음
}

export default SwitchFlag