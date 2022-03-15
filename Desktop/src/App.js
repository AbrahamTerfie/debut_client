import React, { Component } from "react";
import HomeComponent from "./routes/home/HomeComponent";
import { Routes, Route } from "react-router";
import NavigationComponent from "./routes/Navigation/NavigationComponent";
import SignInComponent from "./routes/Signin/SignInComponent";
const Shop = () => {
  return <h1>Shop</h1>;
};
class App extends Component {
  render() {
    return (
      // <div classame="homepage">
      <Routes>
        <Route path="/" element={<NavigationComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignInComponent />} />
        </Route>
      </Routes>
      // </div>
    );
  }
}

export default App;
