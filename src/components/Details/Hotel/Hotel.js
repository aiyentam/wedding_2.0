import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  hotelWrapper: {
    marginBottom: 0,
    textAlign: "center"
  },
  textHeader: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Alex Brush",
    marginBottom: 0
  },
  textSubHeader: {
    fontSize: 15
  },
  title: {
    paddingLeft: 3
  },
  textBody: {
    display: "inline-flex",
    fontSize: 30,
    textAlign: "center",
    flexDirection: "column",
    marginTop: 25
  },
  headerSubText: {
    fontSize: 18,
    marginTop: 0,
    marginBottom: 0
  },
  subParagraph: {
    fontSize: 15,
    margin: 0,
    fontStyle: "italic",
    fontWeight: "bold"
  }
};

// https://www.marriott.com/hotels/travel/yvrbr-metropolitan-hotel-vancouver/

class Hotel extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hotelWrapper}>
        <h1 className={classes.textHeader}>Hotels</h1>
        <div className={classes.textBody}>
          <div className={classes.title}>
            <p style={{ marginTop: 0, marginBottom: 0 }}>
              YWCA Hotel Vancouver
            </p>
            <h1 className={classes.textSubHeader}>
              733 Beatty Street, V6B 2M4 Vancouver, Canada
            </h1>
          </div>
          <h1 className={classes.textSubHeader}>06/27/2019 - 07/01/2019</h1>
          <p className={classes.subParagraph}>
            *cancellation 48hrs prior to booking*
          </p>
          <p className={classes.subParagraph}>
            **please note, there is ongoing construction**
          </p>
          <div className={classes.textBody}>
            <h2 className={classes.headerSubText}>
              One double bed w/ private bath $199 CAD/per night
            </h2>
            <h2 className={classes.headerSubText}>
              Two double bed w/ private bath $215 CAD/per night
            </h2>
            <h1 className={classes.textSubHeader}>
              For more infomation and/or reserve a room please contact:
            </h1>
            <h1 className={classes.textSubHeader}>
              Karen Newell | knewell@ywcavan.org | (604) 895 - 5840
            </h1>
            <h1 className={classes.textSubHeader}>
              Mention "Tam/Wu Wedding" for those rates
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Hotel);
