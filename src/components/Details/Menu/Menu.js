import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  wrapper: {
    textAlign: "center",
    width: "100%",
    height: "100%"
  },
  info: {
    display: "inline-flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    height: 500
  },
  subText: {
    fontFamily: "Alex Brush",
    marginBottom: 0,
    fontSize: 35,
    textDecoration: "overline underline"
  },
  textSubHeader: {
    fontSize: 15
  },
  menu: {
    height: "91.5%",
    display: "inline-flex",
    flexDirection: "column"
  },
  textBodyContainer: {
    display: "flex",
    flexDirection: "column"
  },
  textBody: {
    fontSize: 30,
    margin: "0 35px 0"
  },
  headerSubText: {
    fontSize: 18,
    margin: "25px 0",
    letterSpacing: 2
  },
  subParagraph: {
    fontSize: 15,
    margin: 0,
    fontStyle: "italic",
    fontWeight: "bold"
  }
};

class Menu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.info}>
          <h1 className={classes.subText} style={{ textDecoration: "none" }}>
            Dinner
          </h1>
          <div className={classes.textBodyContainer}>
            <div className={classes.textBody}>
              <h1 className={classes.subText}>Starter</h1>
              <h2 className={classes.headerSubText}>
                Parsnip & Celery Root, Maple Black Pepper Glaze
              </h2>
            </div>
            <div className={classes.textBody}>
              <h1 className={classes.subText}>Entrées</h1>
              <h2 className={classes.headerSubText}>
                Gindara Sablefish, Celery Roots & Hearts with Cabbage, Lemon
                Dressing & Watercress
              </h2>
              <h2
                className={classes.headerSubText}
                style={{ padding: "25px 0" }}
              >
                Beef Tenderloin, Golden Potato Puree, Broccolini, Black Pepper
                Vinaigrette
              </h2>
              <h2 className={classes.headerSubText}>
                Corn Polenta Ratatouille
              </h2>
            </div>
            <div className={classes.textBody}>
              <h1 className={classes.subText}>Dessert</h1>
              <h2 className={classes.headerSubText}>
                Cheese Cake with Brown Butter Caramel
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
