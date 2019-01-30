import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Parallax } from "react-scroll-parallax";
import HomePageContainer from "./containers/HomePageContainer/HomePageContainer";
import DetailContainer from "./containers/DetailsContainer/DetailContainer";
import ActivitiesContainer from "./containers/DetailsContainer/ActivitiesContainer/ActivitiesContainer";

const styles = theme => ({
  mainContainer: {
    display: "flex",
    margin: 0,
    height: "100vh",
    overflowX: "hidden"
  },
  componentWrapper: {
    width: "100%",
    height: "100%",
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
        </div>
        {/* <Route exact path="/" component={HomePageContainer} />
        <Route path="/details" component={DetailContainer} /> */}
        {/* <Route path="/hotel/" component={HotelContainer} />
        <Route path="/sightsee/" component={SightseeContainer} />
        <Route path="/itinerary/" component={ItineraryContainer} />
        <Route path="/menu/" component={FoodContainer} />
        <Route path="/registry/" component={RegistryContainer} />
        <Route path="/contantus/" component={ContactContainer} /> */}
      </Parallax>
    );
  }
}

export default withStyles(styles)(App);
