import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { FC } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as RocketAI } from "./../../Assets/rocket.svg"

const useStyles = makeStyles((theme) => ({

    txtWrapper: {

        "& h2": {
            letterSpacing: "4px",
            lineHeight: "max(2.3rem, min(6vw, 5.5rem))",

            [theme.breakpoints.down("sm")]: {
                textAlign: "center"
            }
        },
        "& h2:nth-child(1)": {
            color: theme.palette.customColors?.black
        },
        "& h2:nth-child(2)": {
            color: theme.palette.customColors?.red
        },
        "& h2:nth-child(3)": {
            color: theme.palette.customColors?.yellow
        }
    },
    btnEx: {
        display: "flex",
        marginTop: "2rem",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center"
        },
        "& a": {
            textDecoration: "none",
            color: theme.palette.customColors?.black,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            "& > div": {
                width: "20px",
                height: "20px",
                marginRight: "12px",
                position: "relative",
                "& span:nth-child(1)": {
                    width: "100%",
                    height: "100%",
                    border: `2px solid ${theme.palette.customColors?.black}`,
                    borderRadius: "50%",
                    position: "absolute",
                    zIndex: 5,
                    transition: "all 200ms linear"
                },
                "& span:nth-child(2)": {
                    width: "90%",
                    height: "90%",
                    backgroundColor: theme.palette.customColors?.smoke,
                    position: "absolute",
                    zIndex: 1,
                    bottom: "-7px",
                    right: "-7px",
                    borderRadius: "50%",
                    transition: "all 200ms linear"
                }
            },
            "&:hover": {
                "& > div > span:nth-child(2)": {
                    transition: "all 200ms linear",
                    right: '1px',
                    width: '70%',
                    bottom: '1px',
                    height: '70%',
                }
            }
        },
    },
    svgWrapper: {
        display: "flex",
        justifyContent: "center",
        "& svg": {
            width: "100%",
            height: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "1rem",
            "& svg": {
                width: "90%",
                height: "90%",
            },
        }
    },
    gridWrapper: {
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column-reverse"
        }
    }
}))
const Home: FC = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg">
            <Grid container className={classes.gridWrapper}>
                <Grid item xs={12} sm={7} className={classes.txtWrapper}>
                    <Box marginTop="2rem">
                        <Typography variant="h2">SPACE</Typography>
                        <Typography variant="h2">FOR</Typography>
                        <Typography variant="h2">EVERYONE</Typography>
                    </Box>
                    <Box className={classes.btnEx}>
                        <Link to="spacex">
                            <div>
                                <span />
                                <span />
                            </div>
                            <Typography variant="body2">
                                Explore
                        </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5} className={classes.svgWrapper}>
                    <RocketAI />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;