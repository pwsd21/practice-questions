//1. create a context

import React, { createContext, useState, useContext } from "react";
import { appendErrors } from "react-hook-form";

// Create a Context
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello, World!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };

// 2. Wrap app in provider
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { MyProvider } from './MyContext';

// ReactDOM.render(
//   <MyProvider>
//     <App />
//   </MyProvider>,
//   document.getElementById('root')
// );

// 3. consume context in app
// import React, { useContext } from 'react';
// import { MyContext } from './MyContext';

// const MyComponent = () => {
//   const { value, setValue } = useContext(MyContext);

//   return (
//     <div>
//       <p>{value}</p>
//       <button onClick={() => setValue('Hello, Context API!')}>Change Value</button>
//     </div>
//   );
// };

// export default MyComponent;

// 4. use that component in appendErrorsimport React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return (
//     <div>
//       <h1>Context API Example</h1>
//       <MyComponent />
//     </div>
//   );
// };

// export default App;
