import React, { FC } from 'react'
import { Container, Box, makeStyles, Typography, Hidden } from '@material-ui/core'
import { ReactComponent as LogoAI } from "./../../Assets/logosx.svg";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: "max(22px,min(3.5vw,26px))",
        paddingBottom: "max(22px,min(3.5vw,26px))",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    brand: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        "& h3": {
            marginLeft: "4px",
            fontFamily: "Chibold"
        }
    },
    nav: {
        display: "flex",
        "& a": {
            textDecoration: "none",
            fontWeight: 700,
            color: theme.palette.customColors?.gray2,
            padding: "8px",
            transition: "color 200ms linear"
        }
    },
    activeLink: {
        color: `${theme.palette.customColors?.black} !important`
    }
}))
const Header: FC = () => {
    const classes = useStyles()
    return (
        <Container className={classes.root} maxWidth="lg">
            <Box >
                <Link to="/" className={classes.brand}>
                    <LogoAI width="max(34px,min(6.5vw,46px))" height="max(34px,min(6.5vw,46px))" />
                    <Typography variant="h3" color="secondary">X</Typography>
                </Link>
            </Box>
            <Hidden xsDown>
                <nav className={classes.nav}>
                    <NavLink to="/" end={true} activeClassName={classes.activeLink} >Home</NavLink>
                    <NavLink to="spacex" activeClassName={classes.activeLink} >SpaceX</NavLink>
                </nav>
            </Hidden>
        </Container>
    )
}

export default Header
