import React from 'react'

// Only Responsible for rendering person html 

function PersonList({person, key}) {
    // key props help React to identify which item in a list added, removed or updated and place a crucial role in handling UI updates efficiently 
  return (
    <div>
        <h2>
            I am {person.name}. I am {person.age} years old. I know {person.skill}.
        </h2>
    </div>
  )
}

// a "key" is a special string attribute you need to include when creating lists of elements 
// Keys give the elements a stable identity 
// Keys help React identfiy which items have changed, are added, or we removed
// Help in efficient update of the user interface 

export default PersonList
