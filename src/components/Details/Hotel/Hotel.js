import React, { Component } from "react";
import { withStyles, a } from "@material-ui/core";

const styles = {
  wrapper: {
    textAlign: "center",
    width: "100%",
    height: "100%"
  },
  text: {
    fontFamily: "Alex Brush",
    margin: 0,
    paddingTop: 45,
    textAlign: "center",
    fontSize: 40
  },
  subText: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    fontSize: 40
  },
  textSubHeader: {
    fontSize: 15
  },
  info: {
    display: "inline-flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    height: 500
  },
  textBodyContainer: {
    margin: "0px 25px"
  },
  textBody: {
    fontSize: 30
  },
  title: {
    fontSize: 20
  },
  link: {
    color: "black",
    textDecoration: "overline underline",
    fontWeight: "bold"
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

class Hotel extends Component {
  render() {
    const { classes, ywca, ramada } = this.props;
    const ywcaUrl = "https://ywcavan.org/hotel/";
    const ramadaUrl = "https://www.ramadadowntownvancouver.com/";
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.text}>Wedding Information</h1>
        <div className={classes.info}>
          <div className={classes.textBody}>
            <h1 className={classes.subText}>Hotels</h1>
            <div className={classes.title}>
              <p style={{ marginTop: 20, marginBottom: 0 }}>
                <a className={classes.link} href={ywcaUrl}>
                  {ywca.name}
                </a>
              </p>
              <h1 className={classes.textSubHeader}>{ywca.address}</h1>
            </div>
            <h1 className={classes.textSubHeader}>06/27/2019 - 07/01/2019</h1>
            <h3 className={classes.subParagraph}>{ywca.info[0]}</h3>
            <h3 className={classes.subParagraph}>{ywca.info[1]}</h3>
            <div className={classes.textBody}>
              <h2 className={classes.headerSubText}>{ywca.bed[0]}</h2>
              <h2 className={classes.headerSubText}>{ywca.bed[1]}</h2>
            </div>
            <div>
              <h1
                className={classes.textSubHeader}
                style={{ marginBottom: 0, fontStyle: "italic" }}
              >
                For more infomation about other rooms and/or reserve a room
                please contact:
              </h1>
              <h1 className={classes.textSubHeader} style={{ margin: 0 }}>
                {ywca.contact}
              </h1>
              <h1 className={classes.textSubHeader} style={{ marginTop: 0 }}>
                {ywca.promo}
              </h1>
            </div>
          </div>
          <div className={classes.textBody}>
            <div className={classes.title}>
              <p style={{ marginTop: 20, marginBottom: 0 }}>
                <a className={classes.link} href={ramadaUrl}>
                  {ramada.name}
                </a>
              </p>
              <h1 className={classes.textSubHeader}>{ramada.address}</h1>
            </div>
            <h1 className={classes.textSubHeader}>06/27/2019 - 07/01/2019</h1>
            <h3 className={classes.subParagraph}>{ramada.info[0]}</h3>
            <h3 className={classes.subParagraph}>{ramada.info[1]}</h3>
            <div className={classes.textBody}>
              <h2 className={classes.headerSubText}>{ramada.bed[0]}</h2>
              <h2 className={classes.headerSubText}>{ramada.bed[1]}</h2>
            </div>
            <div>
              <h1
                className={classes.textSubHeader}
                style={{ marginBottom: 0, fontStyle: "italic" }}
              >
                For more infomation about other rooms and/or reserve a room
                please contact:
              </h1>
              <h1 className={classes.textSubHeader} style={{ margin: 0 }}>
                {ramada.contact}
              </h1>
              <h1 className={classes.textSubHeader} style={{ marginTop: 0 }}>
                {ramada.promo}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Hotel);
