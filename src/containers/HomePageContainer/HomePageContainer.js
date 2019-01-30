import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import HomePage from "../../components/HomePage/HomePage";
import wallOne from "../../images/WallPaper/Wall01.png";

const styles = theme => ({
  homePageContainer: {
    color: theme.palette.secondary.dark,
    background: `url(${wallOne})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    opacity: 0.8
  }
});

class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      home: false,
      details: false,
      honeymood: false,
      contact: false
    };
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      const currentDate = new Date();
      const year =
        currentDate.getMonth() === 11 && currentDate.getDate() > 23
          ? currentDate.getFullYear() + 1
          : currentDate.getFullYear();
      const enddate = `${year}-06-30T00:00:00`;
      const date = this.calculateCountdown(enddate);
      date ? this.setState(date) : this.stop();
    }, 1000);
  };

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };

    if (diff >= 365.25 * 86400) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;
    return timeLeft;
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDownTimer = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.homePageContainer}>
        <HomePage
          countDownTimer={countDownTimer}
          addLeadingZeros={this.addLeadingZeros}
        />
      </div>
    );
  }
}

export default withStyles(styles)(HomePageContainer);
