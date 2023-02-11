import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true // Button

      }
    }
    

  render() {

    // 4. Short Circuit operator ( most cases )
    // return (
    //     this.state.isLoggedIn && <div>Hare Krishna</div>
    // )

    // 3. Ternary conditional operator ( mostly used )
    // return (
    //     this.state.isLoggedIn ? (
    //     <div>Hare Krishna</div> 
    //     ) : (
    //     <div>Hare Rama</div>
    //     )
    // )

    // 2. Element Variable approach
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Hare Krishna</div>
    // } else { 
    //     message = <div>Hare Rama</div>
    // }
    // return <div>message</div>

    // 1. Using if/else statement
    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>Hare Krishna</div>
    //     )
    // } else {
    //     return ( 
    //         <div>Hare Rama</div>
    //     )
    // }

    // 0. Normal One
    // return (
    //     <div>
    //         <div>Hare Krishna</div> {/* isLoggedIn - true */}
    //         <div>Hare Rama</div> {/* isLoggedIn - false */}
    //     </div>
    // )
  }
}

export default UserGreeting
