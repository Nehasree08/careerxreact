
import "./App.css";
import  App1 from "./App1"
import  App2 from "./App2";

function App(props) {
  const flg=props.flag;
  console.log(props.flag)
  if(flg)
    {
      return <App1/>;
    }
    else{
      return <App2/>
    }
  // return (
  //   // <div className="App">
  //   //   <h1>hello world</h1>
  //   // </div>
  //   <>
  //     <App1/>
  //     <hr></hr>
  //     <App2 name="Cathy" age="12"/> // passing arguments
  //   </>
  // ); // childrens(App1 , App2)
}

export default App;
