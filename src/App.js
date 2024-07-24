
// import "./App.css";
// import  App1 from "./App1"
// import  App2 from "./App2";

// function App(props) {
//   const flg=props.flag;
//   console.log(props.flag)
//   if(flg)
//     {
//       return <App1/>;
//     }
//     else{
//       return <App2/>
//     }
//   // return (
//   //   // <div className="App">
//   //   //   <h1>hello world</h1>
//   //   // </div>
//   //   <>
//   //     <App1/>
//   //     <hr></hr>
//   //     <App2 name="Cathy" age="12"/> // passing arguments
//   //   </>
//   // ); // childrens(App1 , App2)
// }

// export default App;




import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/product/Products.js";
import Cart from "./components/cart/Cart.js";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./components/user/Login.js";
import Footer from "./components/footer/Footer.js";
import Orders from "./components/order/Orders.js";
import Register from "./components/user/Register.js";


function App() {
  const PATH = process.env.REACT_APP_PATH;

  return (
    <div className="App">
      <Router>
           <Navbar />
        <hr></hr>
        <Routes>
          <Route path={`${PATH}/`} element={<Products />} />
          <Route path={`${PATH}/order`} element={<Orders />} />
          <Route path={`${PATH}/cart`} element={<Cart />} />
          <Route path={`${PATH}/login`} element={<Login />} />
          <Route path={`${PATH}/register`} element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;