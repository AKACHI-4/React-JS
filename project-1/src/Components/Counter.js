import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) { 
        super(props)

        this.state = { 
            count: 0 
        }
    }

    // On not using setState Method() count value change in console but it will remain same into the UI
    // means UI is not re-rendering when state is changing
    // so We should not modify state directly 

    increment() {
        this.setState( { 
            count: this.state.count + 1
        }, () => { 
            console.log('Callback value', this.state.count) 
        })
        // console.log(this.state.count)
    }

    // if we check so we found intially count is 1 at UI but at console it is 0 
    // coz call to setState() is asynchronous 
    // means console.log(this.state.count) being called before to the setState()

    // But many of the times in the application we might want to execute some code only after the state has been updated 
    // To handle such a situation we can pass a callback function as 2nd parameter of setState() Method 
    
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    // As result here 
    // instead of value increasing 5 time value is increasing only 1 time and `Callback value : count` is calling five times 
    // why is this ? 
    // coz React may group multiple setState() calls into a single update for better performance 
    // In our scenario all the 5 setState() calls are done in one single go and updated value does not carry over different calls 

    // So whenever we have to set the state on the basis of previous state we use function for the purpose 

    increment() {
        this.setState( (prevState, props) => ({ 
            count: prevState.count + 1
            // count: prevState.count + props.addValue
        }), () => { 
            console.log('Callback value', this.state.count) 
        })
        // console.log(this.state.count)
    }

    // Console value are locked by the synchronous console.log() statement and can be ignored for now 

    decrement() {
        this.setState( { 
            count: this.state.count - 1
        }, () => { 
            console.log('Callback value', this.state.count) 
        })
        // console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                {/* <button onClick = { () => this.increment() }
                >increment</button> */}
                {/* <button onClick = { () => this.decrement() }
                >decrement</button> */}
                <button onClick = { () => this.incrementFive() }
                >increment by 5</button>
            </div>
        )
    }
}

export default Counter
