import React, { Component } from "react";
import { withStyles, Button } from "@material-ui/core";

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
    width: 260,
    display: "inline-flex",
    flexDirection: "column"
  },
  navLink: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    paddingTop: 5,
    alignSelf: "flex-start",
    fontSize: 18
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
  scrollPage = divName => {
    const element = document.getElementById(divName);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  };

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
          <Button
            onClick={() => {
              this.scrollPage("detailsContainer");
            }}
            className={classes.navLink}
          >
            Details
          </Button>
          <Button
            className={classes.navLink}
            onClick={() => {
              this.scrollPage("activitiesContainer");
            }}
          >
            Activities
          </Button>
          <Button
            className={classes.navLink}
            onClick={() => {
              this.scrollPage("honeyMoonContainer");
            }}
          >
            Honeymoon Fund
          </Button>
          <Button
            className={classes.navLink}
            onClick={() => {
              this.scrollPage("contactContainer");
            }}
          >
            Contact
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
