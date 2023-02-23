import React, { Component } from 'react'
import FocusInput from './FocusInput';

class Input extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    
    focusInput() {
      this.inputRef.current.focus(); 
    }

  render() {
    return (
      <div>
        <FocusInput />
        <input type="text" ref={this.inputRef}></input>
      </div>
    )
  }
}

export default Input
