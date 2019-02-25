import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Hotel from "../../../components/Details/Hotel/Hotel";

const styles = theme => ({
  hotelWrapper: {
    width: "100%",
    height: "100%"
  }
});

class HotelContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ywca: {
        name: "YWCA Hotel Vancouver",
        address: "733 Beatty Street, Vancouver, BC, Canada, V6B 2M4 ",
        info: [
          "*cancellation 48hrs prior to booking*",
          "**please note, there is ongoing construction**"
        ],
        bed: [
          "One double bed w/ private bath $199 CAD/per night",
          "Two double bed w/ private bath $215 CAD/per night"
        ],
        contact: "Karen Newell | knewell@ywcavan.org | (604) 895 - 5840",
        promo: 'Mention "Tam/Wu Wedding" for those rates'
      },
      ramada: {
        name: "Ramada Limited Downtown",
        address: "435 West Pender Street, Vancouver, BC, Canada, V6B 1V2",
        info: [
          "*cancellation 45 days prior to booking*",
          "**free continental breakfast**"
        ],
        bed: ["1 Queen $289 CAD/per night", "2 Double $305 CAD/per night"],
        contact: "Alina Klovskaia | aklovskaia@hotelier.ca | (604) 331 - 1101",
        promo: 'Mention "Ai Yen & Stephen Wedding" for those rates'
      }
    };
  }

  render() {
    const { classes } = this.props;
    const { ywca, ramada } = this.state;
    return (
      <div className={classes.hotelWrapper}>
        <Hotel ywca={ywca} ramada={ramada} />
      </div>
    );
  }
}

export default withStyles(styles)(HotelContainer);
