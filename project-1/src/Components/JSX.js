import React from 'react'

// Component with JSX
// const Hello = () => { 
//     return ( 
//         <div> 
//             <h1>Hello React With JSX</h1>
//         </div> 
//     )
// }

// Component without JSX
// To without using JSX React library provides us a createElement Method to generate an HTML tag

// Syntax 
// React.createElement(
//      "A String specifies HTML tag to be rendered", 
//      "Some Additional properties", 
//      "Children for the HTML element"
// )

// const Hello = () => { 
//     return React.createElement(
//         'div', 
//         null, 
//         'Hello React with JSX'
//     )
// }

// createElement method can accept any number of elements as children

// const Hello = () => { 
//     return React.createElement(
//         'div', 
//         null, 
//         React.createElement(
//             'h1', 
//             null, 
//             'Hello React with JSX inside h1'
//         )
//     )
// }

// 2nd parameter - Some additional properties 
// Basically it is an object of key-value pair that will be applied to the element
// {key: value} -> {id: 'root'}

const Hello = () => { 
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement(
            'h1', 
            null, 
            'Hello React with JSX inside h1'
        )
    )
}

// Basically each JSX element is just syntactic sugar for calling React.createElement and that's why we have to import 'react' library when we use JSX

// Means on writing with JSX it is necessary to import 'react' library coz JSX converts it into the createElement Method which processed further

export default Hello