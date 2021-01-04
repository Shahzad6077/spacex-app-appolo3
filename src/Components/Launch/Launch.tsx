import React, { FC, Fragment, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useLaunchDetailsQuery } from "../../generated/graphql";
import { makeStyles, Grid, Typography, CircularProgress } from "@material-ui/core";

/**
 * 
*      details
      id
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
        mission_patch_small
        video_link
      }
      upcoming
 * 
 */
const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: "1rem",
        [theme.breakpoints.down("sm")]: {
            marginTop: "2rem",
            boxShadow:
                "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        },
    },
}));
const Launch: FC = () => {
    const classes = useStyles();
    const param = useParams();
    const { data, loading, error } = useLaunchDetailsQuery({
        variables: { id: param?.launchId },
    });

    console.log(param);
    !loading && console.log("Details: ", data);

    return (
        <Grid item md={9} className={classes.wrapper}>
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <CircularProgress />
                </div>
            ) : (
                    <Fragment>
                        <Typography variant="h3">{data?.launch?.mission_name}</Typography>
                        <Typography variant="subtitle1">
                            {data?.launch?.launch_year}
                        </Typography>
                        <Typography variant="body2">{data?.launch?.details}</Typography>
                    </Fragment>
                )}
        </Grid>
    );
};

export default Launch;
