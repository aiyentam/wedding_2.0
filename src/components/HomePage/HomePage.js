import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Slider from "react-slick";
import "./HomePage.css";
import photoOne from '../../images/WeddingCollage/1.png';
import photoTwo from '../../images/WeddingCollage/2.png';

const styles = theme => ({
  homePageWrapper: {},
  headerContainer: {
    fontFamily: "Alex Brush",
    color: theme.palette.primary.main,
    width: "100%",
    justifyContent: "center",
    textAlign: "center"
  },
  header: {
    fontFamily: "Alex Brush",
    color: theme.palette.primary.main,
    fontSize: 45,
    marginBottom: 0
  },
  subHeader: {
    marginTop: 0
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
    marginTop: 30,
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
          <h1 className={classes.subHeader}>June 30th 2019</h1>
        </div>
        <Slider {...settings} className={classes.imageContainer}>
          <div>
            <img src={photoOne} alt="photo1" />
          </div>
          <div>
            <img src={photoTwo} alt="photo1" />
          </div>
        </Slider>
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
