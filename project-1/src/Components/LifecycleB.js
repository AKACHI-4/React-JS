import React, { Component } from 'react'


export class LifecycleB extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //       name: 'Adarsh'
    //     }
    //     console.log('LifeCycleB constructor')
    // }

    static getDerivedStateFromProps( props, state ) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate')
        return true 
    }

    getSnapshotBeforeUpdate (prevProps, prevState) { 
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null 
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }

    // componentDidMount() {
    //     console.log('LifeCycleB componentDidMount')
    // }

    render() {
        console.log('LifeCycleB render')
        return <div>LifeCycleB</div>
    }


}

export default LifecycleB
