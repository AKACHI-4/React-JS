import React from 'react'

// function Greet() { 
//     return <h1>Hello React</h1>
// }

// It is more convinent to define these component using arrow function 

// export const Greet = () => <h1>Hello React from Functional Components</h1>

// props 
// export const Greet = (props) => {
//     console.log(props)
//     return <h1>Hello {props.name} from {props.Area}</h1>
// }
// by using curly braces it treated as the object which is the feature of JSX

// export of component is necessary coz it helps to import these components into the other components 

// This is one way to export 
// export default Greet


// other way to export is name export after exporting by name U can not get able to change the component name in other components if you do so you will get error 
// To do this you just have to write export keyword before the component name


// use of props
// export const Greet = (props) => {
//     console.log(props)
//     return (
//         <h1>Hello {props.name} from {props.Area}</h1>
//         {props.children}    
//     )
// } // error coz JSX we have should contain only one wrapper element

// To Wrap both we have to use another element 
// export const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>
//                 Hello {props.name} from {props.Area}
//             </h1>
//             {props.children}
//         </div>
//     )
// }

// Destructuring props and state 

// Destructuring is an ES6 feature that makes it possible to unpack values from array and properties from object into distinct variable 

// In React, Destructuring props and state improves code readability 

// DeStructuring-1
// const Greet = ({name, Area}) => {
//     return (
//         <div>
//             <h1>
//                 Hello {name} from {Area}
//             </h1>
//         </div>
//     )
// }

// DeStructuring-2
const Greet = props => {
    const {name, Area} = props
    return (
        <div>
            <h1>
                Hello {name} from {Area}
            </h1>
        </div>
    )
}

// Syntax to Destructure Stae 

// const {state1, state2} = this.state
// const {state1, state2} = state

export default Greet 