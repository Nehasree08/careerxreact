import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App16 from './App16';
import App17 from './App17';
// import App3 from "./App3"
// import App5 from "./App5"
// import Login from './Login';
// import App6 from './App6';
// import Main1 from './Main1';

const sqrfunction = (n) =>{
    return n* n;
}




const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App5 name="john" />);  
// root.render(<Login flag={true} />);
// root.render(<App16 val={5} fn={sqrfunction}/>);
// root.render(<Main1 flag={false}/>);
// root.render(<App11 flag={true}/>)
// root.render(<App14 marks={[34, 56, 76]}/>);
root.render(
<>
<App16 val={5} fn={sqrfunction}/> 
{/* sending call back function to the child component */}
<App17 val={8} fn={sqrfunction}/>
</>
);