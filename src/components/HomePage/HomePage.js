import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Slider from "react-slick";
import "./HomePage.css";
import photoOne from "../../images/WeddingCollage/1.png";
import photoTwo from "../../images/WeddingCollage/2.png";

const styles = theme => ({
  homePageWrapper: {},
  headerContainer: {
    color: theme.palette.primary.main,
    width: "100%",
    justifyContent: "center",
    textAlign: "center"
  },
  header: {
    fontFamily: "Alex Brush",
    color: theme.palette.primary.main,
    fontSize: 55,
    marginBottom: 0,
    fontWeight: "normal"
  },
  headerText: {
    fontSize: 40,
    marginBottom: 0,
    fontWeight: "normal"
  },
  subHeader: {
    display: "inline-flex"
  },
  subHeaderText: {
    marginTop: 0,
    padding: "0 10px",
    fontWeight: "normal",
    fontSize: 20
  },
  imageContainer: {
    width: 560,
    height: 375
  },
  countDownTimer: {
    display: "inline-flex",
    width: 556,
    justifyContent: "space-evenly",
    textAlign: "center",
    background: theme.palette.primary.main,
    color: theme.palette.primary.light,
    border: `2px solid ${theme.palette.primary.dark}`
  },
  countDown: {
    marginBottom: 25
  }
});

class HomePage extends Component {
  render() {
    const {
      classes,
      play,
      countDownTimer,
      stop,
      addLeadingZeros,
      photos,
      incrementPhoto,
      ...settings
    } = this.props;

    // const photoImage = '../../images/WeddingCollage/' + photos + '.png'
    return (
      <div className={classes.homePageWrapper}>
        <div className={classes.headerContainer}>
          <h1 className={classes.header}>Ai Yen and Stephen</h1>
          <div className={classes.subHeader}>
            <h1 className={classes.subHeaderText}>June</h1>
            <h1 className={classes.subHeaderText}>30th,</h1>
            <h1 className={classes.subHeaderText}>2019</h1>
          </div>
        </div>
        <Slider {...settings} className={classes.imageContainer}>
          <div>
            <img src={photoOne} alt="photo1" />
          </div>
          <div>
            <img src={photoTwo} alt="photo1" />
          </div>
        </Slider>
        <div className={classes.headerContainer}>
          <h1 className={classes.header}>Vancouver Aquarium</h1>
          <p className={classes.subHeaderText}>Vancouver, Canada</p>
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
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
