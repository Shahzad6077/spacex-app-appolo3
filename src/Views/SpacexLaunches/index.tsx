import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Launches, Launch } from "./../../Components";

import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  h3: {
    background: "linear-gradient(to bottom right, #5752AF 46%, #F6D586 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    textTransform: "uppercase",
  },
}));

const SpacexLaunches: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Typography
        variant="h3"
        align="center"
        style={{ border: "2px solid var(--blue)" }}
        className={classes.h3}
      >
        SpaceX Launches
      </Typography>
      <Grid container>
        <Launches />
        <Outlet />
      </Grid>
    </div>
  );
};

export default SpacexLaunches;
