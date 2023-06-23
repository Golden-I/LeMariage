import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import backgroundImage from "../assets/background.jpg";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="primary"
        size="large"
        bgImage={backgroundImage}
        bgImageOpacity={0.3}
        title="We help you find your dress!"
        subtitle="Unveil Your Timeless Elegance! Soon we will launch our portal!"
        buttonText="contact us"
        buttonColor="default"
        buttonPath="/contact"
      />
    </>
  );
}

export default IndexPage;
