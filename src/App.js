import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/header";
import SessionPage from "./pages/session/SessionPage";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SessionPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
