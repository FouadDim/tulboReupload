import "./App.css";
import About from "./components/pg1/About";
import Footer from "./components/pg1/Footer";
import Nav from "./components/pg1/Nav";
import Error from "./components/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Seller from "./components/pg1/Seller";
import Conditions from "./components/pg1/Conditions";
import Privacy from "./components/pg1/Privacy";
import Refund from "./components/pg1/Refund";
import Contact from "./components/pg1/Contact";
import Homepage from "./components/Homepage";
import ReactGa from "react-ga";
import { useEffect } from "react";
import Account from "./components/auth/Account";
import NavAcc from "./components/auth/NavAcc";
import { AuthProvider } from "./components/auth/Auth";
import PrivateRoute from "./components/auth/PrivateRoute";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import AccPage from "./components/auth/AccPage";
import FAQ from "./components/pg1/FAQ";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-217787141-1");

    ReactGa.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path={"/"}>
              <Nav />
              <Homepage />
              <Footer />
            </Route>
            <Route exact path={"/blog/about"}>
              <Nav />
              <About />
              <Footer />
            </Route>
            <Route exact path="/blog/become-a-seller">
              <Nav />
              <Seller />
              <Footer />
            </Route>
            <Route exact path="/blog/terms">
              {" "}
              <Nav />
              <Conditions />
              <Footer />
            </Route>
            <Route exact path="/blog/privacy">
              <Nav />
              <Privacy />
              <Footer />
            </Route>
            <Route exact path="/blog/refund">
              <Nav />
              <Refund />
              <Footer />
            </Route>
            <Route exact path="/blog/contact">
              <Nav />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <PrivateRoute exact path="/account" component={AccPage} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
