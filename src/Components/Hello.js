import React from "react";

// Writing the Hello React component with using JSX
// const Hello = () => { 
//     return (
//         <div>
//             <h1>Hello React</h1>
//         </div>
//     )
// }

// Re-Writing the Hello React component without using JSX
const Hello = () => { 

    // Syntax - React.createElement( HTML element tag, optional properties, children for HTML element tag o r repeatedly function itself )

    // 1. HTML element tag - like div, h1
    // 2. optional properties - an Object of { key, value } pairs - to assign different attributes like id, class etc .. 
    


    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyclass'}, 
        React.createElement('h1', null, 'Hello React')
    )
}


export default Hello 
