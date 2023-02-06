import React, { Component } from 'react'

// here Component is that private information which used to describe user interface 

// class Welcome extends Component {   
//     render () { 
//         return <h1>Hello React from Class Component</h1>
//     }
// }

// use of props 

// Unlike the functional component, In the class component the properties are available through this.props which is reserved in class components 

// class Welcome extends Component {   
//     render () { 
//         return <h1>Welcome {this.props.name} from {this.props.Area} </h1>
//     }
// }

// Destructuring props and state 

// DeStructuring-1

class Welcome extends Component {   
    render () { 
        const {name, Area} = this.props
        return <h1> Welcome {name} from {Area} </h1>
    }
}

// Syntax to Destructure Stae 

// const {state1, state2} = this.state

export default Welcome