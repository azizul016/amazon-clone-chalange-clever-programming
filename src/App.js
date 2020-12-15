import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/pages/Login";
import { useEffect } from "react";
import { auth } from "./firebase.config/firebase.config";
import { useStateValue } from "./component/pages/StateProvider";
import Home from "./component/pages/Home";
import Header from "./component/pages/Header";
import Checkout from "./component/pages/Checkout";
import Payment from "./component/pages/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HZgZlJTe3qbqZDwAuyT5832sJXlwDNEO1szzknvgNr06qSbEFr2PT5rJfuuMRJpUG2mX32cFRsmMIaz1Ny7oGUS00BxV44QNE"
);

function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="*">
            <h2>Page not found</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
