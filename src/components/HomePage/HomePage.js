import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles, List, ListItem } from "@material-ui/core";

const styles = theme => ({
  headerContainer: {},
  header: {
    fontFamily: "Alex Brush",
    color: theme.palette.secondary.dark,
    fontSize: 70,
    margin: "40px 0 0 0"
  },
  headerText: {
    fontSize: 40,
    marginBottom: 0
  },
  subHeaderText: {
    textTransform: "uppercase",
    margin: 0,
    padding: "0 10px",
    fontSize: 24,
    fontWeight: "normal"
  },
  headerNavContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    marginLeft: 35
  },
  navContainer: {
    marginBottom: 150,
    width: 260
  },
  nav: {
    fontFamily: "Alex Brush",
    fontSize: 35
  },
  navItem: {
    padding: 5,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      width: "100%",
      borderRadius: 5
    }
  },
  navLink: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    paddingTop: 5
  },
  countDownTimer: {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    color: theme.palette.grey[900],
    backgroundColor: "rgba(255,255,255,0.5)",
    width: 354
  },
  countDown: {
    marginBottom: 25
  }
});

class HomePage extends Component {
  render() {
    const { classes, countDownTimer, addLeadingZeros } = this.props;
    return (
      <div className={classes.headerNavContainer}>
        <div className={classes.headerContainer}>
          <h1 className={classes.header}>Ai Yen and Stephen</h1>
          <h1 className={classes.subHeaderText}>
            June 30th, 2019 · Vancouver Aquarium
          </h1>
        </div>
        <div className={classes.countDownTimer}>
          <span className={classes.countDown}>
            <h1>{addLeadingZeros(countDownTimer.days)}</h1>
            <span>{countDownTimer.days === 1 ? "Day " : "Days"}</span>
          </span>
          <span className={classes.countDown}>
            <h1>{addLeadingZeros(countDownTimer.hours)}</h1>
            <span>Hours</span>
          </span>
          <span className={classes.countDown}>
            <h1>{addLeadingZeros(countDownTimer.min)}</h1>
            <span>Minutes</span>
          </span>
          <span className={classes.countDown}>
            <h1>{addLeadingZeros(countDownTimer.sec)}</h1>
            <span>Seconds</span>
          </span>
        </div>
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
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
