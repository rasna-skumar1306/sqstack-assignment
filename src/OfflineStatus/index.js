import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  noInternet: {
    height: "100vh",
    backgroundColor: "#5b6f91",
    color: "#fbfbfd",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const NoInternet = () => {
  const classes = useStyles();
  return (
    <div className={classes.noInternet}>You are not connected to Internet!</div>
  );
};

export default NoInternet;
