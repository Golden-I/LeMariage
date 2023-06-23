import React from "react";
import Navbar from "../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import ContactPage from "./contact";
import { Switch, Route, Router } from "../util/router";
import NotFoundPage from "./404";
import Footer from "../components/Footer";
import { ThemeProvider } from "../util/theme";
import logo from "../assets/logo.jpg";
import logoInverted from "../assets/logowhite.jpg";

function App(props) {
  return (
    <ThemeProvider>
      <Router>
        <>
          <Navbar color="default" logo={logo} logoInverted={logoInverted} />

          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            description="Le Mariage Boutique - Al Tireh Ramallah - Phone: 0593020373"
            copyright={`© ${new Date().getFullYear()} Le Mariage Boutique`}
            logo={logo}
            logoInverted={logoInverted}
            sticky={true}
          />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
