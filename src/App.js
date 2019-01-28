import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import HomePageContainer from "./containers/HomePageContainer/HomePageContainer";
import DetailContainer from "./containers/DetailsContainer/DetailContainer";
// import HotelContainer from "./containers/DetailsContainer/HotelContainer/HotelContainer";
// import SightseeContainer from "./containers/DetailsContainer/SightseeContainer/SightseeContainer";
// import ItineraryContainer from "./containers/DetailsContainer/VenueContainer/ItineraryContainer/ItineraryContainer";
// import FoodContainer from "./containers/DetailsContainer/VenueContainer/FoodMenuContainer/FoodMenuContainer";
// import RegistryContainer from "./containers/RegistryContainer/RegistryContainer";
// import ContactContainer from "./containers/ContactContainer/ContactContainer";

const styles = theme => ({
  mainContainer: {}
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/details" component={DetailContainer} />
        {/* <Route path="/hotel/" component={HotelContainer} />
        <Route path="/sightsee/" component={SightseeContainer} />
        <Route path="/itinerary/" component={ItineraryContainer} />
        <Route path="/menu/" component={FoodContainer} />
        <Route path="/registry/" component={RegistryContainer} />
        <Route path="/contantus/" component={ContactContainer} /> */}
      </div>
    );
  }
}

export default withStyles(styles)(App);
