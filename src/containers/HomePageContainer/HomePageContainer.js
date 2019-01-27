import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import HomePage from "../../components/HomePage/HomePage";

const styles = theme => ({
  homePageContainer: {
    height: "92vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
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
      photos: 0
    };
  }

  incrementPhoto = (photo) => {
   this.setState({
     photos: photo + 1
   })
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

  componentWillUnmount() {
    this.stop();
  }

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

  stop = () => {
    clearInterval(this.interval);
  };

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDownTimer = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    const { classes } = this.props;
    const {photos} = this.state;
    return (
      <div className={classes.homePageContainer}>
        <HomePage
          {...settings}
          play={this.play}
          countDownTimer={countDownTimer}
          stop={this.stop}
          addLeadingZeros={this.addLeadingZeros}
          incrementPhoto={this.incrementPhoto}
          photos={photos}
        />
      </div>
    );
  }
}

export default withStyles(styles)(HomePageContainer);
