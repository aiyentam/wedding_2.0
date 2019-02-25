import React, { Component } from "react";
import { withStyles, Button } from "@material-ui/core";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import { Parallax } from "react-scroll-parallax";
import HomePageContainer from "./containers/HomePageContainer/HomePageContainer";
import DetailContainer from "./containers/DetailsContainer/DetailContainer";
import ActivitiesContainer from "./containers/DetailsContainer/ActivitiesContainer/ActivitiesContainer";
import RegistryContainer from "./containers/RegistryContainer/RegistryContainer";
import ContactContainer from "./containers/ContactContainer/ContactContainer";

const styles = theme => ({
  mainContainer: {
    display: "flex",
    margin: 0,
    height: "100vh",
    overflowX: "hidden"
  },
  componentWrapper: {
    display: "flex",
    flexDirection: "column"
  },
  buttonContainer: {
    zIndex: 1,
    position: "fixed",
    bottom: 5,
    right: 25,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    background: "rgba(0,0,0, .05)",
    "&:hover": {
      background: "rgba(255,255,255, .7)"
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scrollPage = divName => {
    const element = document.getElementById(divName);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            style={{
              padding: 10,
              color: "#CF9D81"
            }}
            onClick={() => {
              this.scrollPage("homePageContainer");
            }}
          >
            <KeyboardArrowUp style={{ width: 30, height: 30 }} />
          </Button>
        </div>
        <Parallax
          style={{ height: "100%", width: "100%" }}
          className={classes.mainContainer}
          slowerScrollRate
        >
          <div className={classes.componentWrapper}>
            <HomePageContainer scrollPage={this.scrollPage} />
            <DetailContainer />
            <ActivitiesContainer />
            <RegistryContainer />
            <ContactContainer />
          </div>
        </Parallax>
      </div>
    );
  }
}

export default withStyles(styles)(App);
