import React from 'react'
import PersonList from './PersonList'

function NameList() {

    const names = ['bruce', 'Clark', 'Diana']
    const persons = [
        { 
            id: 1, 
            name: 'Bruce', 
            age: 30, 
            skill: 'React'
        }, 
        { 
            id: 2, 
            name: 'Clark', 
            age: 25, 
            skill: 'Vue'
        }, 
        { 
            id: 3, 
            name: 'Diana', 
            age: 28, 
            skill: 'Angular'
        }
    ]
    
    const nameList = names.map((name, index) => <h2 key={index}>{index} - {name}</h2>)
    // const personList = persons.map(person => (
    //     <PersonList key={person.id} person={person} />
    // ))
    
    // Key props are not accessible in child Components 

    return <div>{nameList}</div>
    // return <div>{personList}</div>

//   return (
//     <div>
//         {/* Whenever we have to use JS code inside the JSX so we have to use curly braces */}
//         {
//             names.map(name => <h2>{name}</h2>) 
//         }
//     </div>
//   )
}

export default NameList
