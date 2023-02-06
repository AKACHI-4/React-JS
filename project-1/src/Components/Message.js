import React, { Component } from 'react'

// use of state

class Message extends Component {   

    // Creation and Intiallization of state Object
    constructor() {
        super() // This is required bcoz we extend react component class and a call has to be made to the base class constructor
        // state object
        this.state = { 
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        // To change the state of the component we need to use setState Method
        this.setState( {
            message: 'Thank you for subscribing'
        })
    }

    // So state is an object that is privatelly maintained inside a component 
    // it can influence what is rendered inside the browser 
    // Lastly, state can be changed within the component 

    render () { 
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = { () => this.changeMessage() }
                >Subscribe</button>
            </div>
        ) 
    }
}

export default Message