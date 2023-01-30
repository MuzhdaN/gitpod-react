import React from "react";


// 1: way to display functions
// export default function FunctionalGreetings() {
//     return (
//         <h1>hello</h1>
//     );
// }

// 2: 
const FunctionalGreetings = (props) => {
    return (
        <h1>
            Hello, {props.name}! I see you are {props.age} years old; 
             {props.greeting} 

        </h1>   
    )
}

export default FunctionalGreetings;