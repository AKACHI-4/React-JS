// Previously, we saw that how parent component pass down props to its children component 

// But What if a child component wanted to communicate with parent component 
// For this, we also use props 
// But this time, we pass-in a reference to a method as props to the child component  

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent () { 
        alert(`Namaste ${this.state.parentName}`)
    }
    // greetParent (childName) { 
    //     alert(`Namaste ${this.state.parentName} from ${childName}`)
    // }
    
  render() {
    return (
        <div>
            <ChildComponent greetHandler={this.greetParent} />
        </div>
    )
  }
}

export default ParentComponent
