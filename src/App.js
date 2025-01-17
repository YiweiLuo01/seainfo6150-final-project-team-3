import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// nav
// import MainNav from "./MainNav/MainNav";

// pages
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";
import CalendarPage from "./CalendarPage/CalendarPage";
import DegreePage from "./DegreePage/DegreePage";
import DegreesPage from "./DegreesPage/DegreesPage";
import EnrollPage from "./EnrollPage/EnrollPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import HomePage from "./HomePage/HomePage";
import SchoolsPage from "./SchoolsPage/SchoolsPage";
import ThankyouPage from"./ThankyouPage/ThankyouPage";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SignUpPage from "./SignUpPage/SignUpPage";

// data
import dates from "./data/calendar.json";
import schools from "./data/schools.json";
import degrees from "./data/degrees.json";


function App() {
  return (
    <div className="App">
      <Router>
        <header>
            <Header/>
          {/*This is a page header that will persist on every page*/}
          {/*<hr />*/}
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/schools"
              exact
              render={() => <SchoolsPage degrees={degrees} schools={schools} />}
            />
            <Route
              path="/degrees"
              exact
              render={() => <DegreesPage degrees={degrees} schools={schools} />}
            />
            <Route
              path="/degree/:slug"
              exact
              render={({ match }) => (
                <DegreePage
                  degree={
                    degrees.filter(
                      degree => degree.slug === match.params.slug
                    )[0]
                  }
                  schools={schools}
                />
              )}
            />
            <Route
              path="/enroll/:slug"
              exact
              render={({ match }) => (
                <EnrollPage
                  degree={
                    degrees.filter(
                      degree => degree.slug === match.params.slug
                    )[0]
                  }
                  degrees={degrees}
                />
              )}
            />
            <Route
              path="/calendar"
              exact
              render={() => <CalendarPage dates={dates} />}
            />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/thankyou" exact component={ThankyouPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/signup"
                   exact
                   render={() => <SignUpPage degrees={degrees} />}
            />
            <Route component={ErrorPage} />
          </Switch>
        </main>
        <footer>
          {/*<hr />*/}
          {/*This is a page footer that will persist on every page*/}
          <Footer/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
