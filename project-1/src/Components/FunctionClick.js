import React from 'react'

function FunctionClick() {
    function clickHandler () {
        console.log("Button Clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button> {/* Right */}

        { /* <button onClick={clickHandler()}>Click</button> Wrong */} 
        {/* If we put parantheses so In console Message get printed before click event, as we called the function earlier then event. Also now on clicking button nothing will going to be happen */}
        {/* This scenario become worse in class component when our click handler changes the state of component */}
        {/* The component constantly re-renders and we might see infinite no of message in the console */}


    </div>
  )
}
 
export default FunctionClick
