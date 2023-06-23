import React from "react";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  photoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(2),
  },
  photo: {
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(1),
  },
}));

function ContactSection(props) {
  const classes = useStyles();

  return (
    <>
      <Box mb={3}>
        <Alert severity="info">Contact Information</Alert>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Visit Us</Typography>
          <Typography>Al Tireh Main Street</Typography>
          <Typography>Ramallah</Typography>
          <Typography variant="h6">Contact Info</Typography>
          <Typography>Phone: 0593020373</Typography>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.photoContainer}>
          <img
            src={props.bgImage}
            alt="Contact illustration"
            className={classes.photo}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ContactSection;
