import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
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
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Parallax
        style={{ height: "100%", width: "100%" }}
        className={classes.mainContainer}
        slowerScrollRate
      >
        <div className={classes.componentWrapper}>
          <HomePageContainer />
          <DetailContainer />
          <ActivitiesContainer />
          <RegistryContainer />
          <ContactContainer />
        </div>
      </Parallax>
    );
  }
}

export default withStyles(styles)(App);
