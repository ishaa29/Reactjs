// import React from 'react'
// import './App.css'
// import Navbar from './Navbar'
// import Contact from './Contact'
// import About from './About'
// import Login from './Login'
// import Home from  './Home'

// // import Useefeect from './Useefeect'
// // import Data from './Data'
// // import Api from './Api'
// // import UseEffectFood from './UseEffectFood'

// import{Route,Routes }from 'react-router-dom'



// const App = () => {
//   return (
//     <div>
      
//       <Navbar/>
  
//         <Routes>
//           <Route path='/Contact' element={<Contact/>}/>
//           <Route path='/About' element={<About/>}/>
//           <Route path='/Login' element={<Login/>}/>
          
          
//         </Routes>
   
//       {/* // <UseEffectFood/> */}
//        {/* <Useefeect/> */}
//       // {/* <Data/> */}
//       {<Home/>}
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'
// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App

//usereducer

// import React, { useReducer } from "react";

// const App = () => {
//   // Define the initial state for both count and background color
//   const initialState = { count: 0, backgroundColor: "white" };

//   // Reducer to handle both count and background color
//   function reducer(state, action) {
//     switch (action.type) {
//       case "Green":
//         return { ...state, count: state.count + 1, backgroundColor: "green" };
//       case "Red":
//         return { ...state, count: state.count - 1, backgroundColor: "red" };
//       case "reset":
//         return { ...state, count: 0, backgroundColor: "blue" };
//       default:
//         return state;
//     }
//   }

 
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div style={{ backgroundColor: state.backgroundColor, height: "100vh", textAlign: "center", paddingTop: "20px" }}>
//       <h2>{state.count}</h2>

//       <button
//         onClick={() => dispatch({ type: "Green" })}
//         style={{ backgroundColor: "green", color: "white", padding: "10px", margin: "5px" }}
//       >
//         ++
//       </button>

    
//       <button
//         onClick={() => dispatch({ type: "Red" })}
//         style={{ backgroundColor: "red", color: "white", padding: "10px", margin: "5px" }}
//       >
//         --
//       </button>

//       {/* Reset Button */}
//       <button
//         onClick={() => dispatch({ type: "reset" })}
//         style={{ backgroundColor: "blue", color: "white", padding: "10px", margin: "5px" }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

// export default App;
import React, { useReducer } from 'react'

const App = () => {
function reducer(state, action) {
if (action.type === 'red') {
return { color: 'red' }
} else if (action.type === 'blue') {
return { color: 'blue' }
} else if (action.type === 'green') {
return { color: 'green' }
} else {
return state
}
}
let initialState = {color:'white'};
                                         
let [state, dispatch] = useReducer(reducer, initialState)
                                         
return (
<div style={{ backgroundColor: state.color, height: '100vh' }}>
{/* <h2>Background Color: {state.color}</h2> */}
<button onClick={() => dispatch({ type: 'red' })}>Red</button>
<button onClick={() => dispatch({ type: 'blue' })}>Blue</button>
<button onClick={() => dispatch({ type: 'green' })}>Green</button>
</div>
)
}
                                         
export default App
