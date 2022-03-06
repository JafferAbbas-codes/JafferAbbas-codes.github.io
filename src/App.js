import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Blog from "./components/Blogs/Blog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  const [page, setPage] = useState(
    localStorage.getItem("page") ? Number(localStorage.getItem("page")) : 0
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const navbarOnClick = (value) => {
    setPage(Number(value));
    localStorage.setItem("page", value);
  };

  return (
    <div>
      {/* <Router> */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar navbarOnClick={navbarOnClick} />
        {/* <ScrollToTop /> */}
        {page == 0 ? (
          <Home />
        ) : page == 1 ? (
          <About />
        ) : page == 2 ? (
          <Projects />
        ) : page == 3 ? (
          <Resume />
        ) : (
          <Blog />
        )}
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/blog" component={Blog} />
        </Switch> */}
        <Footer />
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
