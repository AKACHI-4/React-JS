import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //       name: 'Adarsh'
    //     }
    //     console.log('LifeCycleA constructor')
    // }

    static getDerivedStateFromProps( props, state ) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true 
    }

    getSnapshotBeforeUpdate (prevProps, prevState) { 
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    // componentDidMount() {
    //     console.log('LifeCycleA componentDidMount')
    // }

    changeState = () => {
        this.setState ({
            name: 'weGrow'
        })
    }

    render() {
        console.log('LifeCycleA render')
        return (   
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div> 
        ) 
    }


}

export default LifecycleA
