import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar } from "@material-ui/core";

import PricingCards from "./pricing/index";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "3rem auto 0rem",
    width: "60%",
  },
  tabs: {
    backgroundColor: "#d2d2d2",
    width: "100%",
    display: "flex",
    padding: "0",
    minHeight: "2rem",
  },
  head: {
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    overflow: "hidden",
  },
  tabButton: {
    flex: "1",
    padding: "0",
    backgroundColor: "#f6f7f6",
    color: "#4e5b70",
    fontWeight: "600",
    height: "3rem",
    marginLeft: "1px",
    marginRight: "1px",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "#5b6f916f",
      color: "#ffffff",
    },
  },
  tabButtonActive: {
    flex: "1",
    padding: "0",
    backgroundColor: "#5b6f91",
    color: "#fbfbfd",
    height: "3rem",
    fontWeight: "600",
    marginLeft: "1px",
    marginRight: "1px",
    borderRadius: "0",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  let lim = parseInt(localStorage.getItem("limit"), 10);
  const [active, setActive] = useState(3);

  useEffect(() => {
    setActive(lim);
  }, [lim]);

  const handleClick = (e) => {
    setActive(e);
    localStorage.setItem("limit", e.toString());
    console.log(localStorage.getItem("limit"));
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.head}>
          <Toolbar className={classes.tabs}>
            <Button
              className={`${
                active === 1 ? classes.tabButtonActive : classes.tabButton
              }`}
              id="1"
              key="1"
              onClick={() => handleClick(1)}
            >
              $100k-$200k
            </Button>
            <Button
              className={`${
                active === 2 ? classes.tabButtonActive : classes.tabButton
              }`}
              id="2"
              key="2"
              onClick={() => handleClick(2)}
            >
              $200k-$300k
            </Button>
            <Button
              className={`${
                active === 3 ? classes.tabButtonActive : classes.tabButton
              }`}
              id="3"
              key="3"
              onClick={() => handleClick(3)}
            >
              $300k-$400k
            </Button>
            <Button
              className={`${
                active === 4 ? classes.tabButtonActive : classes.tabButton
              }`}
              id="4"
              key="4"
              onClick={() => handleClick(4)}
            >
              $400k-$500k
            </Button>
            <Button
              className={`${
                active === 5 ? classes.tabButtonActive : classes.tabButton
              }`}
              id="5"
              key="5"
              onClick={() => handleClick(5)}
            >
              $500k+
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <PricingCards limit={active} />
    </>
  );
}
