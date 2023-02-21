// 버튼 클릭시 전달받은 함수를 이벤트 핸들러로 설정
import React from 'react'

const UserCard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={props.onClickFunction}>Click Me!</button>
    </div>
  )
}

export default UserCard

// Class 형태로 표현한 UserCard
// import React, { component } from 'react'

// class UserCard extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.props.name}</p>
//         <p>{this.props.age}</p>
//       </div>
//     )
//   }
// }
// export default UserCard


// 함수형 컴포넌트로 표현한 UserCard
// import React from 'react'

// const UserCard = (props) => {
//   return(
//     <div>
//       <p>{props.name}</p>
//       <p>{props.age}</p>
//     </div>
//   )
// }

// export default UserCard