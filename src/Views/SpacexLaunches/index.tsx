import { FC } from "react";
import { Outlet, useParams } from "react-router-dom";
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
  const param = useParams();

  const lid = param?.launchId;
  const isLaunchNotSelect = typeof lid === "undefined";
  console.log(typeof lid, isLaunchNotSelect, param);
  return (
    <div className={classes.wrapper}>
      <Typography variant="h3" align="center" className={classes.h3}>
        SpaceX Launches
      </Typography>
      <Grid container>
        <Launches />
        <Outlet />
        {isLaunchNotSelect && (
          <Grid item md={9} style={{ display: "flex" }}>
            <Typography
              variant="body2"
              align="center"
              style={{ margin: "auto" }}
              className={classes.h3}
            >
              Please Select the Launch to see details.
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default SpacexLaunches;
