import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
const styles = theme => ({
  registryWrapper: {
    display: "inline-flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  honeymoonContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  honeymoon: {
    width: "40%",
    height: "94%",
    border: "15px solid #f2cbcb",
    margin: 35,
    background: "rgba(255, 255, 255, 0.8)"
  },
  text: {
    fontSize: 40,
    fontFamily: "Alex Brush",
    marginBottom: 0
  },
  paragraph: {
    margin: "0px 60px",
    fontWeight: "bold",
    height: 420,
    paddingTop: "20%"
  },
  textBody: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  subtext: {
    fontSize: 20,
    margin: 0,
    fontWeight: "normal",
    textShadow: "1px 1px #009BE1"
  },
  paypal: {
    marginRight: 5
  },
  venmo: {
    marginLeft: 5
  },
  subSecText: {
    fontSize: 15,
    marginTop: 0
  }
});

class Registry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.registryWrapper}>
        <div className={classes.honeymoonContainer}>
          <div className={classes.honeymoon}>
            <div className={classes.honeymoonText}>
              <div className={classes.text}>
                <h1 style={{ marginBottom: 0 }}>Our Honeymoon Fund</h1>
              </div>
              <div className={classes.paragraph}>
                <p>
                  “As we begin our lives together, we are grateful for support
                  from our loved ones. We recognize how lucky we are to be
                  blessed with the necessities of everyday life, and have
                  decided to instead plan an unforgettable honeymoon to Bali to
                  celebrate the beginning of our married life together. Our
                  wedding registry consists of experiences and expenses for our
                  honeymoon where guests can make contributions, if so inclined.
                  The biggest gift of all, however, is your presence on our Big
                  Day. Thank you for your love, and we can’t wait to share our
                  honeymoon adventures with you!“
                </p>
              </div>
              <div className={classes.textBody}>
                <div className={classes.paypal}>
                  <h1 className={classes.subtext}>PayPal:</h1>
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                  >
                    <input type="hidden" name="cmd" value="_donations" />
                    <input
                      type="hidden"
                      name="business"
                      value="9GQSXKESECTE8"
                    />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
                      border="0"
                      name="submit"
                      title="PayPal - The safer, easier way to pay online!"
                      alt="Donate with PayPal button"
                    />
                    <img
                      alt=""
                      border="0"
                      src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                      width="1"
                      height="1"
                    />
                  </form>
                </div>
                <div className={classes.venmo}>
                  <h1 className={classes.subtext}>Venmo:</h1>
                  <h1 className={classes.subSecText}>@aiyentam</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Registry);
