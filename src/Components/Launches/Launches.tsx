import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useLaunchesDataQuery } from "./../../generated/graphql";
import {
  makeStyles,
  GridListTileBar,
  GridList,
  GridListTile,
  Grid,
  IconButton,
  CircularProgress,
  useMediaQuery,
  useTheme,
  Typography,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  listWrapper: {
    overflow: "hidden",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",

    [theme.breakpoints.up("md")]: {
      overflowY: "scroll",
      height: "420px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
  gridList: {
    [theme.breakpoints.down("sm")]: {
      flexWrap: "nowrap",
      transform: "translateZ(0)",
    },
  },
  item: {
    height: "105px",
    padding: "1rem",
    "& > div": {
      backgroundColor: "var(--black)",
    },
  },
  icon: {
    color: "rgba(255, 255, 255, 0.877)",
  },
}));
const Launches: FC = () => {
  const theme = useTheme();
  const isMatchSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchxSDown = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  const { data, loading, error } = useLaunchesDataQuery();

  !loading && console.log("Launches-Data: ", data);

  const renderList = () => {
    return data?.launches?.map((obj) => {
      const id = obj?.id;
      const launch_year = obj?.launch_year;
      const mission_name = obj?.mission_name;
      const links = obj?.links;
      const imgArr = links?.flickr_images;
      const imgLink = imgArr && imgArr[0];
      return (
        <GridListTile key={id} className={classes.item}>
          {imgLink && (
            <img src={imgLink as string} alt={mission_name as string} />
          )}

          <Link to={id as string}>
            <GridListTileBar
              title={mission_name}
              subtitle={launch_year}
              actionIcon={
                <IconButton
                  aria-label={`Open the ${mission_name}`}
                  className={classes.icon}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              }
            />
          </Link>
        </GridListTile>
      );
    });
  };

  let gridListCols = 1;

  isMatchSmDown && (gridListCols = 2.5);
  isMatchxSDown && (gridListCols = 1.5);

  return (
    <Grid
      item
      md={3}
      style={{ width: "100%" }}
      className={classes.listWrapper + " scroll"}
    >
      {loading ? (
        <div
          style={{
            height: "100%",
            display: " flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <GridList className={classes.gridList + " scroll"} cols={gridListCols}>
          {renderList()}
        </GridList>
      )}
    </Grid>
  );
};

export default Launches;
