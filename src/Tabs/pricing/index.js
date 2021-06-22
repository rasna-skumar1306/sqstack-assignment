import { makeStyles } from "@material-ui/core";
import SimpleCard from "./card";

import data from "../../data";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "4rem auto",
    width: "61%",
  },
});

const PricingCards = ({ limit }) => {
  const classes = useStyles();

  return (
    <div className={classes.cards}>
      {data
        .filter((prices) => prices.id === limit)
        .map((price) =>
          price.data.map((range) => (
            <SimpleCard key={range.name} range={range} />
          ))
        )}
    </div>
  );
};

export default PricingCards;
