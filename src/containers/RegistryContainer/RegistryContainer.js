import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Registry from "../../components/Registry/Registry";
import wallPaperThree from "../../images/WallPaper/3.png";

const styles = theme => ({
  registryContainer: {
    background: `url(${wallPaperThree})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    opacity: 0.8
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.registryContainer}>
        <Registry />
      </div>
    );
  }
}

export default withStyles(styles)(App);
