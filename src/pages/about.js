import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import StatsSection from "./../components/StatsSection";
import TeamBiosSection from "./../components/TeamBiosSection";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection2
        bgColor="default"
        size="large"
        bgImage=""
        bgImageOpacity={1}
        title="We help you  find your Dress"
        subtitle="Welcome to Le Mariage, your premier destination for exquisite wedding and evening dresses for all occasions. At Le Mariage, we understand that every milestone in life deserves a touch of elegance and grace, and that is precisely what we offer to our esteemed clientele.

        Our boutique is a haven for brides-to-be, providing an enchanting collection of wedding dresses that embody both timeless beauty and contemporary sophistication. With meticulous attention to detail and a commitment to quality craftsmanship, our talented designers create gowns that capture the essence of your unique love story, ensuring that you radiate beauty and confidence on your special day.
        
        But Le Mariage is not just limited to brides. We take pride in offering a diverse range of evening dresses that cater to all celebrations and events. Whether you are attending a black-tie gala, a romantic dinner, or a festive gathering, our curated selection of elegant evening gowns will make you the epitome of style and glamour.
        
        What sets Le Mariage apart is our unwavering dedication to providing an unforgettable shopping experience. Our knowledgeable and friendly staff are here to assist you every step of the way, offering personalized guidance and expertise to help you find the perfect dress that reflects your individuality and enhances your natural beauty.
        
        We believe that true luxury lies in the seamless combination of exquisite design, superior craftsmanship, and exceptional service. That is why we source our materials from the finest fabric houses, ensuring the utmost quality and comfort in every gown. Our commitment to excellence extends beyond the boutique, as we strive to create lasting memories for our cherished customers.
        
        Whether you are embarking on a lifelong journey of love or attending a joyous celebration, Le Mariage is here to transform your dreams into reality. Step into our world of elegance and allow us to be a part of your special moments."
      />
      {/* <StatsSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="default"
        buttonPath="/pricing"
      /> */}
    </>
  );
}

export default AboutPage;
