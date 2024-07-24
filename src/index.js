import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App38 from './App38';
// import { AppContextProvider } from './context/appContext.js';


// const sqrfunction = (n) =>{
//     return n* n;
// }




const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App5 name="john" />);  
// root.render(<Login flag={true} />);
// root.render(<App16 val={5} fn={sqrfunction}/>);
// root.render(<Main1 flag={false}/>);
// root.render(<App13 flag={true}/>)
// root.render(<App14 marks={[34, 56, 76]}/>);
// root.render(
// <>
// <App16 val={5} fn={sqrfunction}/> 
// {/* sending call back function to the child component */}
// <App17 val={8} fn={sqrfunction}/>
// </>
// );
// root.render(<App26>Hello World</App26>); // sending jsx as a property i.e hello world , app26 will have access to this

// root.render( <AppContextProvider> <App /></AppContextProvider>);
root.render(<App38/>);