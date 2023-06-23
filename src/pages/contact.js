import React from "react";
import Meta from "./../components/Meta";
import ContactSection from "./../components/ContactSection";
import contactImage from "../assets/contact.jpg"; // Import the image
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  boldText: {
    fontWeight: "bold",
    color: "white", // Set font color to white
  },
  largerText: {
    fontSize: "1.2rem",
    color: "white", // Set font color to white
  },
}));

function ContactPage() {
  const classes = useStyles();

  return (
    <>
      <Meta title="Contact" />
      <ContactSection
        bgColor="default"
        size="medium"
        bgImage={contactImage} // Use the imported image
        bgImageOpacity={0.7}
        title="Contact Us"
        subtitle=""
        buttonText=""
        buttonColor="primary"
        showNameField={false}
        className="contact-section" // Add a class name to the ContactSection component
      >
        <div className="full-size-image">
          <img src={contactImage} alt="Contact" /> {/* Updated alt text */}
        </div>

        <div>
          <h3 className={classes.boldText}>Visit Us</h3>
          <p className={classes.largerText}>Al Tireh Main Street Ramallah</p>
          <p className={classes.largerText}>Phone: 0593020373</p>
        </div>
      </ContactSection>
    </>
  );
}

export default ContactPage;
