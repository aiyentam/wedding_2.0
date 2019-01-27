import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { withStyles, List, ListItem } from "@material-ui/core";
import HomePageContainer from "./containers/HomePageContainer/HomePageContainer";
import VenueContainer from "./containers/DetailsContainer/VenueContainer/VenueContainer";
const styles = theme => ({
  mainContainer: {},
  navContainer: {},
  nav: {
    display: "inline-flex",
    background: theme.palette.primary.main,
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  navItem: {
    padding: "10px 0 10px 0",
    flexDirection: "column",
    justifyContent: "center"
  },
  navLink: {
    color: theme.palette.primary.light,
    textDecoration: "none",
    textAlign: "center"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        <div className={classes.navContainer}>
          <List className={classes.nav}>
            <ListItem className={classes.navItem}>
              <Link className={classes.navLink} to="/">
                Home
              </Link>
            </ListItem>
            <ListItem className={classes.navItem}>
              <Link className={classes.navLink} to="/details/">
                Details
              </Link>
            </ListItem>
            {/* <ListItem className={classes.navItem}>
              <Link className={classes.navLink} to="/hotel/">
                Hotel
              </Link>
            </ListItem>
            <ListItem className={classes.navItem}>
              <Link className={classes.navLink} to="/sightsee/">
                Sightsee
              </Link>
            </ListItem>
            <ListItem className={classes.navItem}>
              <Link className={classes.navLink} to="/itinerary/">
                Itinerary
              </Link>
            </ListItem> */}
            <ListItem className={classes.navItem}>
              <Link className={classes.navLink} to="/registry/">
                Honeymoon Fund
              </Link>
            </ListItem>
            <ListItem className={classes.navItem}>
              <Link className={classes.navLink} to="/contactus/">
                Contact
              </Link>
            </ListItem>
          </List>
        </div>
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/venue/" component={VenueContainer} />
        {/* <Route path="/hotel/"  component={HotelContainer} />
        <Route path="/sightsee/"  component={SightseeContainer} />
        <Route path="/itinerary/" component={ItineraryContainer} />
        <Route path="/registry/"  component={RegistryContainer} />
        <Route path="/contantus/"  component={ContactContainer} />  */}
      </div>
    );
  }
}

export default withStyles(styles)(App);
